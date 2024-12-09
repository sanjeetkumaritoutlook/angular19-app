import {
  FluidContentWidth,
  FluidContentBlock,
  SectionContentType,
  FluidGridContent,
  FluidImageContent,
  FluidPageContent,
  FluidPageSection,
} from '../model/fluid-docs-content.interface';
import { ComponentSelector } from '../components/component-selector.enum';
import {
  COMPONENT_PAGE,
  COMPONENTS,
  INTERFACES,
} from '../config/page-url.config';
import { ExtendedJsonDocs } from '../model/extendedJsonDocsComponent';
// tslint:disable:max-line-length

export const defaultContentWidth = {
  sm: 12,
  md: 12,
  lg: 12,
} as FluidContentWidth;
export const splitContentWidth = { sm: 12, md: 6, lg: 6 } as FluidContentWidth;
export const sixtyFortyPane = {
  left: { sm: 12, md: 8, lg: 8 } as FluidContentWidth,
  right: { sm: 12, md: 4, lg: 4 } as FluidContentWidth,
};

export const fiftyFiftyPane = {
  left: { sm: 12, md: 6, lg: 6 } as FluidContentWidth,
  right: { sm: 12, md: 6, lg: 6 } as FluidContentWidth,
};

export const createPane = (width?: number) =>
  !!width && ({ sm: 12, md: width, lg: width } as FluidContentWidth);

export const toPageId = (pageTitle: string) =>
  pageTitle?.toLowerCase().replace(/ /g, '-').replace(/\//g, '-');
export const toSlug = (pageId: string) =>
  pageId.replace(/-/g, '').replace(/\//g, '');

export const pageContentToTOCItem = (
  pageContent: FluidPageContent,
  baseRoute: string
) => ({
  label: pageContent.pageTitle,
  detail: pageContent.pageIntroduction,
  route: `${baseRoute}/${toPageId(pageContent.pageTitle)}`,
  content: pageContent,
});

// Sections & Layout
export const section = (
  sectionTitle: string,
  sectionContent: FluidContentBlock[],
  iconAfter?: any
) => ({ title: sectionTitle, content: sectionContent, iconAfter });

export const columnContent = (content: FluidContentBlock[][]) => {
  const columnSize = content.length > 3 ? 4 : 12 / content.length;
  return grid(
    content.map((contentSet) => ({
      content: contentSet,
      alignSelf: 'start',
      width: createPane(columnSize),
    }))
  );
};
export const splitContent = (
  leftContent: FluidContentBlock[],
  rightContent: FluidContentBlock[],
  left?: number,
  right?: number,
  centerLeft?: boolean,
  centerRight?: boolean
) =>
  grid([
    {
      width: createPane(left) || fiftyFiftyPane.left,
      alignSelf: centerLeft ? 'center' : 'start',
      alignItems: centerLeft ? 'center' : 'left',
      content: leftContent,
    },
    {
      width: createPane(right) || fiftyFiftyPane.right,
      alignSelf: centerRight ? 'center' : 'start',
      alignItems: centerRight ? 'center' : 'left',
      content: rightContent,
    },
  ]);

export const splitSection = (
  sectionTitle: string,
  leftContent: FluidContentBlock[],
  rightContent: FluidContentBlock[]
) => {
  return section(sectionTitle, [
    grid([
      { width: sixtyFortyPane.left, alignSelf: 'start', content: leftContent },
      {
        width: sixtyFortyPane.right,
        alignSelf: 'start',
        content: rightContent,
      },
    ]),
  ]);
};

// Content Types
export const title = (
  content: string,
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.TITLE, content, contentWidth, opts });
export const subtitle = (
  content: string,
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.SUBTITLE, content, contentWidth, opts });
export const code = (
  content: string,
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.CODE, content, contentWidth, opts });
export const text = (
  content: string,
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.TEXT, content, contentWidth, opts });
export const muted = (
  content: string,
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.MUTED, content, contentWidth, opts });
export const link = (
  content: { link: string; label: string; target: string },
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.LINK, content, contentWidth, opts });
export const image = (
  content: FluidImageContent,
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.IMAGE, content, contentWidth, opts });
export const list = (
  content: string[],
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.LIST, content, contentWidth, opts });
export const info = (
  content: string,
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.INFO, content, contentWidth, opts });
export const sectionDetail = (
  content: { title: string; description: string },
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.DETAIL, content, contentWidth, opts });
export const subsection = (
  content: FluidContentBlock[],
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.SUBSECTION, content, contentWidth, opts });
export const divider = (
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.DIVIDER, content: null, contentWidth, opts });
export const grid = (
  content: FluidGridContent[],
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.GRID, content, contentWidth, opts });
export const faq = (
  content: { question: string; answer: string; collapsed: boolean },
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.FAQ, content, contentWidth, opts });
export const lineBreak = () => ({
  type: SectionContentType.BREAK,
  content: null,
  contentWidth: defaultContentWidth,
});
export const component = (
  content: string,
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.COMPONENT, content, contentWidth, opts });
export const tabs = (
  content: { title: string; content: FluidContentBlock[] }[],
  contentWidth: FluidContentWidth = defaultContentWidth,
  opts?
) => ({ type: SectionContentType.TABS, content, contentWidth, opts });

// Inline Selectors
export const inlineCode = (codeSnippet: string) =>
  `<fluid-code-block inline no-container code="${codeSnippet}"></fluid-code-block>`;
export const inlineIcon = (iconKey: string, color: string) =>
  `<fluid-icon icon-key="${iconKey}" size="sm" color=${color}></fluid-icon>`;
export const inlineLink = (
  href: string,
  label: string,
  target: string = '_blank'
) =>
  `<fluid-link inline target="${target}" link="${href}">${label}</fluid-link>`;
