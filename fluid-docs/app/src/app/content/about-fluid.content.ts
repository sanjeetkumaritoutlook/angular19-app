import {
  FluidPageContent,
  FluidPageSectionStyle,
} from '../model/fluid-docs-content.interface';
import { webComponentsSection } from './about-fluid/web-components.section';
import { inlineLink, Joe, text } from './content.utils';
import { runtimeUpdatesSection } from './about-fluid/runtime-updates.section';
import { shadowDomSection } from './about-fluid/shadow-dom.section';
import { componentStylingSection } from './about-fluid/styling.section';

export const aboutFluidContent = (): FluidPageContent => {
  return {
    pageTitle: 'About FLUID',
    pageIntroduction: [
      text(`FLUID is built using TSX (JSX with Typescript), and compiled using ${inlineLink(
        'https://stenciljs.com/',
        'StencilJS'
      )} to create small, fast and
      100% standards based Web Components that run in every browser, in every framework.`),
      text(
        "When we say framework-agnostic, we mean it. FLUID doesn't care about your framework, it only cares about what you put in, how it should render, and what it should put out."
      ),
      text(
        'The following sections outline how FLUID works, and the reasons behind the technological choices we have made.'
      ),
    ],
    author: Joe,
    lastUpdated: new Date('2022-08-02'),
    sectionStyle: FluidPageSectionStyle.TABS,
    sections: [
      webComponentsSection,
      runtimeUpdatesSection,
      shadowDomSection,
      componentStylingSection,
    ],
  };
};
