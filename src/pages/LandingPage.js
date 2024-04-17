import { styled } from '@mui/material';

import Page from '../components/Page';
import {
  LandingHero,
  LandingMinimal,
  LandingPricingPlans,
  LandingAdvertisement,
  LandingCleanInterfaces,
  LandingHugePackElements
} from '../components/_external-pages/landing';

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

export default function LandingPage() {
  return (
    <RootStyle  id="move_top">
      <LandingHero />
      <ContentStyle>
      <LandingPricingPlans />
        <LandingMinimal />
        <LandingHugePackElements />
        <LandingCleanInterfaces />
        <LandingAdvertisement />
      </ContentStyle>
    </RootStyle>
  );
}
