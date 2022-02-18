declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    href: string;
    webkitRequestAnimationFrame: any;
    webkitCancelAnimationFrame: any;
  }
}

declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';

export {};
