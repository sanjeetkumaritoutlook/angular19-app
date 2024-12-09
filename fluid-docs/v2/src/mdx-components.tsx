import type { MDXComponents } from 'mdx/types';
import {
  FluidCard,
  FluidCodeBlock,
  FluidDivider,
  FluidImage,
  FluidLink,
  FluidLinkTarget,
  FluidText,
  FluidTitle,
} from '@lmig/fluid-react-utils';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // @ts-ignore
  return {
    p: (props) => <FluidText>{props.children}</FluidText>,
    h1: (props) => <FluidTitle level={'1'}>{props.children}</FluidTitle>,
    h2: (props) => <FluidTitle level={'2'}>{props.children}</FluidTitle>,
    h3: (props) => <FluidTitle level={'3'}>{props.children}</FluidTitle>,
    h4: (props) => <FluidTitle level={'4'}>{props.children}</FluidTitle>,
    h5: (props) => <FluidTitle level={'5'}>{props.children}</FluidTitle>,
    h6: (props) => <FluidTitle level={'6'}>{props.children}</FluidTitle>,
    a: (props) => (
      <FluidLink href={props.href} target={FluidLinkTarget.SELF} inline={true}>
        {props.children}
      </FluidLink>
    ),
    img: (props) => <FluidImage src={props.src} altText={props.alt} />,
    Image: (props) => <FluidImage {...props} />,
    Card: (props) => (
      <FluidCard
        cardTitle={props.title}
        removeHeaderBorder={true}
        collapsible={false}
      >
        {props.children}
      </FluidCard>
    ),
    hr: (props) => <FluidDivider />,
    code: (props) => (
      <FluidCodeBlock
        noContainer={true}
        code={props.children as string}
      ></FluidCodeBlock>
    ),
    ...components,
  };
}
