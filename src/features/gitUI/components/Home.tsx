import { CalendarToday, FolderOpen, PushPin } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const nextPageHandler = () => {
    navigate("/home/opensource");
  };
  return (
    <Card onClick={nextPageHandler} sx={{ cursor: "pointer" }}>
      <CardHeader
        title={
          <Typography variant="h6">My Open Source Contributions</Typography>
        }
      />
      <CardContent>
        <Typography>
          Embarking on the journey of open source contributions has been an
          exhilarating experience for me. In this blog post, I'll share some
          highlights of my recent contributions to various projects that...
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={2}>
            <Typography>
              <CalendarToday sx={{ verticalAlign: "middle" }} />
              Feb 10,2024
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography>
              <FolderOpen sx={{ verticalAlign: "middle" }} />
              Open Source
            </Typography>
          </Grid>
          <Grid
            item
            md={8}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <PushPin />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
