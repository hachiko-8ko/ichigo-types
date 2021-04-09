import { DeferredPromise } from "./DeferredPromise";
/**
 * The promise API is nice, mostly, but the main thing preventing use of a promise as an event handler is that
 * it only executes once. After that point, it is resolved, and there is no way to flip it back.
 *
 * The repeatable promise keeps the promise API and creates the illusion that the promise is repeated by
 * rebuilding the chain each time. It's really a deferred factory but it pretends to be a deferred. I'm sure
 * this has a performance penalty.
 *
 * You should not attach actual promises into the then() chain, because they can't be repeated. The Promise type isn't
 * allowed but there are ways to get around the TS compiler. The TS type definition for Promise and PromiseLike isn't
 * completely correct, anyway, so it's easy to get used to using the any type and make broken code.
 *
 * You cannot async/await a repeatable promise itself but you can await a single resolution. Async/await is sugar that
 * creates a regular, non-repeatable, promise.
 */
export declare class RepeatablePromise {
    private onUnhandledError;
    private throwOnUnhandledError;
    [Symbol.toStringTag]: "RepeatablePromise";
    private callbacks;
    constructor(onfulfilled?: (value: any) => any | PromiseLike<any>, onUnhandledError?: ((value: any) => any | PromiseLike<any>) | null, throwOnUnhandledError?: boolean);
    resolve(args?: any): Promise<any>;
    reject(args?: any): Promise<any>;
    then<TResult1 = any>(onfulfilled?: (value: any) => TResult1 | PromiseLike<TResult1>): this;
    catch<TResult = never>(onrejected?: (reason: any) => TResult | PromiseLike<TResult>): this;
    build(): DeferredPromise;
}
