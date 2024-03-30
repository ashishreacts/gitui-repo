import { ArrowRight } from "@mui/icons-material";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
export const SkillList = () => {
  const skilledListItems = [
    {
      title: "Programming Languages",
      items: ["C#", "TypeScript", "JavaScript"],
    },
    {
      title: "Web Frameworks",
      items: ["Asp.net", "Express.js", ["NestJS", "Fastify"]],
    },
    {
      title: "Databases",
      items: ["SQL (MySQL, PostgreSQL, MS SQL Server)", "NoSQL (MongoDb)"],
    },
    {
      title: "ORM Tools",
      items: ["Entity Framework", "Dapper", "Sequelize", "Mongoose", "Prisma"],
    },
    {
      title: "Tools",
      items: ["Git"],
    },
  ];

  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const handleCategoryClick = (index: number) => {
    setExpandedCategory((prevState) => (prevState === index ? null : index));
  };

  return (
    <List component="div" disablePadding>
      {skilledListItems.map((category, index) => (
        <React.Fragment key={index}>
          <ListItem onClick={() => handleCategoryClick(index)}>
            <IconButton edge="start" disableRipple>
              <ArrowRight />
            </IconButton>
            <ListItemText
              primary={<Typography variant="h6">{category.title}</Typography>}
            />
          </ListItem>
          {expandedCategory === index && (
            <List component="div" disablePadding>
              {category.items.map((item, idx) => (
                <ListItem key={idx}>
                  <ListItemText sx={{ ml: 5 }} primary={item} />
                </ListItem>
              ))}
            </List>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};
