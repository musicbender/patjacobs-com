export const hasWindow = (): boolean => {
  return typeof window !== 'undefined';
};

export const getIndexOrLast = (array: any[] = [], index = 0) => {
  if (array.length < 1 || !Array.isArray(array)) return false;
  return array[index] || array[array.length - 1];
};

export const countLongestArray = (arrays: any[] = []): number | boolean => {
  let output = 0;

  if (arrays.length < 1) {
    return false;
  }

  arrays.forEach((arr: any[]) => {
    if (arr.length > output) {
      output = arr.length;
    }
  });

  return output;
};

export const reduceSegment = (start: number, end: number, numArray: number[] = []): number => {
  if (!numArray[start] || end > numArray.length) throw new Error('array index does not exist');
  if (numArray === null) throw new Error('an array input is required');
  if (start >= end) return 0;
  return numArray.slice(start, end).reduce((acc, value) => acc + value);
};

export const throttle = (func: () => void, wait: number): any => {
  let time = Date.now();
  return () => {
    if (time + wait - Date.now() < 0) {
      func();
      time = Date.now();
    }
  };
};

export const findPartialSum = (arr: number[], durationsIndex: number): number => {
  return arr.reduce((sum: number, duration: number, i: number): number => {
    return i <= durationsIndex ? sum + duration : sum;
  }, 0);
};

export const minMax = (num: number, min = 0, max = 255): number => {
  return num <= min ? min : num >= max ? max : num;
};

export const isMobileSize = (): boolean => {
  return hasWindow() && window.innerWidth < 768;
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const moveAllInArray = (arr: any[], distance = 1): any[] => {
  const output: any[] = [];

  arr.forEach((item: any, i: number): void => {
    const sum: number = i + distance;
    let newIndex = sum;

    if (sum >= arr.length || sum < 0) newIndex = sum - arr.length * Math.floor(sum / arr.length);

    output[newIndex] = item;
  });

  return output;
};

export const pruneUrl = (url: string): string => {
  let output = url;
  const removeArr = ['http://', 'https://', 'www.'];

  removeArr.forEach((badString: string): void => {
    output = output.replace(badString, '');
  });

  return output;
};

export const getPathname = (): string => (hasWindow() ? window.location.pathname : null);
