import { Icon } from "@iconify/react";
import googleFill from "@iconify/icons-eva/google-fill";
import twitterFill from "@iconify/icons-eva/twitter-fill";
import facebookFill from "@iconify/icons-eva/facebook-fill";
import linkedinFill from "@iconify/icons-eva/linkedin-fill";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material";
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  IconButton,
  Stack,
  Box,
} from "@mui/material";
import { PATH_PAGE } from "../../routes/paths";
import Logo from "../../components/Logo";

const SOCIALS = [
  { name: "FaceBook", icon: facebookFill },
  { name: "Google", icon: googleFill },
  { name: "Linkedin", icon: linkedinFill },
  { name: "Twitter", icon: twitterFill },
];

const LINKS = [
  {
    headline: "SERVICES ",
    children: [
      { name: "Consulting", href: PATH_PAGE.about },
      { name: "Tution", href: PATH_PAGE.faqs },
      { name: "Guidance", href: PATH_PAGE.faqs },
      { name: "Scholarship", href: PATH_PAGE.faqs },
    ],
  },

  {
    headline: "We provides",
    children: [
      { name: "Engineering", href: "#" },
      { name: "Arts & Science", href: "#" },
      { name: "Polytechnic", href: "#" },
      { name: "Agricultural Sciences", href: "#" },
      { name: "Business Management", href: "#" },  
      { name: "Emerging Technologies", href: "#" },

    ],
  },
  {
    headline: "Contact",
    children: [
      { name: "futuretechgudiance@gmail.com", href: "#" },

      {
        name: "Location",
        href: "#",
      },
      {
        name: "Contact: 9789956246",
        href: "#",
      },
    ],
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.background.default,
}));

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <ScrollLink to="move_top" spy smooth>
              <Box sx={{ display: "flex", alignItems: "center"}}>
                <Logo />
              </Box>
            </ScrollLink>
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              "Unlock Your Potential at FutureTech! Explore innovative programs in Engineering, Medical Sciences, Design, Business Management, and more. Join us to shape your future and become a leader in tomorrow's industries"
            </Typography>
            <Stack
              spacing={1.5}
              direction="row"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              {SOCIALS.map((social) => (
                <IconButton key={social.name} color="primary" sx={{ p: 1 }}>
                  <Icon icon={social.icon} width={16} height={16} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
            >
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>
                    <Typography
                      component="p"
                      variant="overline"
                      color={"#8fbf66"}
                    >
                      {headline}
                    </Typography>
                    {children.map((link) => (
                      <Link
                        to={link.href}
                        key={link.name}
                        color="inherit"
                        variant="body2"
                        component={RouterLink}
                        sx={{ display: "block" }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: "center", md: "center" },
          }}
        >
          © 2024. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}
