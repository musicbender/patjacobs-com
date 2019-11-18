export const hasWindow = (): boolean => {
  return typeof window !== 'undefined';
}

export const getIndexOrLast = (array = [], index = 0) => {
  if (array.length < 1 || !Array.isArray(array)) {
    return false;
  }

  return array[index] || array[array.length - 1];
}

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
}

export const throttle = (func: any, wait: number): any => {
  let time = Date.now();
  return function(e: any) {
    if ((time + wait - Date.now()) < 0) {
      func(e);
      time = Date.now();
    }
  }
}

export const minMax = (num: number, min: number = 0, max: number = 255): number => {
  return num <= min ? min : num >= max ? max : num;
}

export const isMobileSize = () => {
  return window.innerWidth < 768;
}
