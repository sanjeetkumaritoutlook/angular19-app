import { code, image, section, text } from '../content.utils';

export const runningFluidSection = section('Running The Project', [
  text(
    'Running the project for the very first time may take a minute or longer, as we need to compile the components ' +
      'to their Javascript counterparts, and create the build cache for the first time. Subsequent builds (and live reloads) will ' +
      'be much quicker.'
  ),
  code('npm run start'),
  text(
    'Once the project starts the build, your browser will open and you should see the following screen:'
  ),
  image({ src: './assets/initialising-build.png' }, { sm: 12, md: 8, lg: 6 }),
  text(
    'The blue progress bar across the top of your browser window will give you a visual indication of how far along ' +
      'the build is. Once it is complete, you will see the FLUID Kitchen Sink - this is a playground for testing FLUID components ' +
      'during development.'
  ),
  image({ src: './assets/kitchen-sink.png' }, { sm: 12, md: 10, lg: 8 }),
]);
