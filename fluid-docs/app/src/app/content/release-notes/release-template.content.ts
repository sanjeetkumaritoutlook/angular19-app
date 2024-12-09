import { FluidPageSection } from '../../model/fluid-docs-content.interface';
import { Joe, releaseFeature, subtitle, text } from '../content.utils';

/**
 * NOTE: After creating your release notes content from this template,
 * please make sure you add your new exported content to the releaseNotes
 * array in release-notes.content.ts.
 */

export const releaseNotesDATE = (): FluidPageSection => ({
  lastUpdated: new Date('2021-12-09'),
  author: Joe,
  title: 'Thursday 9th December - Production Release - master-2.0.39',
  content: [
    subtitle('Full Release Notes'),
    ...releaseFeature('Release Feature', 'Link to PR', [
      text('Description Goes here'),
    ]),
  ],
});
