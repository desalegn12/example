// evalFunc: This function evaluates a given value and props. If the value is a function, it calls the function with the props as a parameter, otherwise, it returns the value as is.
export const evalFunc = (value: any, props = undefined as any) => (typeof value === 'function' ? value(props) : value);

// stringifyEqual: This function compares two values by converting them into a JSON string and comparing the strings. This is useful for comparing complex objects that cannot be directly compared with the === operator.
export const stringifyEqual = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);

// isFilterEqual: This function compares two filter objects by checking if their columnField, value, and operatorValue properties are equal. It is used to check if a filter already exists in the filters array to avoid adding duplicates.
export const isFilterEqual = (a: any, b: any) => a.columnField === b.columnField && a.value === b.value && a.operatorValue === b.operatorValue;