import Tags from "./Tags";
import { Route, Routes } from "react-router-dom";

export const DisplayTagsContent = () => {
  return (
    <Routes>
      <Route path="" element={<Tags />} />
    </Routes>
  );
};
