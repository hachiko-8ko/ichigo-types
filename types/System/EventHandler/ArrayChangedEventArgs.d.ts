export declare class ArrayChangedEventArgs<T = any> {
    /**
     * The type of operation (method, set, delete)
     */
    type: string;
    propertyName: PropertyKey;
    args: any[];
    oldValue?: T[];
    newValue?: T[];
    sender?: any;
    constructor(args?: ArrayChangedEventArgs<T>);
}
