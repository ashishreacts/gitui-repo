import { ContentLayout } from "@/components/Layout";
import { Grid, Stack } from "@mui/material";
import { Home } from "../components/Home";

export const GitRepoUI = () => {
  return (
    <ContentLayout title="">
      <Grid container marginTop={0.5} spacing={2}>
        <Grid item xs={12} md={10}>
          <Stack direction="column" spacing={2}>
            <Home />
          </Stack>
        </Grid>
      </Grid>
    </ContentLayout>
  );
};
