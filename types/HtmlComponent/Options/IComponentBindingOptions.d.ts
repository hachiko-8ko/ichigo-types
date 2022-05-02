import { BoundComponent } from '../BoundComponent';
import { Constructable } from '../../System/Types/Constructable';
import { IObservable } from '../../Observable/IObservable';
import { IExistingElementOptions } from './IExistingElementOptions';
import { IExistingLookupOptions } from './IExistingLookupOptions';
import { IInnerHtmlOptions } from './IInnerHtmlOptions';
import { IOuterHtmlOptions } from './IOuterHtmlOptions';
export interface IComponentBindingOptions<TModel = any, TItem extends BoundComponent<HTMLElement, any> = BoundComponent<HTMLElement, any>> {
    async?: boolean;
    defer?: boolean;
    observeViewModel?: boolean;
    observeAllViewModel?: boolean;
    observeTargets?: IObservable[];
    observeAllTargets?: any[];
    loopItemClass?: Constructable<TItem>;
}
/**
 * Try to provide some custom classes to help clean up the mess that TypeScript and VSCode provides whenever
 * the mess they call overloading explodes. If you mess up a property, the error message complains that
 * the object you provided doesn't include the various properties of the string object, which isn't helpful.
 */
export declare abstract class ComponentBindingOptions<TModel = any, TItem extends BoundComponent<HTMLElement, any> = BoundComponent<HTMLElement, any>> implements IComponentBindingOptions<TModel, TItem> {
    async?: boolean;
    defer?: boolean;
    observeViewModel?: boolean;
    observeAllViewModel?: boolean;
    observeTargets?: IObservable[];
    observeAllTargets?: any[];
    loopItemClass?: Constructable<TItem>;
    replace?: boolean;
    constructor(opt: IComponentBindingOptions<TModel, TItem>);
}
/**
 * Try to provide some custom classes to help clean up the mess that TypeScript and VSCode provides whenever
 * the mess they call overloading explodes. If you mess up a property, the error message complains that
 * the object you provided doesn't include the various properties of the string object, which isn't helpful.
 */
export declare class ExistingElementBindingOptions<TModel = any, TItem extends BoundComponent<HTMLElement, any> = BoundComponent<HTMLElement, any>, TElement = HTMLElement> extends ComponentBindingOptions<TModel, TItem> implements IExistingElementOptions<TElement> {
    element: TElement;
    properties?: Record<string, any>;
    attributes?: Record<string, any>;
    replace?: boolean;
    constructor(opt: IComponentBindingOptions<TModel, TItem> & IExistingElementOptions<TElement>);
}
/**
 * Try to provide some custom classes to help clean up the mess that TypeScript and VSCode provides whenever
 * the mess they call overloading explodes. If you mess up a property, the error message complains that
 * the object you provided doesn't include the various properties of the string object, which isn't helpful.
 */
export declare class ExistingLookupBindingOptions<TModel = any, TItem extends BoundComponent<HTMLElement, any> = BoundComponent<HTMLElement, any>> extends ComponentBindingOptions<TModel, TItem> implements IExistingLookupOptions {
    parent?: Element;
    selector: string;
    properties?: Record<string, any>;
    attributes?: Record<string, any>;
    replace?: boolean;
    constructor(opt: IComponentBindingOptions<TModel, TItem> & IExistingLookupOptions);
}
/**
 * Try to provide some custom classes to help clean up the mess that TypeScript and VSCode provides whenever
 * the mess they call overloading explodes. If you mess up a property, the error message complains that
 * the object you provided doesn't include the various properties of the string object, which isn't helpful.
 */
export declare class InnerHtmlBindingOptions<TModel = any, TItem extends BoundComponent<HTMLElement, any> = BoundComponent<HTMLElement, any>> extends ComponentBindingOptions<TModel, TItem> implements IInnerHtmlOptions {
    type?: string;
    innerHtml?: string;
    id?: string;
    properties?: Record<string, any>;
    attributes?: Record<string, any>;
    replace?: boolean;
    constructor(opt: IComponentBindingOptions<TModel, TItem> & IInnerHtmlOptions);
}
/**
 * Try to provide some custom classes to help clean up the mess that TypeScript and VSCode provides whenever
 * the mess they call overloading explodes. If you mess up a property, the error message complains that
 * the object you provided doesn't include the various properties of the string object, which isn't helpful.
 */
export declare class OuterHtmlBindingOptions<TModel = any, TItem extends BoundComponent<HTMLElement, any> = BoundComponent<HTMLElement, any>> extends ComponentBindingOptions<TModel, TItem> implements IOuterHtmlOptions {
    outerHtml: string;
    id?: string;
    properties?: Record<string, any>;
    attributes?: Record<string, any>;
    replace?: boolean;
    constructor(opt: IComponentBindingOptions<TModel, TItem> & IOuterHtmlOptions);
}
