import { Route, Routes } from "react-router-dom";
import About from "./About";

export const DisplayAboutContent = () => {
  return (
    <Routes>
      <Route path="" element={<About />} />
    </Routes>
  );
};
