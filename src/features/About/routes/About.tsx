import { ContentLayout } from "@/components/Layout";
import { AboutContent } from "../components/AboutContent";
import { Grid } from "@mui/material";

const About = () => {
  return (
    <ContentLayout title="">
      <Grid container marginTop={0.5} spacing={2}>
        <Grid item xs={12} md={10}>
          <AboutContent />
        </Grid>
      </Grid>
    </ContentLayout>
  );
};

export default About;
