import { SETUP_GUIDE } from './page-url.config';
import { JsFramework } from '../model/js-framework.enum';

export interface FluidSupportedFramework {
  name: string;
  iconConfig: { color: string; key: string };
  description: string;
  setupGuide: { id: string; route: string };
}

export const supportedFrameworks: FluidSupportedFramework[] = [
  {
    name: JsFramework.ANGULAR,
    iconConfig: {
      color: 'error',
      key: JsFramework.ANGULAR.toLowerCase(),
    },
    description:
      'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. ' +
      'Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you ' +
      'import into your applications.',
    setupGuide: SETUP_GUIDE(JsFramework.ANGULAR),
  },
  {
    name: JsFramework.REACT,
    iconConfig: {
      color: 'blue',
      key: JsFramework.REACT.toLowerCase(),
    },
    description:
      'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. ' +
      'It is maintained by Meta and a community of individual developers and companies.',
    setupGuide: SETUP_GUIDE(JsFramework.REACT),
  },
  {
    name: JsFramework.VUE,
    iconConfig: {
      color: 'success',
      key: JsFramework.VUE.toLowerCase(),
    },
    description:
      'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page ' +
      'applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.',
    setupGuide: SETUP_GUIDE(JsFramework.VUE),
  },
  // {
  //   name: JsFramework.SVELTE,
  //   iconConfig: {
  //     color: 'red-orange',
  //     key: JsFramework.SVELTE.toLowerCase(),
  //   },
  //   description: 'Svelte is a free and open-source front end compiler created by Rich Harris and maintained by the Svelte core team members. ' +
  //     'Svelte applications do not include a framework script.',
  //   setupGuide: SETUP_GUIDE(JsFramework.SVELTE)
  // },
  {
    name: JsFramework.JAVASCRIPT,
    iconConfig: {
      color: 'deep-yellow',
      key: JsFramework.JAVASCRIPT.toLowerCase(),
    },
    description:
      'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside ' +
      'HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.',
    setupGuide: SETUP_GUIDE(JsFramework.JAVASCRIPT),
  },
];
