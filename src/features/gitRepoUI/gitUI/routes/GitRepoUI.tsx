import { ContentLayout } from "@/components/Layout";
import { GitBreadCrumb } from "../components/GitBreadCrumb";
import { Home } from "../components/Home";
import { OpenSource } from "../components/OpenSource";
import { Grid, Stack } from "@mui/material";

export const GitRepoUI = () => {
  return (
    <ContentLayout title="">
      <GitBreadCrumb />
      <Grid container marginTop={0.5} spacing={2}>
        <Grid item xs={12} md={10}>
          <Stack direction="column" spacing={2}>
            <Home />
            <OpenSource />
          </Stack>
        </Grid>
      </Grid>
    </ContentLayout>
  );
};
