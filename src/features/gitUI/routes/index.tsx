import { Route, Routes } from "react-router-dom";
import { GitRepoUI } from "./GitRepoUI";
import About from "../../About/routes/About";
import Archives from "../../Archives/routes/Archives";
import Category from "../../Categories/routes/Category";
import Tags from "../../Tags/routes/Tags";

export const CreateGitRepoUI = () => {
  return (
    <Routes>
      <Route path="" element={<GitRepoUI />} />
      <Route path="/about" element={<About />} />
      <Route path="/archives" element={<Archives />} />
      <Route path="/category" element={<Category />} />
      <Route path="/tags" element={<Tags />} />
    </Routes>
  );
};
