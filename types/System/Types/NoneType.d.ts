export declare type None = null | undefined;
export declare type NotNone = object | string | number | boolean | symbol;
export declare type Nullable<T> = T | None;
export declare function isNone(test: any): test is None;
