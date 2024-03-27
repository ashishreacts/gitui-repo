import { Head } from "@/components/Head";
import { Box } from "@mui/material";
import React from "react";

// const containerStyle: React.CSSProperties = {
//   backgroundColor: "skyblue",
//   margin: "30px",
// };

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <Box sx={{ marginX: { xs: 1, sm: 4 }, marginY: { xs: 2, sm: 2, md: 4 } }}>
        {children}
      </Box>
    </>
  );
};
