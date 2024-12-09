import {
  FluidAnchorPosition,
  FluidButton,
  FluidButtonType,
  FluidDrawer,
  FluidLanguage,
  FluidTitle,
} from '@lmig/fluid-react-utils';

interface AppSettingsProps {
  currentLanguage: FluidLanguage;
  setCurrentLanguage: any;
  settingsOpen: boolean;
  setSettingsOpen: (open: boolean) => void;
}
export default function AppSettings(props: AppSettingsProps) {
  const { currentLanguage, setCurrentLanguage, settingsOpen, setSettingsOpen } =
    props;
  return (
    <FluidDrawer
      visible={settingsOpen}
      anchor={FluidAnchorPosition.RIGHT}
      onDrawerToggled={setSettingsOpen}
    >
      <FluidTitle level={'2'}>Choose Language</FluidTitle>
      <FluidButton
        type={
          currentLanguage === FluidLanguage.ENGLISH
            ? FluidButtonType.PRIMARY
            : FluidButtonType.SECONDARY
        }
        label={'English'}
        onClick={() => setCurrentLanguage(FluidLanguage.ENGLISH)}
      />
      <FluidButton
        type={
          currentLanguage === FluidLanguage.SPANISH
            ? FluidButtonType.PRIMARY
            : FluidButtonType.SECONDARY
        }
        label={'Spanish'}
        onClick={() => setCurrentLanguage(FluidLanguage.SPANISH)}
      />
      <FluidButton
        type={
          currentLanguage === FluidLanguage.FRENCH
            ? FluidButtonType.PRIMARY
            : FluidButtonType.SECONDARY
        }
        label={'French'}
        onClick={() => setCurrentLanguage(FluidLanguage.FRENCH)}
      />
    </FluidDrawer>
  );
}
