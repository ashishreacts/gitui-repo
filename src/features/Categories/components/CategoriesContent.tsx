import { Folder } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CategoriesContent = () => {
  const navigate = useNavigate();

  const nextPageHandler = () => {
    navigate("/category/opensource");
  };
  return (
    <Card>
      <CardHeader title={<Typography variant="h4">Categories</Typography>} />
      <CardContent>
        <Typography>
          <Button
            variant="outlined"
            startIcon={<Folder />}
            onClick={nextPageHandler}
          >
            Open Folder
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
};
