import {
  FluidPageContent,
  FluidPageSectionStyle,
} from '../../../model/fluid-docs-content.interface';
import {
  code,
  defaultContentWidth,
  divider,
  inlineCode,
  inlineLink,
  interfaceLink,
  list,
  section,
  splitContent,
  subtitle,
  text,
} from '../../content.utils';

import { COMPONENT_PAGE } from '../../../config/page-url.config';

// ================================================================ //
// -- Variables

const fluidHeaderLink = inlineLink(
  COMPONENT_PAGE('fluid-header').route,
  'FLUID Header'
);

const fluidHeaderLink2 = inlineLink(
  COMPONENT_PAGE('fluid-header').route,
  "Header's API"
);

const javaScriptExampleHTML = `<fluid-header id="somefluidHeader">
</fluid-header>`;

const javaScriptExampleJS = `const fluidHeader = document.querySelector('fluid-header#somefluidHeader');
fluidHeader.links = [
  {
      label: "About",
      route: "about"
  }];

fluidHeader.addEventListener("linkClicked",(event) => {
  console.log('route', event.detail);
}));

`;

const angularExampleHTML = `<fluid-header
  [links]="links"
  (linkClicked)="linkClicked($event)"
  >
</fluid-header>`;
const angularExampleTS = `links = [
  {
    label: 'About',
    route: 'about',
  },
];

linkClicked(event) {
  console.log('route', event.detail);
}`;

const reactExample = `<FluidHeader
  links={{
    label: 'About',
    route: 'about'
  }}
  onLinkClicked={(event) => {
      console.log('route', event.detail);
    }}>
</FluidHeader>`;

// ================================================================ //
// -- Page Content

export const headerWalkthrough = (): FluidPageContent => ({
  author: 'Lucas Matos',
  lastUpdated: new Date('2022/11/15'),
  pageTitle: 'Header',
  pageIntroduction: [
    text(
      `The ${fluidHeaderLink} plays a vital role in web design as it serves as a roadmap, guiding users through the site's content.
       It enhances user experience by offering easy access to key sections, improving site usability, and aiding in information organization.
       A well-designed header navigation boosts engagement and helps visitors quickly find what they're looking for, reducing bounce rates and encouraging exploration of the site.`
    ),
  ],
  sectionStyle: FluidPageSectionStyle.FLOW,
  sections: [
    // ====  How to set the navigation

    section(`How to set the navigation links `, [
      text(
        `The ${inlineCode(
          'links'
        )} property expects to receive an array of ${interfaceLink(
          'FluidMenuItems'
        )}, Which populates the menus and submenus of the header
        <br />The ${interfaceLink(
          'FluidMenuItem'
        )} provides 2 ways to set a header link's destination, the ${inlineCode(
          'href'
        )} property or the ${inlineCode('route')} property:`
      ),
      list([
        `${inlineCode(
          'href:'
        )} Use the href property to generate a standard anchor element (${inlineCode(
          '<a href={URL}>Link</a>'
        )})  that does NOT rely on the
        consuming app's router for navigation.`,
        `${inlineCode('route:')} Use the route property when
          navigation SHOULD be handled by the consuming app's router (i.e.
          equivalent to Angular's ${inlineCode(
            'routerLink'
          )} or React's ${inlineCode('<Link to={ROUTE}>')}).`,
      ]),
    ]),
    section(`Handling Routing with Events`, [
      text(
        `When the ${inlineCode('route')} property of ${interfaceLink(
          'FluidMenuItem'
        )} is set on your header links, it expects navigation to be handled through the emitted event.
        this means that you need to set an event listener for either the ${inlineCode(
          'linkClicked'
        )} event or the ${inlineCode(
          'menuItemClick'
        )} event (refer to the "Events" Table in the ${fluidHeaderLink2}) and manage navigation through your app's router from there.
        This will prevent the default behavior of the underlying ${inlineCode(
          '<a>'
        )} tag. <br/>
       If you prefer that the Header links behave akin to traditional ${inlineCode(
         '<a>'
       )} tag hyperlinks (where navigation occurs upon clicking the link),
       you can opt for using the ${inlineCode('href')} property instead.`
      ),
    ]),
    section(`Examples`, [
      subtitle('JavaScript:'),
      splitContent(
        [
          subtitle(`HTML`),
          code(javaScriptExampleHTML, defaultContentWidth, { type: 'html' }),
        ],
        [
          subtitle(`Script`),
          code(javaScriptExampleJS, defaultContentWidth, { type: 'jsx' }),
        ]
      ),
      divider(),

      subtitle('Angular:'),
      splitContent(
        [
          subtitle(`HTML template`),
          code(angularExampleHTML, defaultContentWidth, { type: 'html' }),
        ],
        [
          subtitle(`Component Bindings`),
          code(angularExampleTS, defaultContentWidth, { type: 'jsx' }),
        ]
      ),
      divider(),

      subtitle('React:'),
      code(reactExample, defaultContentWidth, { type: 'jsx' }),
    ]),
  ],
});
