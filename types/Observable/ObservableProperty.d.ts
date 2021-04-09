import { PropertyChangedEventArgs } from '../System/EventHandler/PropertyChangedEventArgs';
import { Nullable } from '../System/Types/NoneType';
import { IObservableOptions, ObservableBase } from './ObservableBase';
/**
 * An ObservableProperty is a property that automatically raises a PropertyChanged event when it is modified. This is more
 * convenient than having to do it manually every time you need it.
 */
export declare class ObservableProperty<T> extends ObservableBase<PropertyChangedEventArgs> {
    propertyName: string;
    protected _value: T;
    protected _triggerOnlyOnChange: boolean;
    constructor(value: T, options?: IObservableOptions & {
        onlyWhenChanged?: boolean;
    });
    value: T;
    /**
     * Get the value (if a string) that has had special HTML characters escaped.
     */
    readonly safeValue: string;
    toString(): string;
    toJSON(): any;
    protected publishPropertyChanged(type: string, propertyName: PropertyKey, oldValue: Nullable<T>, newValue: Nullable<T>, sender?: any): void;
}
export declare function observablePropertyCheck<T extends any>(obj: any): obj is ObservableProperty<T>;
