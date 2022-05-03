import { Nullable } from '../types/System/Types/NoneType';
import { ObservableBase, IObservableOptions } from '../types/Observable/ObservableBase';
import { ObservableProperty } from '../types/Observable/ObservableProperty';
import { ObservableProxy } from '../types/Observable/ObservableProxy';
import { ObservableState } from '../types/Observable/ObservableState';
import { ArrayChangedEventArgs } from '../types/System/EventHandler/ArrayChangedEventArgs';
import { EventHandler } from '../types/System/EventHandler/EventHandler';
import { PropertyChangedEventArgs } from '../types/System/EventHandler/PropertyChangedEventArgs';

interface IObservable {
    EventHandler: EventHandler;
    observableAssign(target: any, ...sources: any[]): any;
    ObservableProxy: ObservableProxy;
    ObservableProperty: ObservableProperty<PropertyChangedEventArgs>;
    ObservableState: ObservableState;
    ArrayChangedEventArgs: ArrayChangedEventArgs;
    PropertyChangedEventArgs: PropertyChangedEventArgs;
}

interface IMi5 {
    observable: IObservable;
}

declare var mi5: IMi5;
declare function using(lib: any, alias: string): void;
