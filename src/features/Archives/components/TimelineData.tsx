import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const TimelineData = () => {
  const navigate = useNavigate();

  const nextPageHandler = () => {
    navigate("/archives/opensource");
  };
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.1,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <Typography>2024</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <Typography>Feb 10</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Button variant="text" onClick={nextPageHandler}>
            My Open Source Contributions
          </Button>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
