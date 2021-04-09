import { FormFieldValue } from './FormFieldValue';
/**
 * Form elements by default return strings.
 * In the case of inputs of type number, a number is returned, or undefined if blank.
 * But in the case of checkboxes, boolean is returned (the fact that "false" is truthy is just too problematic).
 * In the case of selects with the multiple property set, a string array is returned.
 * In the case of inputs of type date, datetime, or datetime-local, a string is returned. Date types are just too much of a trainwreck
 * in JS.
 */
export declare type FormFieldValue = string | string[] | boolean | number | undefined;
/**
 * HTML is inconsistent. Getting the value of form fields is a bit complicated, not always element.value,
 * so here's a helper to make it easier.
 */
export declare function getFormFieldValue(element: HTMLElement): FormFieldValue;
export declare function getCheckboxValue(input: HTMLInputElement): boolean;
export declare function getNumberInputValue(input: HTMLInputElement): number | undefined;
export declare function getRadioValue(input: HTMLInputElement): string | undefined;
export declare function getSelectValue(select: HTMLSelectElement): string | string[];
export declare function getMultiSelectValue(select: HTMLSelectElement): string[];
export declare function getSimpleFormValue(input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): string;
/**
 * Setting values is just as complicated as getting them, because HTML is inconsistent. You can't just say element.value = foo.
 * Here's a helper to make it easier.
 */
export declare function setFormFieldValue(element: HTMLElement, value: FormFieldValue): void;
