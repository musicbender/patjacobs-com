declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
        href: string;
    }
}

// types
interface StartSequenceOptions {
    length?: number;
    delay?: number;
    interval?: number;
    index?: number;
}

export interface TestItem {
    assert: any;
    expected: any;
    description?: string;
}

// interfaces
export interface ISeo {
    title: string;
    description: string;
    image: string;
    url: string;
    twitter: string;
    site: string;
    color: string;
    language: string;
}

export type ButtonTypes = 'line' | 'ridicularge-XL';

export type Axis = 'x' | 'y';

export interface Skill {
    text: string;
    position: number[];
    direction: string;
}

// enums
export type CoreColors = 'aqua' | 'purple' | 'yellow' | 'orange';

export enum ECurtainTypes {
    'none',
    'blocks',
    'reverse-blocks',
    'rows',
    'full',
}

export enum ECurtainColorLayouts {
    'blocks',
    'rows',
    'full',
}

export enum ECurtainTransition {
    'enter',
    'exit',
}

export enum TriangleSizes {
    'micro',
    'tiny',
    'small',
    'medium',
    'giant',
}

export enum ParticleColors {
    'aqua',
    'purple',
    'yellow',
    'orange',
    'white',
}
