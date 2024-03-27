import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

export const GitBreadCrumb = () => {
  return (
    <Box>
      <Breadcrumbs separator=">>" aria-label="breadcrumb">
        <Link underline="hover" color="inherit">
          Home
        </Link>
        <Typography color="text.primary">
          My open Source Contribution
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};
