import {
  FluidPageContent,
  FluidPageSectionStyle,
} from '../model/fluid-docs-content.interface';
import { repositoryGitUrl } from '../utils';
import {
  code,
  image,
  Joe,
  link,
  list,
  section,
  subtitle,
  text,
  title,
} from './content.utils';
import { settingUpSection } from './onboarding/setting-up.section';
import { runningFluidSection } from './onboarding/running-fluid.section';
import { documentingComponentsSection } from './onboarding/documenting-components.section';

const defineProperties = `// ================================================================ //
// -- Define element sets

const elementsWithArrayProps = [
  { id: 'array-property-one', myArrayProperty: ['Frontend', 'Library', 'for', 'User', 'Interface', 'Design'] }
];

const elementsWithObjectProps = [
  { id: 'object-property-one', myObjectProperty: { name: 'FLUID', type: 'framework', status: 'Legendary' } }
];

const elementsWithStringProps = [
  { id: 'string-property-one', myStringProperty: 'Hello, FLUID' }
];`;

const createElementSections = `// ================================================================ //
// -- Create Element Sections

createElementSection('fluid-component-template', 'array-props', 'Using array property', elementsWithArrayProps);
createElementSection('fluid-component-template', 'object-props', 'Using object property', elementsWithObjectProps);
createElementSection('fluid-component-template', 'string-props', 'Using string property', elementsWithStringProps);
`;

const addingEventListeners = `// ================================================================ //
// -- Add Event Listeners

addFluidEventListener('array-property-one', 'myEvent', function(eventData) {
  console.log('myEvent event fired on array-property-one', eventData);
});`;

const addingMethodExecutors = `// ================================================================ //
// -- Add Method Executors

addMethodExecutors(['myMethod'], 'array-property-one');
`;

