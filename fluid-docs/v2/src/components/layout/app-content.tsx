import {
  FluidInPageNavConfig,
  FluidPage,
  FluidThemeVariant,
} from '@lmig/fluid-react-utils';
import { FluidMenuItem, FluidSidebarConfig } from '@lmig/fluid-core';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';

interface AppContentProps {
  sidebarConfig: FluidSidebarConfig | undefined;
  children: any;
  inPageNavConfig?: FluidInPageNavConfig;
}
export default function AppContent(props: AppContentProps): React.JSX.Element {
  const { sidebarConfig, children, inPageNavConfig } = props;
  const router: NextRouter = useRouter();
  return (
    <FluidPage
      themeVariant={FluidThemeVariant.ATMOSPHERIC}
      leftSidebarConfig={sidebarConfig}
      inPageNavConfig={inPageNavConfig}
      onSidebarLinkClicked={(menuItem: FluidMenuItem) =>
        router.replace(menuItem.route as string)
      }
    >
      {children}
    </FluidPage>
  );
}

export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  // Pass data to the page via props
  return { props: { repo } };
};
