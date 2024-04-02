import { LocalOffer } from "@mui/icons-material";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const TagsData = () => {
  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h6">
            <LocalOffer sx={{ verticalAlign: "middle" }} />
            Open-Source 1
          </Typography>
        }
      />
      <CardContent>
        <Box display="flex" alignItems="center">
          <Link to="/tags/tagsdata/opensource">
            My Open Source Contributions
          </Link>
          <Box
            borderBottom="1px dotted"
            flex="1"
            marginLeft={2}
            marginRight={2}
          />
          <Typography>Feb 10, 2024</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
