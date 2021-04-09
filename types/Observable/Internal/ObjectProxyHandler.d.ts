import { IPublishPropertyChange } from './IPublishPropertyChange';
export declare class ObjectProxyHandler<T extends Record<string, any> = any> implements ProxyHandler<T & IPublishPropertyChange> {
    private _methodsToWatch;
    private _watchSet;
    private _watchDelete;
    private _triggerOnlyOnChange;
    constructor(_methodsToWatch: string[], _watchSet: boolean, _watchDelete: boolean, _triggerOnlyOnChange?: boolean);
    get(target: T & IPublishPropertyChange, key: PropertyKey, proxy: T): any;
    set(target: T & IPublishPropertyChange, key: PropertyKey, value: any, proxy: T): boolean;
    deleteProperty(target: T & IPublishPropertyChange, key: PropertyKey): boolean;
}
