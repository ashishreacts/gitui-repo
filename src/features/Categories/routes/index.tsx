import { Route, Routes } from "react-router-dom";
import { OpenSource } from "../../OpenSource";
import Category from "./Category";

export const DisplayCategoryContent = () => {
  return (
    <Routes>
      <Route path="" element={<Category />} />
      <Route path="/category/opensource" element={<OpenSource />} />
    </Routes>
  );
};
