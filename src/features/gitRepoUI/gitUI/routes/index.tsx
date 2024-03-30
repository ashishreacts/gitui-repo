import { Route, Routes } from "react-router-dom";
import { GitRepoUI } from "./GitRepoUI";
import { OpenSource } from "../components/OpenSource";

export const CreateGitRepoUI = () => {
  return (
    <Routes>
      <Route path="" element={<GitRepoUI />} />
      <Route path="/openSource" element={<OpenSource />} />
    </Routes>
  );
};
