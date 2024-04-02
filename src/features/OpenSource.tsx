import {
  Box,
  Card,
  CardContent,
  CardHeader,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";

export const OpenSource = () => {
  const sourceData = [
    {
      title: "Zod Extras",
      desc: "Zod Extras is an extension that provides additional functionality on top of the Zod framework.",
      issue: "Issues",
      issueTitle: "1. toNumber Preprocessor Converts Empty String to 0",
      issueDesc:
        "• Description: Reported an issue where the to Number Preprocessor wasconverting an empty string to 0.",
    },
    {
      title: "REANCare Service",
      desc: "REANcare Service is the primary healthcare backend API for REAN Foundation's healthcare software ecosystem.",
      issue: "Issues",
      issueTitle: "1. Incorrect Method Call for Fetching User with Email",
      issueDesc:
        "• Description: Reported an issue related to an incorrect method call when fetching a user with email.",
    },
    {
      title: "Serilog.Sinks.Postgresql.Alternative",
      desc: "Serilog Sinks Postgresql Alternative is library that facilitates saving logging information from Serilog to PostgreSQL.",
      issue: "Issues",
      issueTitle:
        "1. Fix Docs to Resolve 'Unable to Find a Method Called PostgreSqi'",
      issueDesc:
        "• Description: Description: Reported an issue and provided a solution to resolve the error 'Unable to find a method called PostgreSql' in the documentation",
    },
    {
      title: " Django",
      desc: "is high-level Python web framework known for encouraging rapid development and clean, pragmatic design.",
      issue: "Issues",
      issueTitle: "1. Fix docs-Integrity Error: NOT NULL, Constraint Failed",
      issueDesc:
        "• Description: Reported a documentation-related issue regarding an integrityError related to a NOT NULL constraint failure.",
    },
  ];
  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h6">My Open Source Contributions</Typography>
        }
      />
      <CardContent>
        <Stack direction="column">
          <Typography variant="subtitle1">
            Posted Feb 10, 2024 By Akash Jadhav
          </Typography>
          <Typography variant="subtitle1">By Akash Jadhav</Typography>
          <ImageList cols={1}>
            <ImageListItem>
              <img src="https://ghchart.rshah.org/gambitier" />
            </ImageListItem>
          </ImageList>
          <Typography>
            Embarking on the journey of open source contributions has been an
            exhilarating experience for me. In this blog post, I'll share some
            highlights of my recent contributions to various projects that
            resonate with my passion for technology and collaboration.
          </Typography>
        </Stack>
      </CardContent>
      <CardHeader
        title={<Typography variant="h6">Elsa Workflows</Typography>}
      />
      <CardContent>
        <Typography>
          Elsa is a robust workflow library designed for executing workflows
          within any.NET application. It provides flexibility in defining
          workflows through C# code, a visual designer, or specifying workflows
          in JSON format.
        </Typography>
      </CardContent>
      <CardHeader title={<Typography variant="h6">Pull Requests</Typography>} />
      <CardContent>
        <Typography variant="h6">
          1. Allow Database Schema Names to be Editable
        </Typography>
        <Typography>
          • Description: This contribution introduces the capability to edit
          database schema names within Elsa.
        </Typography>
        <Typography variant="h6">2. MySQL Support</Typography>
        <Typography>
          • Description: Added support for MySQL, enhancing the compatibility of
          Elsa workflows.
        </Typography>
        <Typography variant="h6">
          3. Docker Image: Configurable CORS Policy
        </Typography>
        <Typography>
          • Description: Implemented a feature to make CORS policy in the Docker
        </Typography>
      </CardContent>
      {sourceData.map((data, index) => (
        <Box key={index}>
          <CardHeader
            title={<Typography variant="h6">{data.title}</Typography>}
          />
          <CardContent>
            <Typography>{data.desc}</Typography>
            <Typography variant="subtitle1">{data.issue}</Typography>
            <Typography variant="h6">{data.issueTitle}</Typography>
            <Typography>{data.issueDesc}</Typography>
          </CardContent>
        </Box>
      ))}
    </Card>
  );
};
