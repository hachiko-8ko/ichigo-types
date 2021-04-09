/**
 * A deferred promise is a wrapper around a promise that allows it to be triggered later. In pure JS, this is harder
 * than it needs to be, and it takes a weird hack to make it work. This class is little more than a wrapper around
 * said hack.
 *
 * Otherwise, this uses a real promise internally, so aside from the wrapping object, it has no special logic. I chose
 * not to re-implement the Promise API synchronously, so it uses the same microtask queue.
 *
 * The wrapping API is tweaked a little to avoid some common pitfalls that are caused by flaws in the Promise
 * design. For example, having onfulfilled and onrejected in the same step means that errors in the fulfilled
 * half will not be caught by the error handler.  Rather than say "don't use that input" like most instructors,
 * I just got rid of it (it's still accessible on the output property, if you want to use it ... but don't).
 */
export declare class DeferredPromise {
    private throwOnUnhandledError;
    [Symbol.toStringTag]: "DeferredPromise";
    private _promise;
    constructor(onfulfilled?: (value: any) => any | PromiseLike<any>, throwOnUnhandledError?: boolean);
    /**
     * Use in async/await code. The following will work if a result is returned.
     * const result = await deferred.output;
     * console.log(result);
     */
    readonly output: Promise<any>;
    /** Use this to invoke the callback */
    resolve: (args?: any) => void;
    /** Use this to reject the promise right out. Which is probably useless but you never know. */
    reject: (args?: any) => void;
    /** Then() only has one option, because it's too easy to forget that the onrejected callback doesn't handle the onfulled callback. */
    then<TResult1 = any>(onfulfilled?: (value: any) => TResult1 | PromiseLike<TResult1>, throwOnUnhandledError?: boolean): this;
    catch<TResult = never>(onrejected?: (err: any) => TResult | PromiseLike<TResult>, throwOnUnhandledError?: boolean): this;
}
