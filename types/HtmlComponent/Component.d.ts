import { FormFieldValue } from '../Html/FormFieldValue';
import { Constructable } from '../System/Types/Constructable';
import { IContent } from './Contract/IContent';
import { IExistingElementOptions } from './Options/IExistingElementOptions';
import { IExistingLookupOptions } from './Options/IExistingLookupOptions';
import { IInnerHtmlOptions } from './Options/IInnerHtmlOptions';
import { IOuterHtmlOptions } from './Options/IOuterHtmlOptions';
export declare type InjectOptions = ({
    replace?: false;
} | ({
    replace: true;
} & (IInnerHtmlOptions | IOuterHtmlOptions)) | string);
/**
 * A class with a content property that points to something on the page, along with some of helper methods.
 *
 * This class is intended to be used as a base class for other classes, so it's marked abstract. It just doesn't
 * make sense to me to create Component with nothing customized. Just create an HTMLElement. The helpers aren't really
 * that impressive, when you consider that the tradeoff is having to reference obj.content to modify the DOM.
 */
export declare abstract class Component<TElement extends HTMLElement = HTMLElement> implements IContent<TElement> {
    /**
     * Use this to convert elements to components. It's most useful for custom tags, for example, <my-component></my-component>.
     * It will become <div id="foo">Whatever the component content is</div>.
     *
     * It doesn't have to be a custom tag. It could be a class, like <p class='bind-to-model"> (selector='.bind-to-model')
     * or <p ichigo> (selector='[ichigo]').
     *
     * To completely replace the existing element (copying existing attributes) send the relevant options, plus {replace: true}.
     *
     * Accepts Keyword Arguments.
     */
    static inject<TElement extends HTMLElement>(selector?: string | HTMLElement | NodeListOf<HTMLElement> | HTMLElement[] | {
        parent?: Element;
        selector: string;
    }, options?: InjectOptions | undefined, constructor?: Constructable<Component<TElement>>): Array<Component<TElement>>;
    protected static _inject<T extends Component<HTMLElement>>(selector: string | HTMLElement | NodeListOf<HTMLElement> | HTMLElement[] | {
        parent?: Element;
        selector: string;
    }, options: Record<string, any>, replacerFunction: (element: HTMLElement) => T, converterFunction: (element: HTMLElement) => T): T[];
    protected static _mergePropertiesAndAttributes(existingElement: HTMLElement, options: Record<string, any>): Record<string, any>;
    protected static _getOptions(options?: string | Record<string, any>): Record<string, any>;
    protected static _replaceElement(existingElement: HTMLElement, component: Component<HTMLElement>): void;
    private static _replaceElementWithComponent<TElement>(existingElement, options, constructor);
    private static _convertElementToComponent<TElement>(existingElement, constructor);
    private static _lookUpContainersToInject(selector?);
    content: TElement;
    id: string;
    innerHTML: string;
    value: FormFieldValue;
    readonly className: string;
    readonly classList: DOMTokenList;
    readonly style: CSSStyleDeclaration;
    /**
     * Creates an instance of Component. Many options:
     * No arguments - Create a basic DIV
     * IExistingLookupOptions - Look up an existing element in the DOM and convert it to a component
     * IExistingElementOptions - Take an existing element and convert it to a component
     * IInnerHtmlOptions - Create a new component setting the inner HTML
     * IOuterHtmlOptions - Create a new component setting the outer HTML (including the tag for the component itself)
     * string - Create a new component setting the outer HTML to the string
     */
    constructor();
    constructor(lookupExistingElement: IExistingLookupOptions);
    constructor(existingElement: IExistingElementOptions<TElement>);
    constructor(newElement: IInnerHtmlOptions);
    constructor(newElement: IOuterHtmlOptions);
    constructor(newElement: string);
    /**
     * Add an HTML event listener on the Component content. Fluent.
     */
    addEventListener(eventType: string, event: (evt: Event) => any, options?: AddEventListenerOptions): this;
    /**
     * Search the HTML for i5_event or :event attributes and add event listeners according to inline custom attributes.
     * Filter by matching the componentFilter input with an attribute like component="componentFilter".
     * Enclose the event type in parentheses, and for the value, enter the name of a method in this component.
     * Example: <form :event (click)="submitTheForm"></form>
     */
    addInlineEventListeners(componentFilter?: string): this;
    /**
     * Add a child to content. Child can be a node or IContent. Fluent.
     */
    append<T extends HTMLElement>(childComponent: IContent<T>): this;
    append<T extends Node>(newChild: T): this;
    /**
     * Add a child to content. Child can be a node or IContent. Returns the child.
     */
    appendChild<T extends HTMLElement>(childComponent: IContent<T>): T;
    appendChild<T extends Node>(newChild: T): T;
    /**
     * Add the current component container to the DOM inside the parent element provided.
     * Parent can be a node or IContent. Fluent.
     */
    appendToParent<T extends HTMLElement>(parent: IContent<T>): this;
    appendToParent<T extends Node>(parent: T): this;
    /**
     * Add the component to ComponentMap.
     */
    mapComponent(): this;
    /**
     * Remove the component from ComponentMap. Sometimes you might need to use this. But hopefully rarely, because it's using a WeakMap,
     */
    unmapComponent(): this;
    /**
     * Return a list of components that are nested inside this component.
     */
    getAllChildComponents(): IterableIterator<IContent>;
    /**
     * Set CSS style on the Component content. Fluent.
     */
    setStyle(property: string, value: string): this;
    setStyle(style: Record<string, string>): this;
    /**
     * Set CSS class on the component content. Fluent.
     */
    setClass(className: string): this;
    setClass(classNames: string[]): this;
}
