import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const GitBreadCrumb = () => {
  return (
    <Box>
      <Breadcrumbs separator=">>" aria-label="breadcrumb">
        <Link color="inherit" to="/openSource">
          Home
        </Link>

        <Typography color="text.primary">
          My open Source Contribution
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};
