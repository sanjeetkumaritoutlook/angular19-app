export interface FluidPageContent {
  pageTitle: string;
  hideTitle?: boolean;
  heroImage?: string;
  pageIntroduction?: FluidContentBlock[];
  author?: string;
  lastUpdated?: Date;
  sectionStyle?: FluidPageSectionStyle;
  postsPerPage?: number;
  sections: FluidPageSection[];
}

export enum FluidPageSectionStyle {
  TABS = 'tabs',
  PAGINATED = 'paginated',
  FLOW = 'flow',
  SUBSECTION = 'subsection',
}

export interface FluidPageSection {
  type?: string;
  author?: string;
  lastUpdated?: Date;
  title?: string;
  content: FluidContentBlock[];
  iconAfter?: any;
}

export type FluidContentWidthOptions =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;
export interface FluidContentWidth {
  sm: FluidContentWidthOptions;
  md: FluidContentWidthOptions;
  lg: FluidContentWidthOptions;
}

export interface FluidContentBlock {
  type: SectionContentType;
  content: any;
  contentWidth?: FluidContentWidth;
  opts?: { [key: string]: any };
}

export enum SectionContentType {
  TEXT = 'text',
  MUTED = 'muted',
  TITLE = 'title',
  BADGE = 'badge',
  SUBTITLE = 'subtitle',
  CODE = 'code',
  IMAGE = 'image',
  LINK = 'link',
  LIST = 'list',
  INFO = 'info',
  SUBSECTION = 'sub-section',
  DETAIL = 'section-detail',
  DIVIDER = 'divider',
  BREAK = 'break',
  GRID = 'grid',
  FAQ = 'faq',
  COMPONENT = 'component',
  TABS = 'tabs',
}

export interface FluidDocsContent {
  title?: string;
  body: string[];
  image?: string;
  code?: FluidCodeSection[];
  eventDetail?: string;
}

export interface FluidGridContent {
  width: FluidContentWidth;
  content: FluidContentBlock[];
  alignSelf?: 'start' | 'center' | 'end';
  alignItems?: 'left' | 'center' | 'right';
}

export interface FluidImageContent {
  src: string;
  width?: number;
  noContainer?: boolean;
}

export interface FluidCodeSection {
  title?: string;
  code: FluidCodeBlock[];
}

export interface FluidCodeBlock {
  label?: string;
  code: string;
}
