import { FluidPageSection } from '../../../model/fluid-docs-content.interface';
import { Emily, releaseFeature, subtitle, text } from '../../content.utils';

export const releaseNotes21112024 = (): FluidPageSection => ({
  lastUpdated: new Date('2024-11-21'),
  author: Emily,
  title: 'Thursday, November 21st - Production Release - FLUID-2.0.5',
  content: [
    text(
      'Hello FLUID community! We’ve been hard at work to bring you significant performance improvements and essential bug fixes in this release. We hope these updates make your experience with FLUID smoother and more efficient.'
    ),
    subtitle('Full Release Notes'),
    ...releaseFeature(
      '🐛 Bugfix: excludeFiltered',
      'https://github.com/lmigtech/fluid-components/pull/165',
      [
        text(`excludedFilter allows users to retain column filters on a table.
                However, a bug was preventing users from using the search more than once 
                thinking it was part of the column filters.  This fix tracks the difference between the 
                column filters and search filters allowing users to search just the filtered column data`),
      ]
    ),
    ...releaseFeature(
      '🔄 Refactoring/Documentation: Adds FluidFormElementsInterface ',
      'https://github.com/lmigtech/fluid-components/pull/157',
      [
        text(`FLUID Form element components are different from other FLUID components, 
                in that they must follow a strict interface in order to successfully integrate with FLUID Form. 
                This adds the FluidFormElementsInterface to help define your componets`),
      ]
    ),
    ...releaseFeature(
      '🔄 Refactoring: Transitioning to SCSS',
      'https://github.com/lmigtech/fluid-components/pull/154',
      [
        text(`And finally, as we continue to work towards removing our dependency on LESS, FLUID Tour has been
            converted to SCSS`),
      ]
    ),
  ],
});
