import { RecursiveArray } from "../Types/RecursiveArray";
/**
 * Return elements of array a lined up with elements of array b. Both arrays don't have to be the same length.
 */
export declare function zip<T1, T2>(a: T1[], b: T2[]): Array<[T1, T2]>;
/**
 * Return a cartesian join (cross join) between arrays a and b.
 */
export declare function cartesian<T1, T2>(a: T1[], b: T2[]): Array<[T1, T2]>;
/**
 * Generate a range of integers, counting up by 1, for the given length. Stolen from Python.
 */
export declare function range(length: number): number[];
/**
 * Given an array of items and other arrays, flatten them out into a single array.
 */
export declare function traverse<T>(arr: T | T[] | RecursiveArray<T>): IterableIterator<T>;
