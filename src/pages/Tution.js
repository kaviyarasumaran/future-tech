// material
import { styled } from '@mui/material';
import {  Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { TutionHero, TutionCategory, TutionList} from '../components/_external-pages/Tution';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Tution() {
  return (
    <RootStyle title="Tution | Minimal-UI">
      <TutionHero />
      <Container sx={{ mt: 15, mb: 10 }}>
        <TutionCategory />
        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>
            <TutionList />
      </Container>

    </RootStyle>
  );
}
