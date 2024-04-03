import { ContentLayout } from "@/components/Layout";
import { ArchivesContent } from "../components/ArchivesContent";
import { Grid } from "@mui/material";

const Archives = () => {
  return (
    <ContentLayout title="">
      <Grid container marginTop={0.5} spacing={2}>
        <Grid item xs={12} md={10}>
          <ArchivesContent />
        </Grid>
      </Grid>
    </ContentLayout>
  );
};

export default Archives;
