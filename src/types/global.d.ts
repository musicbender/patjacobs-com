declare global {
  interface Window { 
    __REDUX_DEVTOOLS_EXTENSION__: any
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  }
}

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