export const inlineMethod = (name: string, refName: string, args: any[]) =>
  component(ComponentSelector.FRAMEWORK_SNIPPET, defaultContentWidth, {
    name,
    args,
    refName,
    type: 'method',
  });
export const inlineEvent = (name: string, refName: string, args: any[]) =>
  component(ComponentSelector.FRAMEWORK_SNIPPET, defaultContentWidth, {
    name,
    args,
    refName,
    type: 'event',
  });
export const propDescription = (prop: string, description: string) =>
  `${inlineCode(prop)} - ${description}.`;
export const propDataItem = (
  property: string,
  description: string,
  panelCode?: string
) => ({ property, description, panelCode });

export const toCode = (codeSnippet: any) =>
  JSON.stringify(
    codeSnippet,
    (key, val) => {
      if (typeof val === 'function') {
        return val.toString();
      }
      return val;
    },
    2
  );

// Inline Text Formatting
export const formatBold = (txt: string) => `<strong>${txt}</strong>`;
export const formatItalic = (txt: string) => `<em>${txt}</em>`;
export const formatStrikethrough = (txt: string) => `<del>${txt}</del>`;

// Interface Content
export const expandSignature = (
  interfaces: any,
  rawInterface: object,
  parentInterfaceName: string
) => {
  return Object.keys(rawInterface).reduce((obj, key) => {
    const dataType = rawInterface[key];
    if (interfaces[dataType] && dataType !== parentInterfaceName) {
      obj[key] = expandSignature(interfaces, interfaces[dataType], dataType);
    } else {
      obj[key] = dataType;
    }
    return obj;
  }, {});
};

export const createInterfaceSignature = (
  interfaces: any,
  interfaceName: string
) => {
  const rawInterface = interfaces[interfaceName];
  return `export interface ${interfaceName} ${JSON.stringify(
    expandSignature(interfaces, rawInterface, interfaceName),
    null,
    2
  ).replace(/"/g, '')}`;
};

export const createEnumSignature = (enums: any, enumName: string) => {
  const rawEnum = enums[enumName];
  return `export enum ${enumName} {
\t${Object.keys(rawEnum)
    .map((key) => `${key} = '${rawEnum[key]}';`)
    .join(`\n\t`)}
}`;
};

export const componentLink = (componentTag: string, displayName: string) => {
  return inlineLink(COMPONENT_PAGE(componentTag).route, displayName, '_blank');
};

export const interfaceLink = (interfaceName: string) => {
  return inlineLink(
    INTERFACES(interfaceName).route,
    `<fluid-code-block inline no-container code="${interfaceName}"></fluid-code-block>`,
    '_blank'
  );
};
export const interfaceSignature = (
  jsonDocs: ExtendedJsonDocs,
  interfaceName: string
) => code(createInterfaceSignature(jsonDocs.interfaces, interfaceName));
// tslint:enable:max-line-length

export const interfaceContent = (
  jsonDocs: ExtendedJsonDocs,
  interfaceName: string
): FluidPageSection[] => [
  section(interfaceName, [
    code(
      createInterfaceSignature(jsonDocs.interfaces, interfaceName),
      defaultContentWidth,
      { type: 'js' }
    ),
  ]),
];

export const enumContent = (
  jsonDocs: ExtendedJsonDocs,
  enumName: string
): FluidPageSection[] => {
  return [
    section(enumName, [
      code(createEnumSignature(jsonDocs.enums, enumName), defaultContentWidth, {
        type: 'js',
      }),
    ]),
  ];
};

export const releaseFeature = (
  releaseTitle: string,
  linkToPullRequest: string,
  description: FluidContentBlock[]
) => {
  return [
    link({ link: linkToPullRequest, label: releaseTitle, target: '_blank' }),
    ...description,
    divider(),
  ];
};

/*===================================================================
 * Link Shortcuts
 *===================================================================*/
export const codeLink = (linkName, linkUrl) =>
  `${inlineCode(linkName)}${inlineLink(linkUrl, '*', '_blank')}`;
export const ReactUtils = codeLink(
  'FLUID React Utils',
  'https://github.com/lmigtech/fluid-react-utils'
);

/*===================================================================
 * Github Shortcuts
 *===================================================================*/

export const githubUserLink = (userFirstName: string, userSurname: string) =>
  `https://github.com/${userFirstName}-${userSurname}_lmig`;
export const githubUser = (
  userFirstName: string,
  userSurname: string,
  showFullName = false
) => {
  const profileLink = githubUserLink(userFirstName, userSurname);
  return inlineLink(
    profileLink,
    showFullName ? `${userFirstName} ${userSurname}` : userFirstName
  );
};

/*===================================================================
 * Team Member Github Shortcuts
 *===================================================================*/
export const Joe = githubUser('Joe', 'Flynn', false);
export const Troy = githubUser('Troy', 'Holleman', false);
export const Lucas = githubUser('Lucas', 'MatosVera', false);
export const Nate = githubUser('Nathan', 'Beaulieu', false);
export const Ilya = githubUser('Ilya', 'Shubentsov', false);
export const Kevin = githubUser('Kevin', 'Carter01', false);
export const Emily = githubUser('Emily', 'Meeks', false);
export const Bethany = githubUser('Bethany', 'Knapstad', false);
export const William = githubUser('William', 'Wu', false);

/*===================================================================
 * Contributor Github Shortcuts
 *===================================================================*/
export const BarrySweeney = githubUser('BarrySweeney', 'Sweeney', false);
export const ChrisMilford = githubUser('Chris', 'Milford', false);
export const GrahamKelly = githubUser('Graham', 'Kelly', false);
export const MikeBarron = githubUser('Michael', 'Barron', false);
