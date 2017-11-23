import Template from "./types/template";
import * as _Fn from './types/functions';
export declare const Fn: typeof _Fn;
import * as _Refs from './types/refs';
export declare const Refs: typeof _Refs;
export * from './types';
export * from './types/resource';
export default function cloudform(template: Template): string;
