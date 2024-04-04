import { ContentLayout } from "@/components/Layout";
import { TagsContent } from "../components/TagsContent";
import { Grid } from "@mui/material";

const Tags = () => {
  return (
    <ContentLayout title="">
      <Grid container marginTop={0.5} spacing={2}>
        <Grid item xs={12} md={10}>
          <TagsContent />
        </Grid>
      </Grid>
    </ContentLayout>
  );
};

export default Tags;
