import { ContentLayout } from "@/components/Layout";
import { Grid } from "@mui/material";
import { Home } from "../components/Home";

export const GitRepoUI = () => {
  return (
    <ContentLayout title="">
      <Grid container marginTop={0.5} spacing={2}>
        <Grid item xs={12} md={10}>
          <Home />
        </Grid>
      </Grid>
    </ContentLayout>
  );
};
