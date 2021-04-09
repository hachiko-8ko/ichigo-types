import { RepeatablePromise } from '../Async/RepeatablePromise';
import { IAction1 } from '../Types/DelegateInterfaces';
/**
 * A delegate object is used by the EventHandler. It contains enough information to execute a callback synchronously or asynchronously
 * (using a promise). It also adds some strings to help in troubleshooting, because searching a recursive array of complex objects can make
 * it a bear to find out why a callback isn't being executed.
 */
export declare class Delegate {
    name?: string;
    callback: IAction1<any>;
    callbackName?: string;
    thisArg: any;
    callbackOwnerName?: string;
    promise: RepeatablePromise;
    constructor(callback: IAction1<any>, thisArg?: any);
}
