"use strict";
exports.__esModule = true;
var fs = require("fs");
var lodash_1 = require("lodash");
var fetch = require('node-fetch');
var url = 'https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json';
function adjustedCamelCase(input) {
    return input === 'IoT' ? 'iot' : lodash_1.camelCase(input);
}
function determineTypeScriptType(property, propertyName, typeSuffix) {
    if (property[typeSuffix] === 'List') {
        return determineTypeScriptType(property, propertyName, 'ItemType') + '[]';
    }
    if (property[typeSuffix] === 'Map') {
        return "{[key: string]: " + determineTypeScriptType(property, propertyName, 'ItemType') + "}";
    }
    if (property[typeSuffix]) {
        return property[typeSuffix];
    }
    var primitiveType = property['Primitive' + typeSuffix].toLowerCase();
    if (primitiveType === 'json') {
        return 'any';
    }
    if (['integer', 'double', 'long'].includes(primitiveType)) {
        primitiveType = 'number';
    }
    if (primitiveType === 'timestamp') {
        primitiveType = 'string'; // TODO consider Date.toISOString()
    }
    return "Value<" + primitiveType + ">";
}
function generateClass(namespace, name, properties, isDefault) {
    if (isDefault === void 0) { isDefault = false; }
    var propertiesEntries = lodash_1.map(properties, function (property, propertyName) {
        if (propertyName === 'Tags') {
            return "Tags?: ResourceTag[]";
        }
        return "" + propertyName + (property.Required ? '' : '?') + ": " + determineTypeScriptType(property, propertyName, 'Type');
    });
    return "export interface " + name + "Properties {\n" + propertiesEntries.map(function (e) { return "    " + e; }).join('\n') + "\n}\n\nexport " + (isDefault ? 'default ' : '') + "class " + name + " extends ResourceBase {\n    constructor(properties: " + name + "Properties, dependsOn?: Value<string> | Value<string>[]) {\n        super('AWS::" + namespace + "::" + name + "', properties, dependsOn)\n    }\n}";
}
function hasTags(properties) {
    return Object.keys(properties).includes('Tags');
}
function generateFile(fileHeader, namespace, resourceName, properties, innerTypes) {
    var innerHasTags = false;
    var innerTypesTemplates = lodash_1.map(innerTypes, function (innerType, innerTypeFullName) {
        var _a = innerTypeFullName.split('.'), innerTypeName = _a[1];
        innerHasTags = innerHasTags || hasTags(innerType.Properties);
        return generateClass(namespace, innerTypeName, innerType.Properties);
    });
    var resourceImports = ['ResourceBase'];
    if (innerHasTags || hasTags(properties)) {
        resourceImports.push('ResourceTag');
    }
    var generatedClass = generateClass(namespace, resourceName, properties, true);
    var template = fileHeader + "\n   \nimport {" + resourceImports.join(', ') + "} from '../resource'\nimport {Value} from '../dataTypes'\n\n" + innerTypesTemplates.join('\n\n') + "\n\n" + generatedClass + "\n";
    if (!fs.existsSync("./types/" + adjustedCamelCase(namespace))) {
        fs.mkdirSync("./types/" + adjustedCamelCase(namespace));
    }
    fs.writeFileSync("./types/" + adjustedCamelCase(namespace) + "/" + lodash_1.camelCase(resourceName) + ".ts", template, { encoding: 'utf8' });
}
function generateIndexFile(fileHeader, namespace, resourceNames) {
    var imports = resourceNames.map(function (resourceName) { return "import " + resourceName + " from './" + lodash_1.camelCase(resourceName) + "'"; });
    var template = fileHeader + "\n   \n" + imports.join('\n') + " \n\nexport default {\n" + resourceNames.map(function (t) { return "  " + t; }).join(',\n') + "\n}\n";
    fs.writeFileSync("./types/" + adjustedCamelCase(namespace) + "/index.ts", template, { encoding: 'utf8' });
}
function generateGrandIndexFile(fileHeader, indexContent) {
    var imports = [];
    lodash_1.forEach(indexContent, function (dependentResourceNames, namespace) {
        imports.push("import " + namespace + " from './" + adjustedCamelCase(namespace) + "'");
        dependentResourceNames.forEach(function (resourceName) { return imports.push("import " + namespace + resourceName + " from './" + adjustedCamelCase(namespace) + "/" + lodash_1.camelCase(resourceName) + "'"); });
    });
    var template = fileHeader + "\n   \n" + imports.join('\n') + " \n\nexport default {\n" + Object.keys(indexContent).map(function (t) { return "  " + t; }).join(',\n') + "\n}\n";
    fs.writeFileSync('./types/index.ts', template, { encoding: 'utf8' });
}
fetch(url)
    .then(function (res) { return res.json(); })
    .then(function (schema) {
    var fileHeader = "/* Generated from " + url + ", version " + schema.ResourceSpecificationVersion + " */";
    var indexContent = {};
    lodash_1.forEach(schema.ResourceTypes, function (resource, resourceFullName) {
        var _a = resourceFullName.split('::'), namespace = _a[1], resourceName = _a[2];
        var properties = resource.Properties || {};
        var resourcePropertyTypes = lodash_1.pickBy(schema.PropertyTypes, function (propertyType, propertyFullName) { return propertyFullName.startsWith(resourceFullName + '.'); });
        indexContent[namespace] = indexContent[namespace] || [];
        indexContent[namespace].push(resourceName);
        generateFile(fileHeader, namespace, resourceName, properties, resourcePropertyTypes);
    });
    lodash_1.forEach(indexContent, function (resourceNames, namespace) {
        generateIndexFile(fileHeader, namespace, resourceNames);
    });
    generateGrandIndexFile(fileHeader, indexContent);
});
