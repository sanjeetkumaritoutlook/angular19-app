import {
  FluidPageContent,
  FluidPageSectionStyle,
} from '../model/fluid-docs-content.interface';
import {
  code,
  component,
  divider,
  info,
  inlineLink,
  section,
  subtitle,
  text,
} from './content.utils';
import { ComponentSelector } from '../components/component-selector.enum';

export const gettingStartedPageContent = (): FluidPageContent => ({
  pageTitle: `Getting Started with FLUID`,
  pageIntroduction: [
    text(`Getting started with FLUID is simple, but the methods for importing our scripts vary from
  framework to framework.`),
    text(
      'As FLUID is framework agnostic, our components will work with any framework you choose, so we have created the following guides for ' +
        'the most commonly used frameworks;'
    ),
  ],
  sectionStyle: FluidPageSectionStyle.FLOW,
  sections: [
    section('Choose Your Framework to Begin', [
      component(ComponentSelector.FRAMEWORK_SWITCHER),
    ]),
  ],
});
