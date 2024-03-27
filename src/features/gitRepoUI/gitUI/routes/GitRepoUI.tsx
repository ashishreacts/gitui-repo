import { ContentLayout } from "@/components/Layout";
import { GitBreadCrumb } from "../components/GitBreadCrumb";
import { Home } from "../components/Home";

export const GitRepoUI = () => {
  return (
    <ContentLayout title="">
      <GitBreadCrumb />
      <Home />
    </ContentLayout>
  );
};
