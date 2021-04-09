import { CssRule } from './CssRule';
import { RuleValue } from './CssRuleContract';
/**
 * A simple, default Css Rule that is with an inline initializer in the constructor, useful for quick and dirty inline classes.
 */
export declare class CssInlineRule extends CssRule {
    selector$: string;
    constructor(selector: string, initial: Record<string, RuleValue>, parent?: HTMLElement);
}
