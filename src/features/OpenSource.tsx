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
import ReactMarkdown from "react-markdown";

const MarkdownTypography = ({ children }) => {
  return <Typography>{children}</Typography>;
};

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
          <MarkdownTypography>My Open Source Contributions</MarkdownTypography>
        }
      />
      <CardContent>
        <Stack direction="column">
          <MarkdownTypography>
            Posted Feb 10, 2024 By Akash Jadhav
          </MarkdownTypography>
          <MarkdownTypography>By Akash Jadhav</MarkdownTypography>
          <ImageList cols={1}>
            <ImageListItem>
              <img
                src="https://ghchart.rshah.org/gambitier"
                alt="GitHub chart"
              />
            </ImageListItem>
          </ImageList>
          <MarkdownTypography>
            Embarking on the journey of open source contributions has been an
            exhilarating experience for me. In this blog post, I'll share some
            highlights of my recent contributions to various projects that
            resonate with my passion for technology and collaboration.
          </MarkdownTypography>
        </Stack>
      </CardContent>
      <CardHeader
        title={<MarkdownTypography>Elsa Workflows</MarkdownTypography>}
      />
      <CardContent>
        <MarkdownTypography>
          Elsa is a robust workflow library designed for executing workflows
          within any.NET application. It provides flexibility in defining
          workflows through C# code, a visual designer, or specifying workflows
          in JSON format.
        </MarkdownTypography>
      </CardContent>
      <CardHeader
        title={<MarkdownTypography>Pull Requests</MarkdownTypography>}
      />
      <CardContent>
        <MarkdownTypography>
          1. Allow Database Schema Names to be Editable
        </MarkdownTypography>
        <MarkdownTypography>
          • Description: This contribution introduces the capability to edit
          database schema names within Elsa.
        </MarkdownTypography>
        <MarkdownTypography>2. MySQL Support</MarkdownTypography>
        <MarkdownTypography>
          • Description: Added support for MySQL, enhancing the compatibility of
          Elsa workflows.
        </MarkdownTypography>
        <MarkdownTypography>
          3. Docker Image: Configurable CORS Policy
        </MarkdownTypography>
        <MarkdownTypography>
          • Description: Implemented a feature to make CORS policy in the Docker
        </MarkdownTypography>
      </CardContent>
      {sourceData.map((data, index) => (
        <Box key={index}>
          <CardHeader
            title={<MarkdownTypography>{data.title}</MarkdownTypography>}
          />
          <CardContent>
            <MarkdownTypography>{data.desc}</MarkdownTypography>
            <MarkdownTypography>{data.issue}</MarkdownTypography>
            <MarkdownTypography>{data.issueTitle}</MarkdownTypography>
            <ReactMarkdown>{data.issueDesc}</ReactMarkdown>
          </CardContent>
        </Box>
      ))}
    </Card>
  );
};
