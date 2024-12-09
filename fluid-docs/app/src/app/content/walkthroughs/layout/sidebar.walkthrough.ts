import {
  FluidPageContent,
  FluidPageSectionStyle,
} from '../../../model/fluid-docs-content.interface';
import { COMPONENT_PAGE } from '../../../config/page-url.config';

import {
  code,
  defaultContentWidth,
  divider,
  formatBold,
  formatItalic,
  inlineCode,
  inlineLink,
  interfaceLink,
  list,
  section,
  splitContent,
  subtitle,
  text,
} from '../../content.utils';

// ================================================================ //
// -- Variables

const fluidSidebarLink = inlineLink(
  COMPONENT_PAGE('fluid-sidebar').route,
  'FLUID Sidebar'
);
const fluidPageLink = inlineLink(
  COMPONENT_PAGE('fluid-page').route,
  'FLUID Page'
);
const fluidTreeMenuLink = inlineLink(
  COMPONENT_PAGE('fluid-tree-menu').route,
  'FLUID Tree Menu'
);
const fluidTreeMenuExamplesLink = inlineLink(
  `${COMPONENT_PAGE('fluid-tree-menu').route}#examples`,
  'Tree Menu Usage Examples'
);
const fluidContainerLink = inlineLink(
  COMPONENT_PAGE('fluid-container').route,
  'FLUID Container'
);
const stencilReactiveDataLink = inlineLink(
  'https://stenciljs.com/docs/reactive-data#handling-arrays-and-objects',
  'Stencil Docs: Reactive Data'
);

const leftSidebarExample = `<fluid-page left-sidebar-config={...}>
  ...
</fluid-page>`;

const rightSidebarExample = `<fluid-page right-sidebar-config={...}>
  ...
</fluid-page>`;

const menuItemsExample = `leftSidebarConfig: {
  menuItems: [
    { label: 'Menu Item 1' },
    { label: 'Menu Item 2' },
    { label: 'Menu Item 3' },
  ],
};`;

const treeMenuConfigExample = `leftSidebarConfig: {
  treeMenuConfig: {
    collapsibleSubmenus: false,
    selectableSubmenuButtons: true,
    menuItems: [
      { label: 'Menu Item 1' },
      { label: 'Menu Item 2' },
      { label: 'Menu Item 3' },
    ],
  },
};`;

const leftContentSlotExample = `<fluid-page left-sidebar-config={...}>
  <div slot="left-sidebar-content">
    ...
  </div>
  <fluid-tree-menu slot="left-sidebar-content" />
</fluid-page>`;

const rightContentSlotExample = `<fluid-page right-sidebar-config={...}>
  <div slot="right-sidebar-content">
    ...
  </div>
  <fluid-tree-menu slot="right-sidebar-content" />
</fluid-page>`;

const updateSidebarExample = `fluidPage.leftSidebarConfig = { ...fluidPage.leftSidebarConfig, visible: false };`;

const updateMenuItemsExample = `const menuItems = [ ...fluidPage.leftSidebarConfig.menuItems ];
menuItems[0].label = 'MY NEW LABEL';
fluidPage.leftSidebarConfig = { ...fluidPage.leftSidebarConfig, menuItems };`;

const updateTreeMenuConfigExample = `const treeMenuConfig = { ...fluidPage.leftSidebarConfig.treeMenuConfig };
treeMenuConfig.collapsibleSubmenus = false;
treeMenuConfig.menuItems[0].label = 'MY NEW LABEL';
fluidPage.leftSidebarConfig = { ...fluidPage.leftSidebarConfig, treeMenuConfig };`;

// ================================================================ //
// -- Page Content

