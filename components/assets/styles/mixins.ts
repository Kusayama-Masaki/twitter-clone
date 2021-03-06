import { breakpoints } from "./variables";

export const mq = (n: string) => {
  const bpArray = Object.keys(breakpoints).map(key => [key, breakpoints[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name)
      return [...acc, `@media  screen and  (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};
