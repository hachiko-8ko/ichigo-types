/**
 * This script contains extensions to make (mostly) fluent manipulation of the DOM easier. They are focused around things
 * that you would use when creating a page, because that's where fluent methods are helpful. You don't often need
 * chained modifications when removing classes, for example, so element.classList.remove(foo) works fine.
 *
 * In your main process, import this script (import '/path/to/Ichigo/Extensions/ElementExtensions') to add
 * these fluent extensions to the prototypes.
 */
declare global  {
    interface HTMLElement {
        appendToParent(parent: HTMLElement): this;
        appendChildFluent<T extends Node>(child: T): this;
        appendSibling<T extends Node>(next: T): T;
        appendSiblingFluent<T extends Node>(next: T): this;
        replaceWith<T extends Node>(newElement: T): T;
        swap<T extends Node>(element: T): T;
        extract(): this;
        addEventListenerFluent(eventType: string, event: (evt: Event) => any, options?: AddEventListenerOptions): this;
        addStyle(property: string, value: string): this;
        addClass(classNames: string | string[]): this;
    }
    interface DocumentFragment {
        createElement<TElement extends HTMLElement>(tagName: string, properties?: Record<string, any>, attributes?: Record<string, any>): TElement;
        createElementFluent(tagName: string, properties?: Record<string, any>, attributes?: Record<string, any>): this;
        appendToParent<TElement extends HTMLElement>(parent: TElement): TElement;
    }
}
export {};
