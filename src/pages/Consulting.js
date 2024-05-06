// material
import { styled } from '@mui/material';
import {  Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ConsultingHero, ConsultingCategory, ConsultingList} from '../components/_external-pages/Consulting';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Consulting() {
  return (
    <RootStyle title="Consulting | Minimal-UI">
      <ConsultingHero />
      <Container sx={{ mt: 15, mb: 10 }}>
        <ConsultingCategory />
        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>
            <ConsultingList />
      </Container>

    </RootStyle>
  );
}
