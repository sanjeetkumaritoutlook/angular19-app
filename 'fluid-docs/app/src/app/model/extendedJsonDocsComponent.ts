import { JsonDocs, JsonDocsComponent } from '../../assets/docs';
import { Example } from './example';

export interface ExtendedJsonDocsComponent extends JsonDocsComponent {
  examples?: Example[];
  displayName?: string;
  changeLog?: any[];
  builder?: boolean;
  contextData?: string;
  excludeTag?: boolean;
  experimental?: boolean;
  analyticsAware?: string;
  testData?: any;
  childOf?: string;
  internal?: string;
}

export interface ExtendedJsonDocs extends JsonDocs {
  interfaces: { [key: string]: object };
  enums: { [key: string]: object };
}
