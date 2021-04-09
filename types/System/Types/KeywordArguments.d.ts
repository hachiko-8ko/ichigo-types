/**
 * This module provides an implementation of keyword arguments, as seen in Python and C#. It makes configurable
 * functions so much quicker and easier than flat arguments (forcing you to put undefined manually in different
 * slots) or options objects (takes more time to produce, especially if you need to new it up).
 *
 * Call functions having keyword arguments using this syntax:
 * callme(arg1, arg2, kw('something', kw1), kw('somethingElse', kw2))
 *
 * To make them work, in the function itself, you need to copy and paste. For example:
 * ({ arg1, arg2, something, somethingElse } = Kwarg.parse({ arg1, arg2, something, somethingElse }));
 */
export declare class Kwarg<T = any> {
    /**
     * Remember this template:
     * ({ } = Kwarg.parseArgs({ }));
     * Include default values in the first object, not the second.
     *
     * If you want to capture rest parameters, use this:
     * ({ $rest$ } = Kwarg.parseArgs({ , ...rest }));
     *
     * If you want allowUnknownKeyword to be true, use this:
     * ({ $$kw$$ } = Kwarg.parseArgs({ }, true));
     */
    static parseArgs(args: Record<string, any>, allowUnknownKeyword?: boolean): any;
    static unpack(args: Record<string, any>): any[];
    name: string;
    value?: T;
    constructor(a: string, b?: T);
    isMatch(key: string): boolean;
}
/**
 * Create a keyword argument, either kw('name', value), kw(['name', value]), or kw({name: value});
 * I really would like something like "kw(name) = value" but that's not valid JS.
 */
export declare function kw<T>(name: string, b?: T): any;
export declare function kw<T>(arr: [string, T]): any;
export declare function kw<T>(map: Record<string, T>): any;
export declare function kwargsToObject<TOutput extends Record<string, any>>(arr: Kwarg<any>[]): TOutput;
