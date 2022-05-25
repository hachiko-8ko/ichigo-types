/**
 * Make it easier to create simple comparison functions on (possibly complex) objects. Typical use: arr.sort(orderBy(o => o.id))
 */
export declare function orderBy<T>(propertyFn: (value: T) => any): (a: T, b: T) => 1 | 0 | -1;
