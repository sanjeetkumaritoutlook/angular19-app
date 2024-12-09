import {
  inlineLink,
  Joe,
  list,
  section,
  subtitle,
  text,
} from './content.utils';
import { FluidPageSectionStyle } from '../model/fluid-docs-content.interface';

const compliance = (name, links) =>
  text(`${name} (${links.map((l) => inlineLink(l.href, l.label)).join(', ')})`);

export const accessibilityContent = () => ({
  pageTitle: 'Accessibility',
  pageAuthor: Joe,
  sectionStyle: FluidPageSectionStyle.FLOW,
  pageIntroduction: [
    text(
      'We are often asked if using FLUID will ensure a UI passes Accessibility Standards (a11y),  and the answer is that ' +
        'FLUID meets accessibility standards to the extent that individual components can. '
    ),
    text(
      'A11y doesn’t stop at the component or individual pattern level, which means that using accessible components alone will ' +
        'not determine if your product meets A11y standards. It is ultimately up to you and your team to put in the work to ensure your products ' +
        'are accessible for a variety of users.'
    ),
    text(
      'Many of the measures which ensure an app is WCAG compliant deal with full page, or sequences of different experiences. The ' +
        'FLUID team is committed to accessibility, and we have accessibility in mind with everything we build, so when you use FLUID components ' +
        'and patterns you are starting off in a good place and heading in the right direction.'
    ),
  ],
  lastUpdated: new Date('2023-02-08'),
  sections: [
    section('WCAG 2.1 Compliance', [
      text(
        'With that in mind, every FLUID component meets and or enables, the following WCAG 2.1 measures to ensure that you and ' +
          'your teams can fulfill additional measures for your products:'
      ),
      subtitle('Perceivable'),
      compliance('Color Contrast', [
        {
          href: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum',
          label: 'WCAG 1.4.3 AA',
        },
        {
          href: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast',
          label: 'WCAG 1.4.11',
        },
      ]),
      compliance('Use of Color', [
        {
          href: 'https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics',
          label: 'WCAG 1.3.3',
        },
      ]),
      compliance('Non-Text Content', [
        {
          href: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content',
          label: 'WCAG 1.1.1',
        },
      ]),
      compliance('Text Sizing/Spacing', [
        {
          href: 'https://www.w3.org/WAI/WCAG21/quickref/#text-spacing',
          label: 'WCAG 1.4.12',
        },
      ]),
      subtitle('Operable'),
      compliance('Keyboard Navigation', [
        {
          href: 'https://www.w3.org/WAI/WCAG21/quickref/#text-spacing',
          label: 'WCAG 2.1.4 A',
        },
      ]),
      compliance('Focus Order', [
        {
          href: 'https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts',
          label: 'WCAG 2.4.3 A',
        },
      ]),
      compliance('Click Areas', [
        {
          href: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size',
          label: 'WCAG 2.5.5',
        },
      ]),
      compliance('Focus Visible', [
        {
          href: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html',
          label: 'WCAG 2.4.7',
        },
      ]),
      subtitle('Understandable'),
      compliance('Error Identification', [
        {
          href: 'https://www.w3.org/WAI/WCAG21/Understanding/error-identification',
          label: 'WCAG 3.3.1',
        },
      ]),
      compliance('Error Suggestion', [
        {
          href: 'https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion',
          label: 'WCAG 3.3.3',
        },
      ]),
      compliance('Labels or Instructions', [
        {
          href: 'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions',
          label: 'WCAG 3.3.2',
        },
      ]),
      subtitle('Robust'),
      compliance('Name, Role, Value', [
        {
          href: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html',
          label: 'WCAG 4.1.2',
        },
      ]),
      compliance('Status Messages', [
        {
          href: 'https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html',
          label: 'WCAG 4.1.3',
        },
      ]),
    ]),
    section('Useful Links', [
      text(
        'The following resources provide more information on accessibility;'
      ),
      list([
        inlineLink(
          'https://www.w3.org/TR/WCAG21/',
          'Web Content Accessibility Guideline (WCAG) 2.1 (w3.org)'
        ),
        inlineLink(
          'https://dac.lmig.com/',
          'Digital Accessibility Center (lmig.com)'
        ),
      ]),
    ]),
  ],
});
