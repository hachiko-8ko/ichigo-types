import { Constructable } from '../System/Types/Constructable';
import { Component } from './Component';
import { IView } from './Contract/IView';
import { IInnerHtmlOptions } from './Options/IInnerHtmlOptions';
import { IExistingElementOptions } from './Options/IExistingElementOptions';
import { IExistingLookupOptions } from './Options/IExistingLookupOptions';
import { IOuterHtmlOptions } from './Options/IOuterHtmlOptions';
import { IComponentBindingOptions } from './Options/IComponentBindingOptions';
export interface ILoopParent<TParent extends BoundComponent<HTMLElement, any> = BoundComponent<HTMLElement, any>> {
    loopParent?: TParent;
}
export declare type BoundInjectOptions<TModel = any, TItem extends BoundComponent<HTMLElement, any> = BoundComponent<HTMLElement, any>> = IComponentBindingOptions<TModel, TItem> & ({
    replace?: false;
    parent?: Element;
} | ({
    replace: true;
    parent?: Element;
} & (IInnerHtmlOptions | IOuterHtmlOptions)) | string);
/**
 * A super-basic component that allows configuration of data-binding functions using specially-named HTML attributes, as in Angular
 * or Vue.
 */
export declare class BoundComponent<TElement extends HTMLElement = HTMLElement, TModel = any, TParent extends BoundComponent = any> extends Component<TElement> implements IView<TElement, TModel> {
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
    static inject<TElement extends HTMLElement, TModel>(selector?: string | HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], options?: BoundInjectOptions<TModel>, constructor?: Constructable<BoundComponent<TElement, TModel>>, viewModel?: TModel): Array<BoundComponent<TElement, TModel>>;
    /**
     * Call to inject() with a cleaner argument order.
     */
    static injectBind<TElement extends HTMLElement, TModel>(viewModel?: TModel, selector?: string | HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], options?: BoundInjectOptions<TModel>, constructor?: Constructable<BoundComponent<TElement, TModel>>): Array<BoundComponent<TElement, TModel>>;
    private static _replaceElementWithBoundComponent<TElement, TModel>(existingElement, viewModel, options, constructor);
    private static _convertElementToBoundComponent<TElement, TModel>(existingElement, viewModel, options, constructor);
    viewModel: TModel;
    loopParent?: TParent;
    paused: boolean;
    private _id?;
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
    constructor(viewModel: TModel, options?: IComponentBindingOptions);
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
    setLoop(source: string, fragment: DocumentFragment | string, skipPostProcess?: boolean, update?: boolean, otherComponentId?: string): this;
    removeLoop(update?: boolean): this;
    setValueAttribute(source?: string | undefined, update?: boolean, otherComponentId?: string): this;
    setVisibility(source?: string | undefined, negative?: boolean, update?: boolean, otherComponentId?: string): this;
    addAttributeMapping(attribute: string, source?: string, update?: boolean, otherComponentId?: string): this;
    addBooleanAttributeMapping(attribute: string, source?: string, negative?: boolean, update?: boolean, otherComponentId?: string): this;
    removeAttributeMapping(attribute: string, update?: boolean): this;
    setCssClass(cls?: string | undefined, update?: boolean, otherComponentId?: string): this;
    setCssStyle(style?: string | undefined, update?: boolean, otherComponentId?: string): this;
    addCssClassSwitch(cls: string, source?: string, negative?: boolean, update?: boolean, otherComponentId?: string): this;
    removeCssClassSwitch(cls: string, update?: boolean): this;
    addWriteEvent(): this;
    addWriteTarget(target?: string, update?: boolean): this;
    removeWriteTarget(target: string, update?: boolean): this;
    /**
     *
     * Auto-Inject calls the default injectBind() on the default BoundComponent class, with no options except selector.
     * If you pass no inputs, it seeks out all child elements that have at least one ichigo custom property. Keep in mind
     * that when you have nested objects, this will usually mean something will blow up because you tried to bind an element
     * twice. It also will perform much worse.
     *
     * If you pass a selector, it acts the same as BoundComponent.injectBind() with that selector.
     *
     * In my experience, this is almost completely useless. Either the lack of options breaks it (pretty useless if you can't
     * observe an observable) or the simple act of binding breaks stuff.
     */
    autoInject(selector?: string): this;
    /**
     * Override this method to unbind a view from an observable.
     */
    dispose(): void;
    /**
     * Override this if you need to do something else after the loop is added to the DOM.
     */
    protected loopPostProcess(row: any, addedContent: Node[], allRows: Iterable<any>, previousContent: DocumentFragment): void;
    private _getStringValue(name, skipEscape?, sourceComponentId?);
    private _getUntypedValue(name, sourceComponentId?);
    private _updateHtmlReplacements();
    private _configureComponentBindings();
    private _parseAttributeName(name);
}
export declare class TemplateReplacementValue extends HTMLElement {
    constructor();
}
