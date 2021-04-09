import { Nullable } from '../System/Types/NoneType';
/**
 * Escape an HTML string to protect against XSS and similar vulnerabilities.
 * For example, if you are displaying a text box, you don't want it to melt down as soon as "<"" appears in the box.
 */
export declare function escapeHtml(input: string): string;
export declare function escapeHtml(input: Nullable<string>): Nullable<string>;
