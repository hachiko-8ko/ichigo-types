import { Constructable } from '../System/Types/Constructable';
import { Component } from './Component';
import { IView } from './Contract/IView';
import { IInnerHtmlOptions } from './Options/IInnerHtmlOptions';
import { IExistingElementOptions } from './Options/IExistingElementOptions';
import { IExistingLookupOptions } from './Options/IExistingLookupOptions';
import { IOuterHtmlOptions } from './Options/IOuterHtmlOptions';
import { IComponentBindingOptions } from './Options/IComponentBindingOptions';
export interface ILoopParent<TParent extends BoundComponent<HTMLElement, any> = BoundComponent<HTMLElement, any>> {
    parent?: TParent;
}
export declare type BoundInjectOptions<TModel = any, TItem extends BoundComponent<HTMLElement, any> = BoundComponent<HTMLElement, any>> = IComponentBindingOptions<TModel, TItem> & ({
    replace?: false;
} | ({
    replace: true;
} & (IInnerHtmlOptions | IOuterHtmlOptions)) | string);
/**
 * A super-basic component that allows configuration of data-binding functions using specially-named HTML attributes, as in Angular
 * or Vue.
 */
export declare class BoundComponent<TElement extends HTMLElement = HTMLElement, TModel = any> extends Component<TElement> implements IView<TElement, TModel> {
    /**
     * Use this to convert elements to components. It's most useful for custom tags, for example, <my-component></my-component>.
     * It will become <div id="foo">Whatever the component content is</div>.
     * To replace the element (copying existing attributes) send the relevant options, plus {replace: true}.
     *
     * In almost every case, viewModel should be set. But it's not possible to change that and still be compatible with the base
     * class inject(). This is a typescript-only issue but it makes things ugly.
     *
     * Accepts Keyword Arguments. And practically demands their use to set viewModel.
     */
    static inject<TElement extends HTMLElement, TModel>(selector?: string | HTMLElement | NodeListOf<HTMLElement> | HTMLElement[] | {
        parent?: Element;
        selector: string;
    }, options?: BoundInjectOptions<TModel>, constructor?: Constructable<BoundComponent<TElement, TModel>>, viewModel?: TModel): Array<BoundComponent<TElement, TModel>>;
    /**
     * Call to inject() with a cleaner argument order.
     */
    static injectBind<TElement extends HTMLElement, TModel>(viewModel?: TModel, selector?: string | HTMLElement | NodeListOf<HTMLElement> | HTMLElement[] | {
        parent?: Element;
        selector: string;
    }, options?: BoundInjectOptions<TModel>, constructor?: Constructable<BoundComponent<TElement, TModel>>): Array<BoundComponent<TElement, TModel>>;
    private static _replaceElementWithBoundComponent<TElement, TModel>(existingElement, viewModel, options, constructor);
    private static _convertElementToBoundComponent<TElement, TModel>(existingElement, viewModel, options, constructor);
    viewModel: TModel;
    private _name?;
    private _attributeBindings;
    private _valueAttribute?;
    private _writeTargets;
    private _cssClasses?;
    private _cssClassSwitches;
    private _cssStyle?;
    private _cssDisplay?;
    private _previousCssDisplaySetting?;
    private _loop?;
    private _loopItemClass;
    private _replacements;
    private _async;
    private _defer;
    private _initialized;
    /**
     * Creates an instance of BoundComponent. Many options:
     * No arguments beyond viewModel - Create a basic DIV
     * IExistingLookupOptions - Look up an existing element in the DOM and convert it to a component
     * IExistingElementOptions - Take an existing element and convert it to a component
     * IInnerHtmlOptions - Create a new component setting the inner HTML
     * IOuterHtmlOptions - Create a new component setting the outer HTML (including the tag for the component itself)
     * string - Create a new component setting the outer HTML to the string
     */
    constructor(viewModel: TModel);
    constructor(viewModel: TModel, existingElement: IExistingElementOptions<TElement> & IComponentBindingOptions);
    constructor(viewModel: TModel, existingElement: IExistingLookupOptions & IComponentBindingOptions);
    constructor(viewModel: TModel, newElement: IInnerHtmlOptions & IComponentBindingOptions);
    constructor(viewModel: TModel, outerElement: IOuterHtmlOptions & IComponentBindingOptions);
    constructor(viewModel: TModel, newElement: string);
    write(evt: Event): void;
    /**
     * Bind this.render() to the model passed in, or the view model if none passed in.
     */
    observe(model?: any): this;
    /**
     * Bind this.render() to all observable properties found in the model passed in,
     * or the view model if none passed in. This only goes one level deep, so it
     * won't pick up nested objects, but it's probably good enough in 60% of cases.
     */
    observeAll(model?: any): this;
    render(): this;
    setTemplate(templateText: string, update?: boolean): this;
    setHtmlTemplate(templateProperty?: string, update?: boolean): this;
    setTextTemplate(templateProperty?: string, update?: boolean): this;
    setLoop(source: string, fragment: DocumentFragment | string, skipPostProcess?: boolean, update?: boolean): this;
    removeLoop(update?: boolean): this;
    setValueAttribute(source?: string | undefined, update?: boolean): this;
    setVisibility(source?: string | undefined, negative?: boolean, update?: boolean): this;
    addAttributeMapping(attribute: string, source?: string, update?: boolean): this;
    addBooleanAttributeMapping(attribute: string, source?: string, negative?: boolean, update?: boolean): this;
    removeAttributeMapping(attribute: string, update?: boolean): this;
    setCssClass(cls?: string | undefined, update?: boolean): this;
    setCssStyle(style?: string | undefined, update?: boolean): this;
    addCssClassSwitch(cls: string, source?: string, negative?: boolean, update?: boolean): this;
    removeCssClassSwitch(cls: string, update?: boolean): this;
    addWriteEvent(): this;
    addWriteTarget(target?: string, update?: boolean): this;
    removeWriteTarget(target: string, update?: boolean): this;
    /**
     * Override this method to unbind a view from an observable.
     */
    dispose(): void;
    /**
     * Override this if you need to do something else after the loop is added to the DOM.
     */
    protected loopPostProcess(row: any, addedContent: Node[], allRows: Iterable<any>, previousContent: DocumentFragment): void;
    private _getStringValue(name, skipEscape?);
    private _getUntypedValue(name);
    private _updateHtmlReplacements();
    private _configureComponentBindings();
    private _parseAttributeName(name);
}
export declare class TemplateReplacementValue extends HTMLElement {
    constructor();
}
