import { PropertyChangedEventArgs } from '../System/EventHandler/PropertyChangedEventArgs';
import { Nullable } from '../System/Types/NoneType';
import { IObservableOptions, ObservableBase } from './ObservableBase';
/**
 * An observable state that should only be accessed using the relevant methods, allowing atomic changes to multiple properties
 * in multiple objects, raising a single event.
 */
export declare class ObservableState<T = any> extends ObservableBase<PropertyChangedEventArgs> {
    propertyName: string;
    private _value;
    /**
     * Pass the initial value for the state.
     * To clone another observable's state, pass an ObservableState.
     */
    constructor(value: ObservableState<T>, options?: IObservableOptions);
    constructor(value: T, options?: IObservableOptions);
    /**
     * Overwrites the entire value.
     */
    value: T;
    getSafeValue(property?: keyof T): string;
    getValue(property?: keyof T): T[keyof T] | T;
    getState(): Readonly<T>;
    /**
     * SetState() updates the value of the observable state, raising an event on the changeHandler and returning the object
     * {oldValue, newValue, returnValue}.
     */
    setState(value: T, overWriteAll: true): {
        oldValue: T;
        newValue: T;
    };
    setState(value: Partial<T>): {
        oldValue: T;
        newValue: T;
    };
    setState(value: (prev: T) => any): {
        oldValue: T;
        newValue: T;
        returnValue?: any;
    };
    toString(): string;
    toJSON(): any;
    protected publishPropertyChanged(type: string, propertyName: PropertyKey, oldValue: Nullable<T>, newValue: Nullable<T>, sender?: any): void;
}
export declare function observableStateCheck<T extends any>(obj: any): obj is ObservableState<T>;
