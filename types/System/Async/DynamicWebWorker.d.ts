/**
 * Creates a dedicated web worker that communicates via deferreds. It can execute whatever function
 * you give it. TaskStart() acts kind of like doing new Thread() and Thread.Start() in one step.
 * It is possible to do all this manually, but this helper class makes it a fairly trivial operation.
 *
 * Hackwork is used to avoid the need to create a specialized web worker js file. The worker created takes a
 * function and arguments, executes them in its own thread, and returns the result.
 *
 * Further hackwork is needed because web works have no access to modules, no access to closures, and can only
 * communiate in strings. The function to be executed needs to be passed as a string in the message between
 * threads.
 *
 * While it is possible to create a version that does not need to eval() the function string on every execution,
 * this requires the caller to manually code everything that you see in here the constructor. No helpers are allowed
 * (no access to other objects). If you wanted to do everything yourself, you could just make a web worker the right
 * way, without the helper.
 */
export declare class DynamicWebWorker {
    private deferredId;
    private deferreds;
    private worker?;
    constructor();
    /**
     * Starting a task returns a deferred promise that is resolved when the worker thread has completed its task.
     *
     * Remember that closures DO NOT WORK. Pass your arguments (which must be JSON.stringifiable).
     */
    taskStart(fn: (...args: any[]) => any, ...args: any[]): Promise<any>;
    private _setUpWorker(callback);
}
