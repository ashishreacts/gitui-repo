import {
  Card,
  CardContent,
  CardHeader,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";
import { SkillList } from "./SkillList";

export const AboutContent = () => {
  return (
    <Card>
      <CardHeader title={<Typography variant="h4">About</Typography>} />
      <CardContent>
        <ImageList cols={1}>
          <ImageListItem>
            <img
              srcSet="https://gambitier.github.io/assets/img/about/akash.jpg"
              src="https://gambitier.github.io/assets/img/about/akash.jpg"
              alt="akash"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="body1" textAlign="justify">
          <p>
            Hello, I'm Akash Jadhv, an accomplished Software Engineer with a
            solid foundation in the field of Information Technology. I have a
            passion for delving deep into technology, understanding it at its
            core, and leveraging that knowledge to create innovative solutions.
            My commitment to excellence is evident in my contributions to
            open-source projects, detailed in this blog post.
          </p>
          <p>
            As a software craftsman, I pride myself on implementing best
            practices and adhering to idiomatics of programming language. I
            prioritize writing maintainable, clean code that not only meets
            current project needs but also stands the test of time. My aim is to
            deliver solutions that not only solve problems but also elevate the
            overall quality of the codebase.
          </p>
          <p>
            Ready to embark on this tech journey with me? Let's dive in! For
            collaboration or any queries, feel free to reach out to me.
          </p>
          <ul>
            <li>
              Email: <Link>akash.jadhav.cse@gmail.com </Link>
            </li>
            <li>
              Resume: <Link>Explore my professional background here</Link>
            </li>
          </ul>
        </Typography>
      </CardContent>

      <CardHeader title={<Typography variant="h5">Skills</Typography>} />
      <CardContent>
        <SkillList />
      </CardContent>
    </Card>
  );
};
