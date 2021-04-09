/**
 * A simple deep clone method taken from stack overflow.
 * It's not as powerful as something like lodash but it should handle date, null, and
 * undefined, unlike JSON serialization.
 */
export declare function cloneDeep<T>(obj: T): T;
export declare function cloneDeep(obj: any, hash?: WeakMap<any, any>): any;
