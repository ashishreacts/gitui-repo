import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

export const Tags = () => {
  return (
    <Card>
      <CardHeader title={<Typography variant="h6"> Tags</Typography>} />
      <CardContent>
        <Button variant="outlined">
          <Typography>open-source 1</Typography>
        </Button>
      </CardContent>
    </Card>
  );
};
