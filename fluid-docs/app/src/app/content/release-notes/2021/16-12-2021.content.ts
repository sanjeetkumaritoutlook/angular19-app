import { FluidPageSection } from '../../../model/fluid-docs-content.interface';
import {
  code,
  divider,
  inlineCode,
  Joe,
  link,
  releaseFeature,
  subtitle,
  text,
} from '../../content.utils';

export const releaseNotes16122021 = (): FluidPageSection => ({
  lastUpdated: new Date('2021-12-16'),
  author: Joe,
  title: 'Thursday 16th December - Production Release - 1.0.0-master+65',
  content: [
    text(
      "In what will be the last release of 2021, we're dropping a few gifts this week! 🎁  We've added some handy features to " +
        'forms to help you to update configuration on the fly based on user selections, as well as another element of our internationalisation ' +
        'effort with configurable currency display in your tables, and a host of other tweaks and updates!'
    ),
    text('Oh...... and a new component! 👀'),
    divider(),
    subtitle('Full Release Notes'),
    ...releaseFeature(
      'Ability to dynamically configure form (and field values) based on user input.',
      'https://forge.lmig.com/issues/browse/FLUID-115',
      [
        text(`Say goodbye to ${inlineCode(
          'setElementConfig'
        )} on multiple fields at once when a value changes with our latest additions to forms,
        ${inlineCode('dynamicConfig')} and ${inlineCode(
          'dynamicValue'
        )} - use when you need the configuration of a field, or the value of a readonly one to update based on the value of another field
          (or fields) by providing a function that receives the full form data and returns a configuration object!`),
        link({
          link: 'https://fluid.lmig.com/fluid-documentation/walkthroughs/forms/dynamic-configuration',
          label: 'More info...',
          target: '_blank',
        }),
      ]
    ),
    ...releaseFeature(
      'Ability to display any number (or numerical string)  as a currency, using the same configuration options as currency field (locale, etc)',
      'https://forge.lmig.com/issues/browse/FLUID-129',
      [
        text(`Now you can retrieve a dataset containing monetary values in numerical form, and have them display in any of our supported currencies in the
        table, with currency symbol and appropriate separators! Simply configure the ${inlineCode(
          'formattingOptions'
        )} on your table header, and let FLUID do the rest!`),
        code(`formattingOptions: { currency: { currencySymbol: "JPY" } }`),
      ]
    ),
    ...releaseFeature(
      'Say hello to FLUID Drawer 👋🏻',
      'https://forge.lmig.com/issues/browse/FLUID-116',
      [
        text(
          "Where FLUID Sidebar allowed you to present a nav menu, or contextual content to left or right of your content (with 'content push'), " +
            "Drawer does things a little differently. Drawer is essentially a big slot, which can 'slide over' the content from any side of the screen (including " +
            'top and bottom!) allowing greater flexibility for contextual content, actions, or even user input'
        ),
      ]
    ),
    text(
      "We've also added some accessibility updates to tabs (such as focus and hover states, keyboard navigation, etc), some tweaks to disabled states " +
        'in forms, and the option to choose atmospheric white as a background colour of FLUID Page and FLUID Content!'
    ),
    text(
      'This year, FLUID has gone from strength to strength, and you, our customers, are the driving force behind everything it has become, and for that, ' +
        'we thank you wholeheartedly.'
    ),
    text('Happy Holidays, and heres to a great 2022! 🥂'),
  ],
});
