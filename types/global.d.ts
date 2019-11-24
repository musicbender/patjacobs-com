declare global {
  interface Window { 
    __REDUX_DEVTOOLS_EXTENSION__: any
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  }
}

// types

// interfaces
export interface ISeo {
  title: string
  description: string
  image: string
  url: string
  twitter: string
  site: string
  color: string
  language: string
}

//enums
export enum ECurtainTypes {
  'none',
  'blocks',
  'reverse-blocks',
  'rows',
  'full'
}

export enum ECurtainColorLayouts {
  'blocks',
  'rows',
  'full'
}

export enum ECurtainTransition {
  'enter',
  'exit',
}
