import {
  FluidPageContent,
  FluidPageSectionStyle,
} from '../model/fluid-docs-content.interface';
import { info, Joe, list, section, text, title } from './content.utils';

export const deprecationPageContent = (): FluidPageContent => ({
  pageTitle: 'Deprecation in FLUID',
  author: Joe,
  pageIntroduction: [
    text(
      'Deprecation, in its programming sense, is the process of taking older code and marking it ' +
        'as no longer being useful within the codebase, usually because it has been superseded by newer code. ' +
        'The deprecated code is not immediately removed from the codebase because doing so may cause regression ' +
        'errors.'
    ),
  ],
  sectionStyle: FluidPageSectionStyle.FLOW,
  lastUpdated: new Date('2021-12-29'),
  sections: [
    section('Why would FLUID deprecate code?', [
      text(
        'FLUID is continuously being developed to bring new components, new features and enhancements ' +
          'to older features so that we can continue to improve the process of UI development for our users. From time ' +
          'to time, we come across code that served a purpose at the time it was first written, but that now, with the ' +
          'enhancements of our patterns and techniques, is no longer our preferred choice. In those situations, if we ' +
          'add a new and better way to do something under the hood of one of our components, we deprecate the old method, ' +
          "and fire a warning in the console so you, our users, know what's been deprecated and what you should now use " +
          'instead.'
      ),
      info(
        `Please note, that this warning is <strong>only shown in your local or non-prod environments.</strong> Your end-user will <strong>not</strong> see the warning in the console.`
      ),
    ]),
    section('How does FLUID handle deprecation?', [
      text(
        'As FLUID is a runtime system, we recognise that the choices we make can have an immediate effect on ' +
          'any and all applications that are using our components. Therefore, we have made the decision that we will handle ' +
          'deprecation a little differently.'
      ),
      text(
        "Deprecation, in normal terms, means eventually removing code from the codebase. However, we're aware that " +
          "the removal of properties in our system has the potential to cripple a deployed application if it isn't still under " +
          'active development (where a developer would be expected to see the deprecation warning)'
      ),
      text(
        `So, we have decided that deprecated properties <strong>will NOT be removed from the codebase.</strong> Instead, we have created our own interpretation of the term.`
      ),
      text(
        "When a property is <em>'officially'</em> deprecated in FLUID, the following will apply:"
      ),
      list([
        'New features will not use the deprecated property. Old features that used it, will continue to work.',
        'The property will be removed from our component API documentation.',
        'We will no longer provide support for the deprecated property - instead, will recommend migrating to the new property.',
        'Where a property has been enhanced to accept further configuration options existing implementations of the deprecated property will have sensible defaults applied.',
        'The property will be moved to a dark corner of the component, and will be effectively considered dead. 💀 (But still alive enough to work...)',
        'The console deprecation warning will expire after a set period of time, and the property will be added to our deprecated property list.',
      ]),
      text(
        'We will <strong>NOT</strong> delete it from the codebase, and existing implementations <strong>will continue to work.</strong>'
      ),
    ]),
  ],
});
