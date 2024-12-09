import { code, info, link, section, text, title } from '../content.utils';
import { FLUID_COMPONENTS_REPO } from '../../config/page-url.config';

export const settingUpSection = section('Set Up the FLUID Project Locally', [
  title('Clone the repository'),
  code(`git clone ${FLUID_COMPONENTS_REPO}`),
  text(
    "The above command will clone the repository over HTTPS. If you'd prefer to use SSH, " +
      'or a GUI such as SourceTree, the other urls are available in the main repo web link;'
  ),
  link({
    link: FLUID_COMPONENTS_REPO,
    label: 'FLUID Repository',
    target: '_blank',
  }),
  title('Install Dependencies'),
  code(`cd fluid-components/component-library`),
  text(
    'Initially, you will only need to install dependencies for the component library itself, as ' +
      'you can use the kitchen sink (more on that later) to test-data your changes/component. Later, you will test-data ' +
      "your contributions in the documentation site, which has it's own set-up section"
  ),
  code(`npm install --force`),
  info(
    'The <code>--force</code> flag is necessary until we transition from LESS to SCSS.'
  ),
  text(
    'Once the install has finished, you are now ready to run the component library for the very first time!'
  ),
]);
