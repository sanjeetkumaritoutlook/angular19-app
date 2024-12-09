import { pageContentToTOCItem } from '../../content.utils';
import { sidebarWalkthrough } from './sidebar.walkthrough';
import { headerWalkthrough } from './header.walkthrough';

export const layoutWalkthroughs = {
  title: 'Layout',
  introduction: [],
  walkthroughs: [sidebarWalkthrough(), headerWalkthrough()].map((content) =>
    pageContentToTOCItem(content, './pages/developers/walkthroughs')
  ),
};
