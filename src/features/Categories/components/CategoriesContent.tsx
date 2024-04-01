import { Folder } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export const CategoriesContent = () => {
  return (
    <Card>
      <CardHeader title={<Typography variant="h4">Categories</Typography>} />
      <CardContent>
        <Typography>
          <Folder sx={{ verticalAlign: "middle" }} />
          Open Folder
        </Typography>
      </CardContent>
    </Card>
  );
};
