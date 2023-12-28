/* eslint-disable */
import type { ConditionalValue } from './conditions';
import type { CssProperties } from './system-types';
import type { Tokens } from '../tokens/index';

interface PropertyValueTypes {
	colorPalette: "current" | "black" | "white" | "transparent" | "rose" | "pink" | "fuchsia" | "purple" | "violet" | "indigo" | "blue" | "sky" | "cyan" | "teal" | "emerald" | "green" | "lime" | "yellow" | "amber" | "orange" | "red" | "neutral" | "stone" | "zinc" | "gray" | "slate";
	textStyle: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
}



  type CssValue<T> = T extends keyof CssProperties ? CssProperties[T] : never

  type Shorthand<T> = T extends keyof PropertyValueTypes ? PropertyValueTypes[T] | CssValue<T> : CssValue<T>

  export interface PropertyTypes extends PropertyValueTypes {
  
}



  type PropertyTypeValue<T extends string> = T extends keyof PropertyTypes
    ? ConditionalValue<PropertyTypes[T] | CssValue<T> | (string & {})>
    : never;

  type CssPropertyValue<T extends string> = T extends keyof CssProperties
    ? ConditionalValue<CssProperties[T] | (string & {})>
    : never;

  export type PropertyValue<T extends string> = T extends keyof PropertyTypes
    ? PropertyTypeValue<T>
    : T extends keyof CssProperties
      ? CssPropertyValue<T>
      : ConditionalValue<string | number>
  