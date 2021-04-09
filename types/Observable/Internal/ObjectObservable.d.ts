import { PropertyChangedEventArgs } from '../../System/EventHandler/PropertyChangedEventArgs';
import { Nullable } from '../../System/Types/NoneType';
import { IObservable } from '../IObservable';
import { ObservableBase } from '../ObservableBase';
import { IPublishPropertyChange } from './IPublishPropertyChange';
export declare class ObjectObservable extends ObservableBase<PropertyChangedEventArgs> implements IObservable, IPublishPropertyChange {
    /**
     * This is the only way to produce an object observable, for reasons of safety.
     */
    static getMergedObservable<T extends Record<string, any>>(data: T, disableAsync?: boolean): ObjectObservable & T;
    private constructor();
    publishPropertyChanged<T>(type: string, propertyName: PropertyKey, oldValue: Nullable<T>, newValue: Nullable<T>, sender?: any): void;
    toJSON(): any;
}
