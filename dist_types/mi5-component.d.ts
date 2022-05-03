import { IContent } from '../types/HtmlComponent/Contract/IContent';
import { Component } from '../types/HtmlComponent/Component';
import { BoundComponent } from '../types/HtmlComponent/BoundComponent';
import { ComponentMap } from '../types/HtmlComponent/ComponentMap';

interface IComponent {
    Component: Component;
    BoundComponent: BoundComponent;
    ComponentMap: ComponentMap;
    getComponent(element: HTMLElement): IContent<HTMLElement>;
}

interface IMi5 {
    component: IComponent;
}

declare var mi5: IMi5;
declare function using(lib: any, alias: string): void;
