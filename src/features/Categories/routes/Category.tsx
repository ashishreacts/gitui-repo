import { ContentLayout } from "@/components/Layout";
import { CategoriesContent } from "../components/CategoriesContent";
import { Grid } from "@mui/material";

const Category = () => {
  return (
    <ContentLayout title="">
      <Grid container marginTop={0.5} spacing={2}>
        <Grid item xs={12} md={10}>
          <CategoriesContent />
        </Grid>
      </Grid>
    </ContentLayout>
  );
};

export default Category;
