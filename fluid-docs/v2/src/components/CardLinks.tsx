import {
  FluidCard,
  FluidContainer,
  FluidGrid,
  FluidGridItem,
  FluidImage,
} from '@lmig/fluid-react-utils';
import React from 'react';

export default function CardLinks() {
  return (
    <FluidContainer>
      <FluidContainer width={'50%'} padding={'0 1em 0 0'} inline={true}>
        <FluidCard></FluidCard>
      </FluidContainer>
      <FluidContainer width={'50%'} padding={'0 0 1em 0'} inline={true}>
        <FluidCard></FluidCard>
      </FluidContainer>
    </FluidContainer>
  );
}
