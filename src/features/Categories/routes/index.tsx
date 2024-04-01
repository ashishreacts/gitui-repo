import Category from "./Category";
import { Route, Routes } from "react-router-dom";

export const DisplayCategoryContent = () => {
  return (
    <Routes>
      <Route path="" element={<Category />} />
    </Routes>
  );
};
