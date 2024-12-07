export const formsWalkthroughNavigation = () => ({
  overview: {
    previous: undefined,
    next: { label: 'Configuration', route: 'configuration' },
  },
  configuration: {
    previous: { label: 'Overview', route: '' },
    next: { label: 'Layout', route: 'layout' },
  },
  layout: {
    previous: { label: 'Configuration', route: 'configuration' },
    next: { label: 'Events', route: 'events' },
  },
  events: {
    previous: { label: 'Layout', route: 'layout' },
    next: { label: 'Methods', route: 'methods' },
  },
  methods: {
    previous: { label: 'Events', route: 'events' },
    next: { label: 'Validation', route: 'validation' },
  },
  validation: {
    previous: { label: 'Methods', route: 'methods' },
    next: undefined,
  },
});
