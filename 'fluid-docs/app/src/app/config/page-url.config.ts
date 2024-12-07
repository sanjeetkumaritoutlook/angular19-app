import { JsFramework } from '../model/js-framework.enum';
import { pascalCaseToKebabCase } from '../utils';

export const OVERVIEW = { id: 'overview', route: 'pages/overview' };
export const ABOUT_FLUID = { id: 'about-fluid', route: 'pages/about-fluid' };
export const WHATS_NEW = {
  id: 'whats-new',
  route: './pages/updates/whats-new',
};
export const ACCESSIBILITY = {
  id: 'accessibility',
  route: './pages/accessibility',
};
export const FOR_DEVELOPERS = {
  id: 'getting-started',
  route: 'pages/developers/getting-started',
};
export const TESTING_WITH_FLUID = {
  id: 'testing-with-fluid',
  route: 'pages/developers/testing-with-fluid',
};
export const FOR_DESIGNERS = {
  id: 'get-started',
  route: 'pages/designers/get-started',
};
export const THEMES = {
  id: 'themes',
  route: 'pages/designers/themes',
};
export const COMPONENT_UPDATES = {
  id: 'component-updates',
  route: '/pages/updates/component-updates',
};
export const FRAMEWORK_UPDATES = {
  id: 'framework-updates',
  route: '/pages/updates/framework-updates',
};
export const RELEASE_NOTES = {
  id: 'release-notes',
  route: '/pages/updates/release-notes',
};
export const CONTRIBUTION = {
  id: 'contribution',
  route: 'pages/developers/contribution',
};
export const FEATURE_REQUESTS = {
  id: 'feature-requests',
  route: 'pages/developers/feature-requests',
};
export const RELEASE_STRATEGY = {
  id: 'release-strategy',
  route: 'pages/strategy/release-strategy',
};
export const WALKTHROUGHS = {
  id: 'walkthroughs',
  route: 'pages/developers/walkthroughs',
};
export const DEPRECATION = {
  id: 'deprecation',
  route: 'pages/components/deprecation',
};
export const VIDEOS = {
  id: 'videos',
  link: 'https://innertube.lmig.com/#/player?videoUuid=d67d28d9-a95c-42ee-95be-efb74ead9083',
};
export const COMPONENTS = {
  id: 'components',
  route: 'pages/developers/components',
};
export const FAQS = { id: 'faqs', route: '/pages/faqs' };

export const WALKTHROUGH = (pageId: string, sectionId?: string) =>
  `${WALKTHROUGHS.route}/${pageId}${sectionId ? '#' + sectionId : ''}`;
export const SECTION = (baseRoute: { route: string }, sectionId: string) =>
  `${baseRoute.route}#${sectionId}`;

export const INTERFACES = (interfaceName: string) => ({
  id: 'interfaces',
  route: `pages/developers/interfaces${
    !!interfaceName ? '/' + pascalCaseToKebabCase(interfaceName) : ''
  }`,
});
export const COMPONENT_PAGE = (componentTag: string) => ({
  id: componentTag,
  route: `./pages/developers/components/${componentTag}`,
});
export const SETUP_GUIDE = (frameworkChoice: JsFramework) => ({
  id: `getting-started-${frameworkChoice}`,
  route: `pages/developers/getting-started/${frameworkChoice.toLowerCase()}`,
});

export const TEAMS_CHANNEL =
  'https://teams.microsoft.com/l/channel/19%3af561e80a0a97454393d7dcd83ac9a3cb%40thread.tacv2/General?groupId=7b0ae77e-3119-488d-9a59-62bc1c31a592&tenantId=08a83339-90e7-49bf-9075-957ccd561bf1';

export const FLUID_COMPONENTS_REPO = `https://github.com/lmigtech/fluid-components`;
export const FLUID_CORE = `https://github.com/lmigtech/fluid-core`;
export const FLUID_REACT_UTILS = `https://github.com/lmigtech/fluid-react-utils`;
