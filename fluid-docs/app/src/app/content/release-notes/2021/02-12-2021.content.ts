import { FluidPageSection } from '../../../model/fluid-docs-content.interface';
import {
  divider,
  inlineCode,
  inlineLink,
  Joe,
  releaseFeature,
  subtitle,
  text,
} from '../../content.utils';

export const releaseNotes02122021 = (): FluidPageSection => ({
  lastUpdated: new Date('2021-12-02'),
  author: Joe,
  title: 'Thursday 2nd December - Production Release - 1.0.0-master+62',
  content: [
    text(
      "Ittttttt's Christmassssssss (month 🎄).... and just like the big man in red, FLUID delivers... 😏"
    ),
    text(`This weeks release was less about maintenance, and more about new features! 🙌 We've added some new
      button styles, icon buttons (❤️) and more table updates to support column groupings and configurable table striping/row borders,
      as well as style update for our corporate theme table as ${inlineLink(
        'https://teams.microsoft.com/l/message/19:f561e80a0a974' +
          '54393d7dcd83ac9a3cb@thread.tacv2/1637590199870?tenantId=08a83339-90e7-49bf-9075-957ccd561bf1&groupId=7b0ae77e-3119-488d-9a59-62b' +
          'c1c31a592&parentMessageId=1637590199870&teamName=FLUID%20Design%20System&channelName=General&createdTime=1637590199870',
        'outlined here!'
      )}`),
    divider(),
    subtitle('Full Release Notes'),
    ...releaseFeature(
      'Updates to table striping, row borders and corporate theme.',
      'https://git.forge.lmig.com/projects/IUNDERWRITE/repos/fluid/pull-requests/374/overview',
      [
        text(
          'This week the FLUID Table is getting some helpful updates to make Row Striping and Row Borders more configurable. ' +
            'In addition to the additional style controls, the Corp theme table will have a new more utilitarian look. This style update ' +
            'will bring the Corp theme in line with styles promoted by the broader design community at Liberty Mutual. '
        ),
      ]
    ),
    ...releaseFeature(
      'Large button variant and icon only button added.',
      'https://git.forge.lmig.com/projects/IUNDERWRITE/repos/fluid/pull-requests/381/overview',
      [
        text(`Button now has a ${inlineCode(
          'large'
        )} variant for situations when you need a button that\'s just a little bigger (like next to a form
          field, for example) as well as the ability to create an icon only button. Now, rather than using ${inlineCode(
            'iconBefore'
          )} or ${inlineCode('iconAfter')} to add
          an icon before or after the button label, you can just give it the icon configuration via the ${inlineCode(
            'icon'
          )} prop, which will replace the label
          altogether, and create a clickable, accessible icon button.`),
      ]
    ),
    ...releaseFeature(
      "Loading spinner enhanced to allow slotted content to be 'blocked' while loading.",
      'https://git.forge.lmig.com/projects/IUNDERWRITE/repos/fluid/pull-requests/378/overview',
      [text('Description Goes here')]
    ),
    ...releaseFeature(
      'Hotfix added for slotted icon colour on solid badges.',
      'https://git.forge.lmig.com/projects/IUNDERWRITE/repos/fluid/pull-requests/377/overview',
      [text('Description Goes here')]
    ),
    ...releaseFeature(
      'Added the ability to create column groups in table.',
      'https://git.forge.lmig.com/projects/IUNDERWRITE/repos/fluid/pull-requests/375/overview',
      [text('Description Goes here')]
    ),
  ],
});
