import { RepeatablePromise } from '../types/System/Async/RepeatablePromise';
import { DeferredPromise } from '../types/System/Async/DeferredPromise';

interface IPromise {
    DeferredPromise: DeferredPromise;
    RepeatablePromise: RepeatablePromise;
}

interface IMi5 {
    promise: IPromise;
}

declare var mi5: IMi5;
declare function using(lib: any, alias: string): void;
