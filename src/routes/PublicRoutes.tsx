import { DisplayAboutContent } from "@/features/About";
import { DisplayArchivesContent } from "@/features/Archives";
import { DisplayCategoryContent } from "@/features/Categories";
import { DisplayTagsContent } from "@/features/Tags";
import { CreateGitRepoUI } from "@/features/gitUI";
import { Landing } from "@/features/misc";
import { RouteObject } from "react-router-dom";
import { MainLayoutWrapper } from "./MainLayoutWrapper";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayoutWrapper />,
    children: [{ path: "", element: <CreateGitRepoUI /> }],
  },
  {
    path: "/about",
    element: <MainLayoutWrapper />,
    children: [
      { path: "/about/aboutcontent/*", element: <DisplayAboutContent /> },
    ],
  },
  {
    path: "/archives",
    element: <MainLayoutWrapper />,
    children: [
      {
        path: "/archives/archivescontent/*",
        element: <DisplayArchivesContent />,
      },
    ],
  },
  {
    path: "/category",
    element: <MainLayoutWrapper />,
    children: [
      {
        path: "/category/categorycontent/*",
        element: <DisplayCategoryContent />,
      },
    ],
  },
  {
    path: "/tags",
    element: <MainLayoutWrapper />,
    children: [
      {
        path: "/tags/tagscontent/*",
        element: <DisplayTagsContent />,
      },
    ],
  },

  {
    path: "/landing",
    element: <Landing />,
  },
  // import { AuthRoutes } from '@/features/auth';
  //   {
  //     path: "/auth/*",
  //     element: <AuthRoutes />,
  //   },
];
