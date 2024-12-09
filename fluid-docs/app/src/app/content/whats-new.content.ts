import { FluidPageContent } from '../model/fluid-docs-content.interface';
import { inlineLink, section, text } from './content.utils';
import { releaseNotes } from './release-notes.content';
import { updatesPageContent } from './updates.content';
import { JsonDocs } from '../../assets/docs';
import {
  COMPONENT_UPDATES,
  FRAMEWORK_UPDATES,
  RELEASE_NOTES,
} from '../config/page-url.config';

export const WHATS_NEW_LIMIT = 45;

export const whatsNewContent = (jsonDocs: JsonDocs): FluidPageContent => ({
  pageTitle: "What's New!",
  pageIntroduction: [
    text(
      'FLUID is continually improving through contributions from the community, and planned changes from the core team. Check back often to find ' +
        'important features and updates for everything FLUID'
    ),
    text(
      `Here you will see the latest production release notes, as well as any updates to components that have been made in the last ${WHATS_NEW_LIMIT} days.`
    ),
    text(
      `For full updates list, please see the following sections, or the changelog for each component;`
    ),
    text(`
    ${inlineLink('.' + RELEASE_NOTES.route, 'All Releases', '_self')}
    | ${inlineLink('.' + COMPONENT_UPDATES.route, 'Component Updates', '_self')}
    | ${inlineLink(
      '.' + FRAMEWORK_UPDATES.route,
      'Framework Updates',
      '_self'
    )}`),
  ],
  sections: [
    section('Latest Release', [...releaseNotes[0].content]),
    ...updatesPageContent(jsonDocs, WHATS_NEW_LIMIT).sections,
  ],
});
