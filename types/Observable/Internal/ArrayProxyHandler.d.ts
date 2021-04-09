import { IPublishArrayChange } from './IPublishArrayChange';
export declare class ArrayProxyHandler<T = any> implements ProxyHandler<Array<T> & IPublishArrayChange<T>> {
    static methodsToWatch: string[];
    get(target: T[] & IPublishArrayChange<T>, key: PropertyKey, proxy: T[]): any;
    set(target: T[] & IPublishArrayChange<T>, key: PropertyKey, value: T, proxy: T[]): boolean;
    deleteProperty(target: T[] & IPublishArrayChange<T>, key: PropertyKey): boolean;
}
