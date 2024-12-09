import { JsFramework } from '../model/js-framework.enum';
import { deprecationPageContent } from './deprecation.content';
import { contributionPageContent } from './contribution.content';
import { gettingStartedPageContent } from './getting-started.content';
import { releaseStrategyContent } from './release-strategy.content';
import { updatesPageContent } from './updates.content';
import { featureRequestsContent } from './feature-requests.content';
import { releaseNotesContent } from './release-notes.content';
import { overviewContent } from './overview.content';
import { faqPageContent } from './faq.content';
import { frameworkUpdatesContent } from './framework-updates.content';
import { whatsNewContent } from './whats-new.content';
import { themesContent } from './themes.content';
import { componentsPageContent } from './components-page.content';
import { forDesignersContent } from './for-designers.content';
import { interfacesPageContent } from './interface.content';
import { walkthroughGuidesContent, walkthroughs } from './walkthroughs.content';
import {
  ExtendedJsonDocs,
  ExtendedJsonDocsComponent,
} from '../model/extendedJsonDocsComponent';
import { angularGuide } from './getting-started/angular.getting-started';
import { vueGuide } from './getting-started/vue.getting-started';
import { vanillaGuide } from './getting-started/vanilla.getting-started';
import { reactGuide } from './getting-started/react.getting-started';
import {
  enumContent,
  interfaceContent,
  toPageId,
  toSlug,
} from './content.utils';
import { pascalCaseToKebabCase } from '../utils';
import { componentPageContent } from './component.content';
import { FluidPageContent } from '../model/fluid-docs-content.interface';
import { aboutFluidContent } from './about-fluid.content';
import { accessibilityContent } from './accessibility.content';
import { testingWithFluidContent } from './testing.content';

/**
 * Main page content - if your content needs the selected framework, or generated
 * documentation, pass them as parameters to your content function.
 *
 * @param selectedFramework - the currently selected framework
 * @param jsonDocs - the generated documentation from FLUID components.
 */
export const pageContent = (
  selectedFramework: JsFramework,
  jsonDocs: ExtendedJsonDocs
) => ({
  [slug('Deprecation')]: deprecationPageContent(),
  [slug('About Fluid')]: aboutFluidContent(),
  [slug('Contribution')]: contributionPageContent(),
  [slug('Getting Started')]: gettingStartedPageContent(),
  [slug('Release Strategy')]: releaseStrategyContent(),
  [slug('Component Updates')]: updatesPageContent(jsonDocs),
  [slug('Feature Requests')]: featureRequestsContent(),
  [slug('Release Notes')]: releaseNotesContent(),
  [slug('Overview')]: overviewContent(),
  [slug('FAQS')]: faqPageContent(),
  [slug('Framework Updates')]: frameworkUpdatesContent(),
  [slug('Whats New')]: whatsNewContent(jsonDocs),
  [slug('Themes')]: themesContent(),
  [slug('Components')]: componentsPageContent(jsonDocs),
  [slug('Get Started')]: forDesignersContent(),
  [slug('Interfaces')]: interfacesPageContent(jsonDocs),
  [slug('Enums')]: interfacesPageContent(jsonDocs),
  [slug('Walkthroughs')]: walkthroughGuidesContent(jsonDocs),
  [slug('Accessibility')]: accessibilityContent(),
  [slug('Testing With FLUID')]: testingWithFluidContent(),
  // add primary content here
});

const slug = (title: string) => toSlug(toPageId(title));

export const subSectionContent = (
  interfaces,
  enums,
  components,
  walkthroughGuides
) => ({
  gettingstarted: {
    angular: angularGuide,
    vue: vueGuide,
    javascript: vanillaGuide,
    react: reactGuide,
    svelte: vanillaGuide,
  },
  interfaces: {
    ...interfaces,
    ...enums,
  },
  walkthroughs: walkthroughGuides,
  components,
});

/**
 * Content Parsers (DO NOT TOUCH)
 */
export const parseWalkthroughContent = (jsonDocs: ExtendedJsonDocs) => {
  return walkthroughs(jsonDocs).reduce((content: object, tocItem) => {
    tocItem.walkthroughs.forEach((walkthrough) => {
      content[toSlug(toPageId(walkthrough.label))] = walkthrough.content;
    });
    return content;
  }, {});
};

export const parseInterfaceContent = (jsonDocs: ExtendedJsonDocs) => {
  return Object.keys(jsonDocs.interfaces).reduce(
    (content: object, key: string) => {
      content[toSlug(pascalCaseToKebabCase(key))] = interfaceContent(
        jsonDocs,
        key
      );
      return content;
    },
    {}
  );
};

export const parseEnumContent = (jsonDocs: ExtendedJsonDocs) => {
  return Object.keys(jsonDocs.enums).reduce((content: object, key: string) => {
    content[toSlug(pascalCaseToKebabCase(key))] = enumContent(jsonDocs, key);
    return content;
  }, {});
};

export const parseComponentContent = (data: ExtendedJsonDocs, testData?) => {
  const components = data.components.filter(
    (c) =>
      c.filePath.indexOf('deprecated') === -1 &&
      !c.docsTags.find((dc) => dc.name === 'excludeTag')
  );
  return components.reduce(
    (content: object, component: ExtendedJsonDocsComponent) => {
      content[toSlug(toPageId(component.tag))] = componentPageContent(
        component,
        data,
        testData
      );
      return content;
    },
    {}
  );
};