export const contributionPageContent = (): FluidPageContent => ({
  pageTitle: 'Contributing to FLUID',
  pageIntroduction: [],
  author: Joe,
  lastUpdated: new Date('2021-12-24'),
  sectionStyle: FluidPageSectionStyle.TABS,
  sections: [
    section('Contributing To FLUID', [
      text(
        'When we first created FLUID, we envisaged an ever-evolving library of reusable components that should cover any UI ' +
          'requirement. Starting with a small, core group of developers, we have grown to a cross-train guild of designers and developers, ' +
          'with the aim for growing this library to the best it can be. With that in mind, anyone can contribute to FLUID, and we actively ' +
          'encourage developers to get involved!'
      ),
      text(
        'The following guide talks you through the process of contributing a new component to FLUID, from pulling the repository, installing dependencies, ' +
          ' and running the library locally, to generating a component using the CLI, developing and testing, and finally, submitting your component for review and inclusion in ' +
          'the FLUID component library!'
      ),
      text(
        'If you have a requirement for a component you should first check our <fluid-link inline href="./components">component list</fluid-link> to see if there is an existing ' +
          'component that could fulfil your requirement.'
      ),
      text(
        'If no existing component can meet your requirements, then you should consult with the FLUID UX team in the first instance to help define the look and ' +
          'feel of your component.'
      ),
      subtitle('Contribution Requirements'),
      text(
        'When proposing an update or enhancement to an existing component, teams must think holistically about the impacts of their change on that component.'
      ),
      text(
        'Before contributions can be merged, the following points must be addressed. If you have questions about any of these, please reach out to the FLUID team directly before opening a PR:'
      ),
      list([
        'An approved design spec for any updates that impact the visual design or UX of the component.',
        'Compatibility with all existing configurations and variations of the component. For example, a new feature must be able to work in tandem with all existing features without causing functional ' +
          'or design defects.',
        'Accessibility support—including keyboard control, screen reader support, and proper use of ARIA tags, when necessary.',
        'Appropriate use of constants and typography mixins, where applicable.',
        'Adherence to existing naming conventions for props, methods, and events.',
        'Adherence to existing LESS practices.',
        'Adherence to existing Sonar code-quality gates.',
        'Technical documentation to account for any new props, methods or events—written in adherence with existing conventions.',
      ]),
    ]),
    settingUpSection,
    runningFluidSection,
    section('Creating A Component', [
      text(
        'In order to make it easier for developers to contribute new components to FLUID, we have developed a ' +
          'lightweight CLI that will create the necessary files, themes and component structure for you!'
      ),
      text(
        'Before creating your component, checkout a new branch from develop. This ensures you have the latest code ' +
          'and utilities to work with when developing your component'
      ),
      code('git checkout -b <BRANCH-NAME> origin/develop'),
      text(
        'When choosing your branch name, the pattern we follow is <JIRA-Story>-<Small Description>, e.g'
      ),
      code('git checkout -b FLUID-12345-Cool-Component origin/develop'),
      text(
        'This ensures that we can tell what a branch relates to by its name, but also links the branch back to JIRA for tracking.'
      ),
      image(
        { src: './assets/create-new-branch.png' },
        { sm: 12, md: 8, lg: 6 }
      ),
      code('npm run generate'),
      text(
        'You will be asked to name your component once you run this command - You do NOT need to add the fluid- prefix, ' +
          "the CLI will do that for you. If your component's name is more than one word, for example Loading Spinner, then type " +
          'it with spaces. FLUID will do the rest.'
      ),
      image({ src: './assets/run-generate.png' }, { sm: 12, md: 8, lg: 6 }),
      text(
        'Once that completes, you will see the following output, indicating that your component generation has been successful.'
      ),
      image({ src: './assets/files-replaced.png' }, { sm: 12, md: 8, lg: 6 }),
    ]),
    section('Developing & Testing', [
      text(
        'When you generated your new component, the CLI will also have generated two files under /sandbox in your components ' +
          'directory - an HTML file called <strong>fluid-{your-component-name}.html</strong> and a Javascript file called ' +
          '<strong>fluid-{your-component-name}.js</strong>'
      ),
      text(
        "This is your sandbox, where you can test-data changes to your component as you develop. As with the 'kitchen sink' (index.html), the " +
          'components on the page, will hot reload with each change.'
      ),
      title('Developing In Sandbox'),
      text(
        'In order to develop in your sandbox, you only need to update the <strong>fluid-{your-component-name}.js</strong>, as it comes ' +
          'with a set of utilities built-in which will update the HTML for you.'
      ),
      text(
        'When you generate your component using the CLI, the created component is set-up with 3 different types of props - a simple string, an ' +
          'array, and an object. You will also note there is a single exposed method <strong>myMethod</strong>, a private method <strong>getThemeDescription</strong> ' +
          'and an event <strong>myEvent</strong>.'
      ),
      text(
        'These props, methods and events are just examples of how a FLUID component has data fed in, and sends data back out, as well as how it functions ' +
          'inside. You should remove/replace these component parts as you develop, but for the purposes of this tutorial, we will use them as the examples for each ' +
          'sandbox section.'
      ),
      title('fluid-{your-component-name}.js'),
      text(
        'As FLUID components are framework agnostic, we develop and test-data with vanilla Javascript - this way we can be sure it works as expected in a baseline ' +
          'application, and frameworks should take care of themselves.'
      ),
      text(
        'As our components use more than just strings as their input properties, this means in order to test-data component props, event listeners, etc, we need to ' +
          'grab a DOM reference to our component, and apply the properties via Javascript, rather than through the type of syntactic sugar a framework might give us. '
      ),
      text(
        'This can be a daunting task for developers who are less familiar with vanilla Javascript, and is the very reason we developed a suite of tools to ' +
          'use in your sandbox when building out your component - we will discuss these tools in the following sections.'
      ),
      title('Setting Props on Your Component'),
      code(defineProperties),
      title('Rendering Your Component Instances'),
      code(createElementSections),
      title('Adding Event Listeners'),
      code(addingEventListeners),
      title('Testing Methods'),
      code(addingMethodExecutors),
    ]),
    documentingComponentsSection,
  ],
});
