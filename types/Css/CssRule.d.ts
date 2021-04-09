import { __DO_NOT_USE__, ICssRule, RulesCanExtend, RulesCanNest, RuleValue } from './CssRuleContract';
/**
 * A Javascript CSS rule. Note the capitalization. This isn't the same as CSSRule. I'm considering renaming this to
 * CssJsRule but I'm hoping I think up something better. It has to be more generic than CssClass because, well, there's
 * more to CSS than class selectors.
 */
export declare abstract class CssRule implements ICssRule {
    [x: string]: RuleValue | undefined | __DO_NOT_USE__;
    media$?: string;
    abstract selector$: string;
    /** Storing this somewhere other than the HEAD would make it easy to drop the sheet on page change. */
    styleSheetParent$: HTMLElement;
    styleSheetId$: string;
    /**
     * Fake selector scoping.
     */
    scopeElement$?: HTMLElement;
    extends$?: RulesCanExtend | RulesCanExtend[];
    nested$?: RulesCanNest | RulesCanNest[];
    revert$: boolean;
    private _constructed$;
    private _selectors$;
    private _fakeScopeClass$?;
    constructor(parent?: HTMLElement);
    render$(parentSelector?: string): this;
    remove$(): void;
    /**
     * Implement "multiple inheritance".
     *
     * This checks only CSS properties. If you inherit from other CssRule classes that
     * themselves have extends$ set, those are not checked. I don't think there's enough
     * justification to bring recursion into this.
     *
     * Note that priority is in the opposite direction of normal inheritance priority.
     * Normally, when looking for a property, the runtime traverses the inheritance tree
     * and uses the first occurrence. In CSS, the LAST occurance takes priority.
     */
    private _extendClass$();
    private _buildSelectors$(parentSelector?);
    private _buildRule$(sheet);
}
