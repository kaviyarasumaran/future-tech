// material
import { styled } from '@mui/material';
import {  Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { GuidanceHero, GuidanceCategory, GuidanceList} from '../components/_external-pages/Guidance';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Guidance() {
  return (
    <RootStyle title="Guidance | Minimal-UI">
      <GuidanceHero />
      <Container sx={{ mt: 15, mb: 10 }}>
        <GuidanceCategory />
        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>
            <GuidanceList />
      </Container>

    </RootStyle>
  );
}
