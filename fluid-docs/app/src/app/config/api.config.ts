import { INTERFACES } from './page-url.config';

const primitive = [
  'string',
  'number',
  'boolean',
  'any',
  'string[]',
  'number[]',
  'boolean[]',
  'any[]',
];
const stripArray = (type: string) => type?.replace(/\[/g, '').replace(/]/g, '');
const cleanType = (type: string) =>
  type?.indexOf('|') !== -1 ? type?.substring(0, type?.indexOf('.')) : type;

export const propTableHeaders = [
  {
    label: 'Property',
    dataPath: 'name',
    renderComponent: (value) => asCode(value.name, 'property'),
  },
  { label: 'Description', dataPath: 'docs' },
  {
    label: 'Type',
    dataPath: 'type',
    renderComponent: (value) => {
      const clean = cleanType(value.type);
      return primitive.indexOf(clean) === -1
        ? asInterfaceLink(clean)
        : asCode(clean, stripArray(clean));
    },
  },
  {
    label: 'Default Value',
    dataPath: 'default',
    renderComponent: (value) => {
      const codeType =
        value.default?.indexOf('(') !== -1
          ? 'function'
          : stripArray(cleanType(value.type));
      return !!value.default
        ? asCode(value.default.replace(/this./g, ''), codeType)
        : '';
    },
  },
].map((h) => ({ ...h, disableFilters: true }));

export const methodTableHeaders = [
  {
    label: 'Name',
    dataPath: 'name',
    renderComponent: (value) => asCode(value.name),
    helpText: 'Expand the rows to see the function signature!',
  },
  { label: 'Description', dataPath: 'docs' },
].map((h) => ({ ...h, disableFilters: true }));

export const slotTableHeaders = [
  { label: 'Name', dataPath: 'name' },
  { label: 'Description', dataPath: 'docs' },
  {
    label: 'Usage',
    renderComponent: (value) => ({
      component: 'fluid-code-block',
      props: {
        code: getSlotExample(value.name),
        type: 'html',
      },
    }),
  },
].map((h) => ({ ...h, disableFilters: true }));

export const eventTableHeaders = [
  {
    label: 'Event Name',
    dataPath: 'event',
    renderComponent: (value) => asCode(value.event),
  },
  { label: 'Description', dataPath: 'docs' },
  {
    label: 'Bubbles',
    cellAlignment: 'center',
    helpText:
      'A Boolean indicating whether the event bubbles up through the DOM or not.',
    dataPath: 'bubbles',
    renderComponent: (value) => asCheckbox(value.bubbles),
  },
  {
    label: 'Composed',
    cellAlignment: 'center',
    helpText:
      'A Boolean value indicating whether or not the event can bubble across the boundary between the shadow DOM and the regular DOM.',
    dataPath: 'composed',
    renderComponent: (value) => asCheckbox(value.composed),
  },
  {
    label: 'Cancelable',
    cellAlignment: 'center',
    helpText: 'A Boolean indicating whether the event is cancelable.',
    dataPath: 'cancelable',
    renderComponent: (value) => asCheckbox(value.cancelable),
  },
  {
    label: 'Event Detail Type',
    dataPath: 'detail',
    renderComponent: (value) => asCode(value.detail),
  },
].map((h) => ({ ...h, disableFilters: true }));

export const getSlotExample = (slotName: string): string => {
  if (!!slotName) {
    return `<div slot="${slotName}">...</div>`;
  } else {
    return `<!-- No "slot" attr required! -->`;
  }
};

export const asCode = (value, inlineType?) => {
  return {
    component: 'fluid-code-block',
    props: {
      code: value,
      type: 'markup',
      noContainer: true,
      inlineType,
    },
  };
};

export const asInterfaceLink = (interfaceName: string) => {
  return {
    component: interfaceName.indexOf('(') !== -1 ? 'div' : 'fluid-link',
    props: {
      link: INTERFACES(stripArray(interfaceName)).route,
    },
    children: [
      {
        component: 'fluid-code-block',
        props: {
          noContainer: true,
          code: interfaceName,
        },
      },
    ],
  };
};

export const asCheckbox = (isChecked: boolean) => {
  return {
    component: 'fluid-toggle',
    props: {
      initialValue: isChecked,
      disabled: true,
      toggleType: 'custom',
      customToggleConfig: {
        iconOn: {
          key: 'success',
          color: 'success',
        },
        iconOff: {
          // intentionally left empty to show no icon
        },
      },
    },
  };
};
