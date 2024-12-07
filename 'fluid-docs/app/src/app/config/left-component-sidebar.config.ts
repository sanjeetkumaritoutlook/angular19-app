import { JsonDocs, JsonDocsComponent } from '../../assets/docs';
import { ExtendedJsonDocsComponent } from '../model/extendedJsonDocsComponent';
import { COMPONENT_PAGE } from './page-url.config';
import {
  compareAsc,
  isAfter,
  isWithinInterval,
  parseISO,
  subDays,
} from 'date-fns';
import { WHATS_NEW_LIMIT } from '../content/whats-new.content';

export const leftComponentSidebarConfig = (
  jsonDocs: JsonDocs,
  selectedComponent?: string
) => ({
  fixed: true,
  collapsible: true,
  menuItems: [
    {
      label: 'Components',
      sectionTitle: true,
    },
    {
      divider: true,
    },
    ...componentLinks(jsonDocs, selectedComponent),
    {
      label: 'Experimental',
      sectionTitle: true,
    },
    {
      divider: true,
    },
    ...experimentalLinks(jsonDocs, selectedComponent),
  ],
});

export const experimentalLinks = (
  jsonDocs: JsonDocs,
  selectedComponent: string
) => {
  return jsonDocs.components
    .filter((c: ExtendedJsonDocsComponent) => {
      return c.experimental;
    })
    .map((c: ExtendedJsonDocsComponent) => ({
      label: c.displayName,
      route: COMPONENT_PAGE(c.tag).route,
      selected: c.tag === selectedComponent,
      elementType: 'a',
    }));
};

export const componentLinks = (
  jsonDocs: JsonDocs,
  selectedComponent: string
) => {
  return jsonDocs.components
    .filter((c: ExtendedJsonDocsComponent) => {
      return (
        c.filePath.indexOf('deprecated') === -1 &&
        !c.excludeTag &&
        !c.experimental &&
        !c.internal
      );
    })
    .map((c: ExtendedJsonDocsComponent) =>
      createLink(c, jsonDocs.components, selectedComponent)
    );
};

const findChildren = (
  components: ExtendedJsonDocsComponent[],
  selector: string,
  selectedComponent
) => {
  return components
    .filter((c) => c.childOf === selector)
    .map((child) => createLink(child, components, selectedComponent));
};

export const createLink = (
  child: ExtendedJsonDocsComponent,
  components: ExtendedJsonDocsComponent[],
  selectedComponent
) => ({
  label: child.displayName,
  route: COMPONENT_PAGE(child.tag).route,
  selected: child.tag === selectedComponent,
  elementType: 'a',
  badge: componentHasUpdatesInRange(child.changeLog) && NEW_STUFF_BADGE,
});

export const componentHasUpdatesInRange = (changeLog) => {
  return (
    changeLog?.filter((c) =>
      isAfter(parseISO(c.date), subDays(new Date(), WHATS_NEW_LIMIT))
    ).length > 0
  );
};

export const NEW_STUFF_ICON = { key: 'updated', color: 'gray', size: 'md' };
export const NEW_STUFF_BADGE = {
  label: 'Updated!',
  color: 'info',
  indicator: true,
};
