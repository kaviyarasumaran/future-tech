import PropTypes from 'prop-types';

import { alpha, useTheme, styled } from '@mui/material';
import { Box, Grid, Paper, Rating, Container, Typography, useMediaQuery } from '@mui/material';
//
import { varFadeInUp, MotionInView } from '../../animate';
import { MHidden } from '../../@material-extend';

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    name: 'Ragul A',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `Excellent Work! Thanks a lot!`
  },
  {
    name: 'Priya R',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `Future Tech Educational Consultancy's expert guidance secured my spot in a top Tamil Nadu college with an affordable fee structure. Their personalized counseling and invaluable scholarship assistance made all the difference.`
  },
  {
    name: 'Kavin R',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `Future Tech Educational Consultancy helped me secure admission to my dream college with exceptional support and guidance!`
  },
  {
    name: 'Subha sri K',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `Future Tech Educational Consultancy's expert guidance and support ensured my admission to a top Tamil Nadu college, with invaluable counseling and scholarship assistance.`
  },
  {
    name: 'Jeeva S',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `Future Tech Educational Consultancy played a crucial role in securing my admission to a top Tamil Nadu college, offering invaluable personalized counseling and scholarship support.`
  },
  {
    name: 'Janani S',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `Thanks to Future Tech Educational Consultancy, I secured admission in a top Tamil Nadu college with affordable fees. Their personalized counseling and scholarship assistance were invaluable.`
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  backgroundSize: 'cover',
  backgroundImage: `linear-gradient(to right, ${alpha(theme.palette.grey[900], 0.8)} , ${alpha(
    theme.palette.grey[900],
    0.8
  )}), url(/static/about/testimonials.jpg)`,
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    padding: 0,
    height: 840,
    overflow: 'hidden'
  }
}));

// ----------------------------------------------------------------------

TestimonialCard.propTypes = {
  testimonial: PropTypes.object
};



function TestimonialCard({ testimonial }) {
  const { name, rating, dateCreate, content } = testimonial;
  return (
    <Paper
      sx={{
        mt: 3,
        p: 3,
        color: 'common.white',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)', // Fix on Mobile
        bgcolor: (theme) => alpha(theme.palette.common.white, 0.04)
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>
      <Typography gutterBottom component="p" variant="caption" sx={{ color: 'grey.500' }}>
        {dateCreate}
      </Typography>
      <Rating value={rating} readOnly size="small" />
      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {content}
      </Typography>
    </Paper>
  );
}

export default function AboutTestimonials() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: '100%' }}
        >
          <Grid item xs={10} md={4}>
            <Box sx={{ maxWidth: { md: 360 } }}>
              <MotionInView variants={varFadeInUp}>
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
                  Testimonials
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'common.white' }}>
                Hear from Our  <br />
                Students
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography sx={{ color: 'common.white' }}>
                Future Tech Educational Consultancy transformed my educational journey with their expert guidance and unwavering support. I owe my success to their personalized counseling and invaluable assistance.
                </Typography>
              </MotionInView>

            
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            lg={6}
            sx={{
              right: { md: 24 },
              position: { md: 'absolute' }
            }}
          >
            <Grid container spacing={isDesktop ? 3 : 0} alignItems="center">
              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                  <MotionInView key={testimonial.name} variants={varFadeInUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </MotionInView>
                ))}
              </Grid>

              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(3, 6).map((testimonial) => (
                  <MotionInView key={testimonial.name} variants={varFadeInUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </MotionInView>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