export const sidebarWalkthrough = (): FluidPageContent => ({
  author: 'Troy Holleman',
  lastUpdated: new Date('2022/04/11'),
  pageTitle: 'Sidebar: Implementation & Tips',
  pageIntroduction: [
    text(
      `${fluidSidebarLink} provides a flexible way to display internal/external navigation, in-page navigation (i.e. "jump links"), contextual information, or ancillary controls on a single page, collection of pages, or globally across all pages within a website. In general, Sidebar's primary use case is to supplement header navigation by creating an "inverted L" navigation structure. It is also commonly used to provide "jump links" that vertically scroll the page to a certain position when clicked.`
    ),
  ],
  sectionStyle: FluidPageSectionStyle.FLOW,
  sections: [
    // ==== IMPORTANT NOTE

    section(`IMPORTANT NOTE`, [
      text(
        `${formatBold(
          `FLUID Sidebar should ONLY be implemented via ${fluidPageLink} (see details below) & should NOT be used as a standalone component`
        )}. Sidebar's expand/collapse functionality, as well as it's "fixed position" (i.e. anchored/sticky) support, requires its parent container to have very specific styles for it to work properly. FLUID Page implements these specific styles automatically depending on Sidebar's configuration, which is why it's the only "approved" parent container for Sidebar.`
      ),
      text(
        `If you have a use case for a "navigation tree" within a page body, Modal, Card, etc., ${formatBold(
          'DO NOT'
        )} attempt to use Sidebar as a standalone component. Instead, you can replicate Sidebar's layout, vertical scrolling, etc. by implementing ${fluidTreeMenuLink} within a ${fluidContainerLink} (walkthrough guide coming soon!).`
      ),
    ]),

    // ==== Sidebar Implementation via FLUID Page

    section(`Sidebar Implementation via FLUID Page`, [
      text(
        `As mentioned above, ${formatBold(
          `FLUID Sidebar should ONLY be implemented via ${fluidPageLink} & should NOT be used as a standalone component.`
        )}`
      ),
      text(
        `FLUID Page renders left/right Sidebar(s) based on the ${formatItalic(
          'existence'
        )} of the ${inlineCode('leftSidebarConfig')} and/or ${inlineCode(
          'rightSidebarConfig'
        )} @Prop(s). In other words, the Sidebar(s) will render if either @Prop value is truthy - even if they're empty object(s). These @Props aren't mutually exclusive, so providing values for both will render Sidebars on both sides of the page.`
      ),
      text(
        `Once you've created your Sidebar, you can populate it using its built-in ${fluidTreeMenuLink}, its content Slot, or a combination of the two. If more than 1 Tree Menu is needed, you can utilize the content Slot to add multiple independent Tree Menu instances to the Sidebar body.`
      ),

      divider(),

      splitContent(
        [
          subtitle(`FLUID Page with Left Sidebar`),
          code(leftSidebarExample, defaultContentWidth, { type: 'jsx' }),
        ],
        [
          subtitle(`FLUID Page with Right Sidebar`),
          code(rightSidebarExample, defaultContentWidth, { type: 'jsx' }),
        ]
      ),
      text(
        formatItalic(
          formatBold(
            `NOTE: the following FLUID Page @Props are deprecated & should NOT be used: ${inlineCode(
              'hasSidebar'
            )}, ${inlineCode('sidebarLinks')}, ${inlineCode('sidebarOpen')}.`
          )
        )
      ),
    ]),

    // ==== Populating Sidebar: Built-In Tree Menu

    section(`Populating Sidebar: Built-In Tree Menu`, [
      text(
        `There are 2 ways to utilize FLUID Sidebar's built-in Tree Menu via ${inlineCode(
          'leftSidebarConfig'
        )} and ${inlineCode('rightSidebarConfig')}:`
      ),
      list([
        `${inlineCode('menuItems')}: passing a ${interfaceLink(
          'FluidMenuItem'
        )} array to this property will render a basic Tree Menu with default values for all Tree Menu @Props. In other words, use this property when you DON'T need to customize Tree Menu.`,
        `${inlineCode(
          'treeMenuConfig'
        )}: use this property INSTEAD OF the ${inlineCode(
          'menuItems'
        )} property when you want to customize Sidebar's built-in Tree Menu & need access to ALL of Tree Menu's @Props (see ${interfaceLink(
          'FluidTreeMenuConfig'
        )}).`,
      ]),

      divider(),

      splitContent(
        [subtitle(`Basic Tree Menu (menuItems)`), code(menuItemsExample)],
        [
          subtitle(`Customized Tree Menu (treeMenuConfig)`),
          code(treeMenuConfigExample),
        ]
      ),
      text(
        formatItalic(
          `${formatBold(
            'NOTE:'
          )} See ${fluidTreeMenuExamplesLink} for more ways to configure ${inlineCode(
            'menuItems'
          )}.`
        )
      ),
    ]),

    // ==== Populating Sidebar: Content Slot

    section(`Populating Sidebar: Content Slot`, [
      text(
        `Each Sidebar has a content Slot that is rendered in the component's body. If Sidebar's built-in Tree Menu is utilized, the content Slot will appear ${formatBold(
          'below'
        )} the Tree Menu - otherwise, the content Slot will be the only element in the Sidebar's body & will appear at the top.`
      ),
      text(
        `Sidebar's content Slot name changes depending its anchor point (i.e. left/right side of the page). A left-anchored Sidebar's content Slot is named ${inlineCode(
          'left-sidebar-content'
        )}, and a right-anchored Sidebar's content Slot is named ${inlineCode(
          'right-sidebar-content'
        )}. Content can be added to a Sidebar's Slot from anywhere within the ${inlineCode(
          '<fluid-page>'
        )} tag, as long as the slotted element(s) are children of FLUID Page.`
      ),

      divider(),

      splitContent(
        [
          subtitle('Left Sidebar Content Slot'),
          code(leftContentSlotExample, defaultContentWidth, { type: 'jsx' }),
        ],
        [
          subtitle('Right Sidebar Content Slot'),
          code(rightContentSlotExample, defaultContentWidth, { type: 'jsx' }),
        ]
      ),
      text(
        formatItalic(
          `${formatBold(
            'NOTE:'
          )} Multiple elements can be added to the same Slot, as long as each element has the same ${inlineCode(
            'slot'
          )} attribute name.`
        )
      ),
    ]),

    // ==== Updating Sidebar & Tree Menu @Props

    section(`Updating Sidebar & Tree Menu @Props`, [
      text(
        `FLUID components update/re-render when their @Props or internal @States change. However, for performance & simplicity, components only compare ${formatItalic(
          `references`
        )} for changes (i.e. "shallow equality"), and therefore will ${formatBold(
          'NOT'
        )} re-render when data ${formatItalic(
          `inside`
        )} of an array or object changes (see ${stencilReactiveDataLink} for more information).`
      ),
      text(
        `Although mutating an object or array won't trigger a re-render, ${formatBold(
          `assigning a new ${formatItalic(
            'COPY'
          )} of the object or array ${formatItalic(
            'WILL'
          )} cause the component to update & re-render according to the new @Prop value`
        )}. This is true of any FLUID component @Prop that accepts an array or object, as well as any ${formatBold(
          formatItalic('NESTED')
        )} arrays or objects that correspond to component @Props.`
      ),
      text(
        `For example, this rule applies to FLUID Page's ${inlineCode(
          'leftSidebarConfig'
        )} / ${inlineCode(
          'rightSidebarConfig'
        )} @Props, and ALSO applies to the nested ${inlineCode(
          'menuItems'
        )} & ${inlineCode(
          'treeMenuConfig'
        )} properties as well (since they're ultimately assigned to Sidebar @Props).`
      ),

      divider(),

      subtitle(`Updating Sidebar`),
      text(
        `Sidebar's @Props are set via FLUID Page's ${inlineCode(
          'leftSidebarConfig'
        )} or ${inlineCode(
          'rightSidebarConfig'
        )}. After initial render, Sidebar's @Props can be updated by creating a copy of ${inlineCode(
          'leftSidebarConfig'
        )} / ${inlineCode(
          'rightSidebarConfig'
        )} with updated value(s), then assigning the new object reference back to FLUID Page.`
      ),
      text(
        `${formatBold(
          'Example:'
        )} Closing an open Sidebar by changing its ${inlineCode(
          'visible'
        )} @Prop:`
      ),
      code(updateSidebarExample),

      divider(),

      subtitle(`Updating Sidebar's Built-In Tree Menu`),
      text(
        `The @Props for Sidebar's built-in Tree Menu are set via the ${inlineCode(
          'menuItems'
        )} or ${inlineCode('treeMenuConfig')} properties of ${inlineCode(
          'leftSidebarConfig'
        )} or ${inlineCode(
          'rightSidebarConfig'
        )}. Updating Tree Menu's @Props requires new object references for ${inlineCode(
          'menuItems'
        )} / ${inlineCode(
          'treeMenuConfig'
        )} (so that Sidebar detects the @Prop change) AND ${inlineCode(
          'leftSidebarConfig'
        )} / ${inlineCode(
          'rightSidebarConfig'
        )} (so that FLUID Page detects the @Prop change).`
      ),
      text(
        `${formatBold(
          'Example:'
        )} Updating a built-in Tree Menu's menu items (when using ${inlineCode(
          'menuItems'
        )} INSTEAD OF ${inlineCode('treeMenuConfig')}):`
      ),
      code(updateMenuItemsExample),
      text(
        `${formatBold(
          'Example:'
        )} Making Tree Menu's submenus non-collapsible & updating the menu items via ${inlineCode(
          'treeMenuConfig'
        )}:`
      ),
      code(updateTreeMenuConfigExample),
    ]),
  ],
});
