import { FluidPageSection } from '../../../model/fluid-docs-content.interface';
import { Joe, text } from '../../content.utils';

export const releaseNotes9122021 = (): FluidPageSection => ({
  lastUpdated: new Date('2021-12-09'),
  author: Joe,
  title: 'Thursday 9th December - Production Release - 1.0.0-master+64',
  content: [
    text(
      'Please note - due to concerns around AWS stack deployments since the outage earlier this week, this weeks production deploy has been delayed.'
    ),
    text(
      "FLUID has remained unaffected throughout, however, where updates this week are maintenance only, rather than major feature releases, we'd prefer to " +
        'err on the side of caution until all affected LM environments/apps have stabilised.'
    ),
  ],
});
