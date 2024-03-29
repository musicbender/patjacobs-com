import { Project, Section } from './graphcms-schema';

export type ProjectBodyNodeType = 'paragraph' | 'image' | 'video';

export type CaseStudyBaseRevealProps = {
  startGrid: number;
  endGrid: number;
};

export type ProjectBodyParagraphText = {
  text: string;
};

export type RevealedElementsState = {
  [key: string]: boolean;
};

export type GcmsProjectBodyNodeType = 'image' | 'paragraph' | 'video';

export type GcmsProjectBodyNodeMimeType = 'image/jpeg' | 'video/mp4';

export type GcmsProjectBodyNode = {
  src?: string;
  type: ProjectBodyNodeType;
  title?: string;
  width?: number;
  height?: number;
  handle?: string;
  altText?: string;
  mimeType?: GcmsProjectBodyNodeMimeType;
  className?: string;
  text?: string;
  children?: GcmsProjectBodyNode[];
};

export type GcmsProjectBodyRaw = {
  children: GcmsProjectBodyNode[];
};

export type ProjectBodyItem = GcmsProjectBodyNode & {
  mediaText?: string;
  text?: GcmsProjectBodyNode[];
};

export type OmitProjectBody = Omit<Project, 'body'>;

export type ProcessedProject = OmitProjectBody & {
  body: ProjectBodyItem[];
};

export type Sections = {
  [key: string]: Section;
};

export type RelatedProject = { __typename?: 'Project' } & Pick<
  Project,
  'id' | 'projectId' | 'projectType' | 'title' | 'order'
>;

export type ProcessedGcmsData = {
  project: ProcessedProject;
  nextProject: RelatedProject;
  sections: Sections;
};
