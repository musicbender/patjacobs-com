import { Gcms_Section } from './';

export type DotFormationTextEmbedDirection = 'Up' | 'Down' | 'Right';

export interface DorFormationTextEmbedOffsets {
    x: number;
    y: number;
}

export interface Sections {
    [key: string]: Gcms_Section;
}
