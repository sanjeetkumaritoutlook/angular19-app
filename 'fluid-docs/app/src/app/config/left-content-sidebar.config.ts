import {
  ABOUT_FLUID,
  ACCESSIBILITY,
  CONTRIBUTION,
  DEPRECATION,
  FEATURE_REQUESTS,
  FOR_DESIGNERS,
  FOR_DEVELOPERS,
  OVERVIEW,
  RELEASE_STRATEGY,
  TESTING_WITH_FLUID,
  THEMES,
  WHATS_NEW,
} from './page-url.config';

export const leftContentSidebarConfig = (currentPageId: string) => ({
  fixed: true,
  collapsible: false,
  menuItems: [
    {
      label: 'Overview',
      route: OVERVIEW.route,
      elementType: 'a',
      selected: currentPageId === OVERVIEW.id,
    },
    {
      label: "What's New",
      route: WHATS_NEW.route,
      elementType: 'a',
      selected: currentPageId === WHATS_NEW.id,
    },
    {
      label: 'Accessibility',
      route: ACCESSIBILITY.route,
      elementType: 'a',
      selected: currentPageId === ACCESSIBILITY.id,
    },
    {
      label: 'Get Started',
      submenu: [
        {
          label: 'FLUID Themes',
          route: THEMES.route,
          elementType: 'a',
          selected: currentPageId === THEMES.id,
        },
        {
          label: 'For Developers',
          route: FOR_DEVELOPERS.route,
          elementType: 'a',
          selected: currentPageId === FOR_DEVELOPERS.id,
        },
        {
          label: 'For Designers',
          route: FOR_DESIGNERS.route,
          elementType: 'a',
          selected: currentPageId === FOR_DESIGNERS.id,
        },
        {
          label: 'Testing with FLUID',
          submenu: [
            {
              label: 'Unit Testing',
              route: TESTING_WITH_FLUID.route,
              elementType: 'a',
              selected: currentPageId === TESTING_WITH_FLUID.id,
            },
          ],
        },
      ],
    },
    {
      label: 'Contributing to FLUID',
      submenu: [
        {
          label: 'How To Contribute',
          route: CONTRIBUTION.route,
          elementType: 'a',
          selected: currentPageId === CONTRIBUTION.id,
        },
        {
          label: 'Feature Requests',
          route: FEATURE_REQUESTS.route,
          elementType: 'a',
          selected: currentPageId === FEATURE_REQUESTS.id,
        },
      ],
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Release Strategy',
          route: RELEASE_STRATEGY.route,
          elementType: 'a',
          selected: currentPageId === RELEASE_STRATEGY.id,
        },
        {
          label: 'Deprecation',
          route: DEPRECATION.route,
          elementType: 'a',
          selected: currentPageId === DEPRECATION.id,
        },
      ],
    },
    {
      label: 'About',
      route: ABOUT_FLUID.route,
      elementType: 'a',
      selected: currentPageId === ABOUT_FLUID.id,
    },
  ],
});
