// material
import { styled } from '@mui/material';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {ArtsHero, ArtsCategory, ArtsList, ArtsForm, ArtsElement } from '../components/_external-pages/arts';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Arts() {
  return (
    <RootStyle title="Arts | Minimal-UI">
      <ArtsHero />
        <ArtsElement />
      <Container sx={{ mt: 15, mb: 10 }}>
        <ArtsCategory />

        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>

        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <ArtsList />
          </Grid>
          <Grid item xs={12} md={6}>
            <ArtsForm />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}