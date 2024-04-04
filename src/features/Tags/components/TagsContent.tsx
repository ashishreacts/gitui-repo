import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const TagsContent = () => {
  const navigate = useNavigate();

  const nextPageHandler = () => {
    navigate("/tags/tagsdata");
  };
  return (
    <Card>
      <CardHeader title={<Typography variant="h6"> Tags</Typography>} />
      <CardContent>
        <Button variant="outlined" onClick={nextPageHandler}>
          <Typography>open-source 1</Typography>
        </Button>
      </CardContent>
    </Card>
  );
};
