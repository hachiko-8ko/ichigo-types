import { BoundComponent } from '../HtmlComponent/BoundComponent';
import { IContent } from '../HtmlComponent/Contract/IContent';
/**
 * This script contains extensions to make manipulation of element components easier.
 *
 * In your main process, import this script (import '/path/to/Ichigo/Extensions/ComponentExtensions') to add
 * these extensions to the prototypes.
 */
declare global  {
    interface HTMLElement {
        getComponent(this: HTMLElement): IContent | undefined;
        bindComponent<TElement extends HTMLElement = HTMLElement, TModel = any>(this: TElement, viewModel: TModel): BoundComponent<TElement, TModel>;
        deleteComponent(): void;
    }
}
