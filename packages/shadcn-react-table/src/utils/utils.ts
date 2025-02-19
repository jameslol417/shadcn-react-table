// import { type DropdownOption } from '../types';

export const parseFromValuesOrFunc = <T, U>(
  fn: ((arg: U) => T) | T | undefined, // fn can be either a function (U → T), a direct value (T), or undefined
  arg: U, // The argument to pass if fn is a function
): T | undefined => (fn instanceof Function ? fn(arg) : fn); // If fn is a function, call it with `arg`, otherwise return fn directly.

// Flexibility: Allows handling both raw values and functions in a uniform way.
// Convenience: Reduces the need for conditional checks when handling values or computed results.

// export const getValueAndLabel = (
//     option?: DropdownOption | null,
//   ): { label: string; value: string } => {
//     let label: string = '';
//     let value: string = '';
//     if (option) {
//       if (typeof option !== 'object') {
//         label = option;
//         value = option;
//       } else {
//         label = option.label ?? option.value;
//         value = option.value ?? label;
//       }
//     }
//     return { label, value };
//   };
