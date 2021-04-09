import { IAction1 } from '../Types/DelegateInterfaces';
import { IDisposable } from '../Types/IDisposable';
import { RepeatablePromise } from '../Async/RepeatablePromise';
import { Delegate } from './Delegate';
import { RecursiveArray } from '../Types/RecursiveArray';
/**
 * I chose to use C# style events, not JS/TS, because the JS/TS way of doing delegates/custom events is a NIGHTMARE. Sure,
 * CustomEvent works, but on the TS side the code required to make TSC happy with valid javascript is awful and non-intuitive.
 * On the JS side, you have the problem that every handler picks it up, not just the ones that are bound to the relevant HTML
 * element, so elements need to pass the source as an argument and check it (like jquery and $(document).on()).
 *
 * After getting it working, all I could think about was how bad the code was, so I rewrote it avoiding the JS pattern entirely.
 *
 * This can be synchronous (callbacks) or asynchronous (promises).  When it is async, the code executes after the current synchronous
 * events run to completion. This could create bugs in synchronous code, but is best for browser events. This handler is primarily used for
 * browser events, so async is default.
 *
 * But if you're triggering async events in code and stepping through it in Chrome, what you see won't make sense, because the async
 * events won't occur until right away. It can be hard to troubleshoot.
 */
export declare class EventHandler<TArgs = any> implements IDisposable {
    private _disableAsync;
    delegate: RecursiveArray<Delegate>;
    constructor(_disableAsync?: boolean);
    subscribe(delegate: RecursiveArray<Delegate>): void;
    subscribe(callback: IAction1<TArgs>, thisArg?: any): RepeatablePromise | undefined;
    unsubscribeCallback(callback: IAction1<TArgs>): void;
    unsubscribeListener(sender: any): void;
    unsubscribeDelegate(delegate: RecursiveArray<Delegate>): void;
    invoke(args: TArgs): void;
    find({callback, thisArg, firstMatch}?: {
        callback?: IAction1<any>;
        thisArg?: any;
        firstMatch?: boolean;
    }): Delegate[];
    clear(): void;
    dispose(): void;
}
