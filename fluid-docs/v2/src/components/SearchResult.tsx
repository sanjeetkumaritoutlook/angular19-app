import { FluidContainer, FluidText, FluidTitle } from '@lmig/fluid-react-utils';

interface SearchResultProps {
  id: string;
  title: string;
  url: string;
  lastUpdated: string;
  excerpt: string;
}
export default function SearchResult(props: SearchResultProps) {
  const { title, url, lastUpdated, excerpt, id } = props;
  return (
    <FluidContainer key={id}>
      <FluidTitle level={'3'} disableGutters={true}>
        {title}
      </FluidTitle>
      <FluidText muted={true} disableGutters={true}>
        {excerpt}
      </FluidText>
    </FluidContainer>
  );
}
