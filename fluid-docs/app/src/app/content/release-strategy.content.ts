import { Joe, section, text } from './content.utils';
import { FluidPageSectionStyle } from '../model/fluid-docs-content.interface';

export const releaseStrategyContent = () => ({
  pageTitle: 'Test & Release Strategy',
  pageAuthor: Joe,
  sectionStyle: FluidPageSectionStyle.TABS,
  pageIntroduction: [
    text(
      "FLUID is a runtime library, which delivers many benefits that we don't get with traditional build-time libraries, however, it also " +
        'comes with a potential amount of risk, as we deliver more great features in realtime to your applications.'
    ),
    text(
      'In order to mitigate that risk, we strive to ensure that all changes to existing components are non-breaking, and fully backward compatible.'
    ),
    text(
      'Additionally, we go through a delivery process designed to ensure we catch any regression or unexpected side effects before we release any ' +
        'features or updates;'
    ),
  ],
  lastUpdated: new Date('2022-01-05'),
  sections: [
    section('Comprehensive Unit Testing', [
      text(
        'Before a component is enhanced, or a bug is fixed, we ensure there is a comprehensive suite of unit tests in place. These tests test-data not only ' +
          'the logical behaviour of a component, but also how it renders under various conditions.'
      ),
      text(
        'We then begin to write tests for the new behaviour, or the fixed bug. This forces us to think the enhancement through to its end-state, and ' +
          'provides us with the test-data-driven basis from which to begin writing our code. Only by knowing how the component <strong>should</strong> function, can we ' +
          'truly ensure our code is written to behave that way.'
      ),
      text(
        'Once we have created a new suite of tests for the new behaviour, we enhance the component/fix the bug, and ensure that our tests pass - both functionally, ' +
          "and visually, using spec pages and Jest. This not only tests that our new code behaves the way we expect, but also tests that we haven't broken anything else, by " +
          'virtue of the existing tests.'
      ),
      text(
        'If a pull request is raised without unit tests, it <strong>will be rejected.</strong>'
      ),
    ]),
    section('Browser Visual Testing', [
      text(
        'Next, we load up our component in each of the supported browsers (Chrome, Edge and IE11) and do a visual and functional check of each component state.'
      ),
      text(
        'For each component, we have a set of examples, which provide various property combinations to the component, which cause it to have multiple states which ' +
          'we check visually, and functionally by hand. This allows us to test-data that it looks and behaves consistently in each of the browsers, and helps avoid any browser-specific ' +
          'gotchas (looking at you IE... 👀)'
      ),
      text(
        "Once we've done our manual checks, we take screenshots of each state, in each browser, and attach them to the pull request for th feature/bug-fix. This allows " +
          'the rest of the core team the opportunity to do a visual sanity check on the states, as well as reviewing the code.'
      ),
      text(
        'If a pull request is raised without screenshots, it <strong>will be rejected.</strong>'
      ),
    ]),
    section('Programmatic Screenshot Comparisons', [
      text(
        'Whilst checking component rendering by hand is useful, we recognise that it is subject to human error (unlikely, given the eyes we get on it), so we have recently ' +
          'begun work on implementing visual screenshot diffs using <fluid-link inline link="https://github.com/GoogleChrome/puppeteer">Puppeteer</fluid-link> and <fluid-link inline ' +
          'link="https://stenciljs.com/api-docs/screenshot-visual-diff">Stencil</fluid-link> to programmatically create and store screenshots of the rendered components.'
      ),
      text(
        'Each time we create a new component, enhancement or bugfix, the automated tests will render the components, take a screenshot, and do a programmatic comparison ' +
          "which will highlight differences within a mismatched pixel ratio. If it is above a certain threshold, it'll fail the test-data, and thus, the build."
      ),
      text(
        'If a change changes the visual state beyond our configured threshold, without manual intervention (i.e - we intended to change the visual state), then it <strong>' +
          'will not be released.</strong>'
      ),
    ]),
    section('Complex Usecase Examples', [
      text(
        'Everything up to this point has focussed on testing a component in isolation. How it looks, and behaves under a controlled set of conditions, ' +
          "unaffected by anything else around it. This is a great starting point to ensure that our component maintains its integrity, however, it doesn't factor " +
          'in complexity introduced from other components, or that it introduces on them.'
      ),
      text(
        "For example, we've tested an alert - how it looks under each severity, with each prop combination, in each browser. But, how does it behave " +
          "when it's in a table cell? Or inside a modal? Does it render in the right place? Does it throw the alignment of surrounding components off?"
      ),
      text(
        "We won't know the answer to these questions until it's in use in an application. Aside from demonstrating how to do certain things, it is for " +
          'this very reason that we create complex usecase examples for our components.'
      ),
      text(
        "FLUID was created by developers, for developers, so we know the common usecases our components will be used in. We've been there, using these " +
          'patterns before FLUID. We believe the best way to truly test-data how our components will behave in these situations is to use them to create our advanced examples.'
      ),
      text(
        "We've seen patterns like opening a modal, by clicking an icon, in a table cell. So, we create an advanced example of how to do just that. This lets " +
          "us test-data how the FLUID modal behaves, after a FLUID icon is clicked, in a FLUID table. We know that tables usually have alerts above them if there's an error, " +
          'so we create an example like that. From that we can see how the FLUID alert affects the alignment of the FLUID table, etc.'
      ),
      text(
        'This also means that those situations are already reasoned about in FLUID, and we provide the code samples that you can just lift and shift into your ' +
          'application to provide the same functionality. Win.'
      ),
    ]),
    section('Crowdsourced Non-Prod Release', [
      text(
        'The penultimate piece of the release strategy puzzle is where you come in, our trusty consumers.'
      ),
      text(
        'Before we release <strong>anything</strong> to production, it goes into our non-prod environment first for a period of time, depending on ' +
          'complexity. This is usually one full working week, although we may extend that for really complex features.'
      ),
      text(
        'This time in non-prod allows us to verify that the updates are working as expected in live applications, due to the runtime nature of FLUID. ' +
          'Once we deploy the updates, all the live (non-prod) applications receive those updates, and we can check there are no side-effects in the applications ' +
          'we know are using it.'
      ),
      text(
        "But, there are also a lot of applications out there using FLUID that we either aren't aware of, or don't know the expected functionality " +
          "well enough to know if we've affected anything there, which is why we rely on the FLUID community to alert us if something has regressed, or introduced an undesired behaviour."
      ),
      text(
        'If an update to FLUID has caused a regression, please let us know via the <fluid-link inline ' +
          'link="https://teams.microsoft.com/l/team/19%3af561e80a0a97454393d7dcd83ac9a3cb%40thread.tacv2/conversations?groupId=7b0ae77e-3119-488d-9a59-62bc1c31a592&tenantId=' +
          '08a83339-90e7-49bf-9075-957ccd561bf1">FLUID Support Channel</fluid-link> in Teams so we can address it.'
      ),
    ]),
    section('Release Verification', [
      text(
        'And finally, once all of these stages of verification are complete and the feature has been in non-prod with no side-effects for the allocated ' +
          'time period, we can release it to production.'
      ),
      text(
        'FLUID production releases are deployed in the early hours of the UK morning, typically around 4.00am (GMT). This affords our UK based developers ' +
          'the time to verify the release in production before the US wakes up.'
      ),
      text(
        'If anything at all is amiss, or even slightly out of place, the release is rolled back immediately, addressed, and this release strategy is started ' +
          'all over again to ensure that everything that goes live in production is the absolute best product it can be.'
      ),
    ]),
  ],
});
