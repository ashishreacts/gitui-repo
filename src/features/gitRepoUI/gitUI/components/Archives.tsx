import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { TimelineData } from "./TimelineData";

export const Archives = () => {
  return (
    <Card>
      <CardHeader title={<Typography variant="h6">Archives</Typography>} />
      <CardContent>
        <TimelineData />
      </CardContent>
    </Card>
  );
};
