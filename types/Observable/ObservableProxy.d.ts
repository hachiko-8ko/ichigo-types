import { IObservable } from './IObservable';
export declare type ProxiedObject<T extends object> = T & IObservable;
export declare type ProxiedArray<T> = Array<T> & IObservable;
export declare abstract class ObservableProxy {
    /**
     * Create a proxy for the input object.
     */
    static proximate<T extends object = object>(model: T, disableAsync?: boolean, onlyIfChanged?: boolean): T & IObservable;
    static proximate<T = any>(model: T, disableAsync?: boolean, onlyIfChanged?: boolean): {
        value: T;
    } & IObservable;
    /**
     * A configurable version of proximate() called on an object. By making it generalized and configurable, this allows the caller to
     * track methods that are called, based on a configurable list.
     *
     * If the object is a complex object, where child objects are modified, not the main object, changes would not be caught.
     * One way to handle that is to make the child object a proxy. Another way is to access the child object only through methods
     * and use this.
     */
    static proximateObject<T extends object = object>(model: T, disableAsync?: boolean, onlyIfChanged?: boolean, methodsToWatch?: string[], watchSet?: boolean, watchDelete?: boolean): T & IObservable;
    /**
     * Proximate an array.
     */
    static proximateArray<T>(model: T[], disableAsync?: boolean, onlyIfChanged?: boolean): T[] & IObservable;
    private static _models;
}
