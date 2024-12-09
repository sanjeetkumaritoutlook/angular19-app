export const roadmapFaqs = () => [
  {
    question:
      "How is this system going to be made flexible enough to support everyone's needs?",
    answer:
      "The system is designed to grow as use-cases become more apparent. As the library is a runtime dependency, any updates or additional features will be available as soon as the main library project is deployed. In our suite of applications there are few use-cases which aren't repeatable elsewhere, so we actively encourage developers to submit pull-requests with enhancements which everyone can benefit from.",
  },
  {
    question: 'Did we explore options with https://designsystem.lmig.com?',
    answer:
      "We have worked with multiple groups during the development of FLUID. http://designsystem.lmig.com is a GRM specific design system which wouldn't be owned and managed by GRS, is compatible with React only and is a build-time dependency. Any updates to the system would require a dependency update and redeploy of any applications using it. FLUID is compatible with any framework, is a runtime-dependency (updates to the system are propagated to apps using it without a redeploy), and supports multiple styles, Legacy CI and LM Brand.",
  },
  {
    question: 'Can these components be dropped into existing UI projects?',
    answer:
      "Yes. Once you have integrated the library for your application flavor (see 'Getting Started') section, you can start using the components right away. Checkout out the component API api-docs to get examples of usage.",
  },
  {
    question:
      'Are there plans to get all the components from the old UX design system into FLUID?',
    answer:
      'Yes, over the coming weeks, we expect to get all the components from the old UX design system migrated to FLUID and ready for use in your applications.',
  },
];
