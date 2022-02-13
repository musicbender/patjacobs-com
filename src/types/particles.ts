export interface CavieDotConfig {
  index: number;
  dotSize: number;
  y: number;
  x: number;
  xOffset?: number;
  yOffset?: number;
}

export interface DotFormationConfig {
  i: number;
  y: number;
  x: number;
  row: number;
  column: number;
  hide: boolean;
  xOffset?: number;
  yOffset?: number;
}

export interface DotGridProps {
  sequence: number[][][];
  index?: number;
  started?: boolean;
  handleSequence?: any;
  spacing?: number;
  interval?: number;
  delay?: number;
  className?: string;
}
