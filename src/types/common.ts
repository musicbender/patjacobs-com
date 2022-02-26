export type StartSequenceOptions = {
  length?: number;
  delay?: number;
  interval?: number;
  index?: number;
};

export type TestItem = {
  assert: any;
  expected: any;
  description?: string;
};

export type ISeo = {
  title: string;
  description: string;
  image: string;
  url: string;
  twitter: string;
  site: string;
  color: string;
  language: string;
};

export type ButtonTypes = 'line' | 'ridicularge-XL';

export type Axis = 'x' | 'y';

export type SkillText = {
  text: string;
  position: number[];
  direction: string;
};

export type HeadProps = {
  pathname?: string;
  description?: string;
  meta?: string[];
  keywords?: string[];
  titlePrefix?: string;
  image?: string;
  article?: boolean;
};

// enums
export type CoreColors = 'aqua' | 'purple' | 'yellow' | 'orange';

export type RevealBlockContentType = 'generic' | 'text' | 'img' | 'video' | 'line';

export enum CurtainTypes {
  'none',
  'blocks',
  'reverse-blocks',
  'rows',
  'full',
}

export enum CurtainColorLayouts {
  'blocks',
  'rows',
  'full',
}

export enum CurtainTransition {
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
