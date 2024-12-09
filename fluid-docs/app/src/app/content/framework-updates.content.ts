import {
  FluidContentBlock,
  FluidPageContent,
  FluidPageSectionStyle,
} from '../model/fluid-docs-content.interface';
import {
  code,
  divider,
  inlineLink,
  link,
  section,
  title,
  text,
  muted,
  Joe,
} from './content.utils';
import { format } from 'date-fns';
import { PRETTY_DATE } from '../utils';

export const frameworkUpdate = (
  updateTitle: string,
  date: Date,
  author: string,
  content: FluidContentBlock[]
) =>
  section(updateTitle, [
    muted(
      `Added on <strong>${format(
        date,
        PRETTY_DATE
      )}</strong> by <strong>${author}</strong>.`
    ),
    ...content,
  ]);

export const frameworkUpdatesContent = (): FluidPageContent => ({
  pageTitle: 'FLUID Framework Updates',
  pageIntroduction: [
    text(
      'In addition to constantly improving our components, we also invest a lot of time and effort into making the framework itself ' +
        'the best it can be.'
    ),
  ],
  author: Joe,
  lastUpdated: new Date('2022-01-07'),
  sectionStyle: FluidPageSectionStyle.FLOW,
  sections: [
    frameworkUpdate(
      'FLUID Vanity Urls',
      new Date('2021-03-22'),
      'Stefan Kennedy',
      [
        text(
          'FLUID now has its own vanity urls! FLUID is now accessible outside of the iUW Gateway via ' +
            'the following urls for production / non-prod.'
        ),
        link({
          link: 'https://fluid-test.lmig.com',
          label: 'FLUID Non-Prod',
          target: '_blank',
        }),
        link({
          link: 'https://fluid.lmig.com',
          label: 'FLUID Production',
          target: '_blank',
        }),
        text(`In addition, the getting started guides have also been updated to pull in the scripts using the new FLUID urls.
          This means that FLUID can be used in any project outside of iUW and no longer needs to use the iUW UI Gateway
          or direct s3 bucket urls for local development.`),
        text(`Please see the ${inlineLink(
          'pages/getting-started',
          'Getting Started'
        )}
          page for more details on how to use the new urls in your project.`),
      ]
    ),
    frameworkUpdate('Component Generator', new Date('2020-12-14'), Joe, [
      text(
        'A new script has been added to allow developers to create a new FLUID component in line with our standards and ' +
          'best practices for elements such as component structure, theme structure, rendering and functional testing, examples of ' +
          'usage and changelog.'
      ),
      text(`Now, in order to create a component, from the root of <strong>component-library</strong> directory,
        run the following command:`),
      code('npm run generate'),
      text(
        'This will prompt you for a name for your component. NB: You should <strong>NOT</strong> add the fluid- prefix, ' +
          'it will be automatically added.'
      ),
      text(
        'Once you have entered the name for your component, the script will use the component template we have set-up to ' +
          'create a new component directory with all the necessary file updates made, classes renamed, tests added, along with a basic ' +
          'examples file, and changelog file.'
      ),
      text('Then, from there.... start developing your new component!'),
      link({
        link: './pages/contribution',
        label: 'See our contribution guide for more info!',
        target: '_self',
      }),
    ]),
  ],
});
