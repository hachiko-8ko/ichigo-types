import { ProxiedArray } from '../ObservableProxy';
export declare class ArrayObservable<T = any> extends Array<T> {
    static getMergedObservable<TRow>(args: TRow[], disableAsync?: boolean): ArrayObservable<TRow> & ProxiedArray<TRow>;
    static readonly [Symbol.species]: ArrayConstructor;
    private constructor();
    publishCollectionChanged(type: string, propertyName: string, args: any[], oldValue?: T[], newValue?: T[], sender?: any): void;
    toJSON(): any;
}
