/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";

import { Box } from "@mui/material";
Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  return (
    <Box>
      <img src="static/home/logo.svg" style={{ width: 150 }} />
    </Box>
  );
}
