import { Constructable } from '../System/Types/Constructable';
import { CssRule } from "./CssRule";
export declare class CssStyleSheet {
    rules: CssRule[];
    constructor(rules?: Array<CssRule | Constructable<CssRule>>, parent?: HTMLElement);
    render(): void;
    remove(): void;
}
