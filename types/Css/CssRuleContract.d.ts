import { Constructable } from '../System/Types/Constructable';
import { CssRule } from './CssRule';
import { CssVariable } from './CssVariable';
export declare type NestedProperty = Record<string, string | CssVariable>;
export declare type RulesCanNest = CssRule | Constructable<CssRule>;
export declare type RulesCanExtend = CssRule | CssSimpleRule | Constructable<CssRule> | Constructable<CssSimpleRule>;
export declare type __PRIVATE_PROPERTIES_DO_NOT_USE__ = boolean | string[] | ((sheet: CSSStyleSheet, parent?: string) => void);
export declare type __DO_NOT_USE__ = RulesCanExtend | RulesCanExtend[] | RulesCanNest | RulesCanNest[] | NestedProperty | HTMLElement | (() => void) | boolean | __PRIVATE_PROPERTIES_DO_NOT_USE__;
export interface ICssRequiredProperties {
    selector$: string;
    media$?: string;
    styleSheetParent$: HTMLElement;
    styleSheetId$: string;
    scopeElement$?: HTMLElement;
    extends$?: RulesCanExtend | RulesCanExtend[];
    nested$?: RulesCanNest | RulesCanNest[];
    revert$: boolean;
    render$(): void;
    remove$(): void;
}
export declare type RuleValue = string | CssVariable | NestedProperty;
export declare type ICssRule = Record<string, RuleValue | undefined | __DO_NOT_USE__> & ICssRequiredProperties;
/**
 * This type is here for a bullshit reason, which is that if you want to require values to be all strings, this copypasta
 * must be included in the definition of the class. That's going far beyond time checking.
 * https://github.com/microsoft/TypeScript/issues/15300 (not just interfaces)
 */
export declare abstract class CssSimpleRule {
    [index: string]: RuleValue;
    constructor(initial?: Record<string, RuleValue>);
}
