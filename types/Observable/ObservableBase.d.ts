import { RepeatablePromise } from '../System/Async/RepeatablePromise';
import { IObservable } from './IObservable';
import { PropertyChangedEventArgs } from '../System/EventHandler/PropertyChangedEventArgs';
import { EventHandler } from '../System/EventHandler/EventHandler';
import { IAction1 } from '../System/Types/DelegateInterfaces';
import { RecursiveArray } from '../System/Types/RecursiveArray';
import { Delegate } from '../System/EventHandler/Delegate';
/**
 * Common logic between the different observable classes. These implement IObservable. The invocation itself varies from class to class.
 */
export declare abstract class ObservableBase<T = any> implements IObservable {
    changeHandler: EventHandler<T>;
    constructor(options?: IObservableOptions);
    subscribe(delegate: RecursiveArray<Delegate>): void;
    subscribe(callback: IAction1<PropertyChangedEventArgs>, thisArg?: any): RepeatablePromise | undefined;
    /**
     * Subscribe the input's delegate to this object's changes.
     */
    sendChangeEventsTo(forwardTo: IObservable): void;
    /**
     * Subscribe this object's delegate to the input object's changes.
     */
    receiveChangeEventsFrom(bubbleFrom: IObservable): void;
    unsubscribeCallback(callback: IAction1<T>): void;
    unsubscribeSender(sender: any): void;
    unsubscribeDelegate(delegate: RecursiveArray<Delegate>): void;
    /**
     * This is probably frowned upon (see how TS doesn't like it), but it's valid JS.
     * It's only intended for troubleshooting, not real logic. There are times when you're
     * trying to identify exactly which delegates are subscribed, and this is really hard when
     * nothing has human-readable names.
     */
    tagDelegate(name: string): void;
    dispose(): void;
    toJSON(): any;
}
export interface IObservableOptions {
    name?: string;
    /**
     * This observable is a child of a different observable. Any events in this should be forwarded.
     */
    forwardTo?: IObservable;
    /**
     * This observable contains other observables. Any events in them should be received.
     */
    bubbleFrom?: IObservable[];
    /**
     * Execute delegates synchronously.
     */
    disableAsync?: boolean;
}
