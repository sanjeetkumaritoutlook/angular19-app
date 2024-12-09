import { useCustomElementRef } from '@lmig/fluid-react-utils';

interface FluidUsageExample {
  name: string;
  element: string;
  container?: string;
  props: {}[];
  events: string[];
  sanitised?: any;
  children?: any[];
  content?: any;
  toggles?: any[];
  definition?: any;
}

interface UsageExampleProps {
  example: FluidUsageExample;
  component: any;
}
export default function UsageExample(props: UsageExampleProps) {
  const { example, component } = props;
  const ref = useCustomElementRef(
    {},
    {
      definition: toComponentDefinition(example, component),
    }
  );
  return <fluid-component-preview key={example.name} ref={ref} />;
}

function toComponentDefinition(example: any, component: any) {
  return {
    component: example.container || component.tag,
    props: example.props,
    events: example.events,
    children: example.children,
    content: example.content,
    toggles: example.toggles,
  };
}
