export const architectureFaqs = () => [
  {
    question:
      'Can you customise components, like a panel that can be expanded/collapsed, vs a panel that cannot be expanded/collapsed? Will we be able to pass configuration options to components to meet different needs? ',
    answer:
      'Yes - We have conducted an extensive audit of UI component usage within our apps, and have provided configuration options to allow them to be customised to fit the individual use-case, whilst still maintaining consistency across the applications. As more use-cases become apparent, we will add configuration options where applicable.',
  },
  {
    question:
      'What sort of safeguards are in place to ensure any additions will remain compatible with all frameworks/browsers we use?',
    answer:
      'For any Pull Requests, we expect to see screenshots of the new / updated component in both Chrome and IE11 to ensure the component has been tested in both browsers. We are also in the process of implementing cypress testing to help ensure our components look and behave as they should across various browsers.',
  },
  {
    question:
      'How will this handle different environments? e.g updates we want in lower environments, we may not want in upper environments?',
    answer:
      'There are dev, test-data, and production environments for FLUID which mirror application environments. In addition, we also have a sandbox environment in order to deploy and test-data a feature branch.',
  },
  {
    question: 'What happens if breaking changes are introduced to a component?',
    answer:
      "With the current processes in place, it is unlikely that this will occur. Unless there are changes in a component's API nothing should break. Component testing of the API will also catch any potentially breaking changes. As part of the review process we also would like to see screenshots of the component in different browsers, namely Chrome and IE11. In addition, if the scenario in which a breaking change did get merged to develop, the issue would quickly become apparent in the non-prod environment in any app that is using that particular FLUID component.",
  },
  {
    question:
      'Does this use Bootstrap under the hood, or have we created our own responsive framework?',
    answer:
      "No, FLUID has its own grid component (see fluid-grid in the 'Developer Contribution' components section.",
  },
  {
    question:
      'Does this introduce a single point of failure that can take all applications down?',
    answer:
      'FLUID is hosted in s3 and is accessed via a UI Gateway. AWS S3 is a widely used approach for storage infrastructure, from data to website hosting. AWS state that s3 is designed for 99.99% availability so it is unlikely that s3 will be down. If the UI Gateway is down, no UI application will be accessible.',
  },
  {
    question: 'How does FLUID support or follow accessibility measures?',
    // tslint:disable-next-line:max-line-length
    answer:
      'A majority of FLUID components follow the guidelines for WCAG 2.1 where applicable with updates released often. Measures ' +
      'including use of Color, Contrast, Spacing, keyboard navigation and labelling among other measures are reviewed when designing ' +
      'and delivering each component. While we are committed to ensuring that our code and components allow for the latest A11y ' +
      'checklists, it is up to the designers, developers and teams to ensure that their pages and layouts follow the guidelines ' +
      'outlined on the LibertyMutualBrand.com site.',
  },
];
