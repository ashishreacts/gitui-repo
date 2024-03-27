import { Landing } from "@/features/misc";
import { RouteObject } from "react-router-dom";
import { MainLayoutWrapper } from "./MainLayoutWrapper";
import { CreateGitRepoUI } from "@/features/gitRepoUI";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayoutWrapper />,
    children: [{ path: "", element: <CreateGitRepoUI /> }],
  },
  {
    path: "/",
    element: <Landing />,
  },
  // import { AuthRoutes } from '@/features/auth';
  //   {
  //     path: "/auth/*",
  //     element: <AuthRoutes />,
  //   },
];
