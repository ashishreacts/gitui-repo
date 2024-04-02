import { CreateGitRepoUI } from "@/features/gitUI";
import { Landing } from "@/features/misc";
import { RouteObject } from "react-router-dom";
import { MainLayoutWrapper } from "./MainLayoutWrapper";
import { DisplayAboutContent } from "@/features/About";
import { DisplayArchivesContent } from "@/features/Archives";
import { DisplayCategoryContent, OpenSource } from "@/features/Categories";
import { DisplayTagsContent, TagsData } from "@/features/Tags";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayoutWrapper />,
    children: [{ path: "", element: <CreateGitRepoUI /> }],
  },
  {
    path: "/",
    element: <MainLayoutWrapper />,
    children: [
      { path: "/home", element: <CreateGitRepoUI /> },
      { path: "/about", element: <DisplayAboutContent /> },
      { path: "/archives", element: <DisplayArchivesContent /> },
      { path: "/category/*", element: <DisplayCategoryContent /> },
      { path: "/category/opensource", element: <OpenSource /> },
      { path: "/archives/opensource", element: <OpenSource /> },
      { path: "/home/opensource", element: <OpenSource /> },
      { path: "/tags", element: <DisplayTagsContent /> },
      { path: "/tags/tagsdata", element: <TagsData /> },
      { path: "/tags/tagsdata/opensource", element: <OpenSource /> },
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
