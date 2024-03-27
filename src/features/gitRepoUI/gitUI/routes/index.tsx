import { Route, Routes } from "react-router-dom";
import { GitRepoUI } from "./GitRepoUI";

export const CreateGitRepoUI = () => {
  return (
    <Routes>
      <Route path="" element={<GitRepoUI />} />
    </Routes>
  );
};
