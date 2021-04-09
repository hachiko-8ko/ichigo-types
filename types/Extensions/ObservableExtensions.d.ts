import { ObservableProperty } from '../Observable/ObservableProperty';
/**
 * This script contains extensions to make it faster to make properties into ObservableProperty.
 *
 * In your main process, import this script (import '/path/to/Ichigo/Extensions/ObservableExtensions') to add
 * these extensions to the prototypes.
 */
declare global  {
    interface Object {
        toObservable<T>(name?: string): ObservableProperty<T>;
    }
    interface String {
        toObservable(name?: string): ObservableProperty<string>;
    }
    interface Number {
        toObservable(name?: string): ObservableProperty<number>;
    }
    interface Boolean {
        toObservable(name?: string): ObservableProperty<boolean>;
    }
}
