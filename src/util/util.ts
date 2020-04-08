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

export const throttle = (func: any, wait: number): any => {
    let time = Date.now();
    return function(e: any) {
        if (time + wait - Date.now() < 0) {
            func(e);
            time = Date.now();
        }
    };
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
