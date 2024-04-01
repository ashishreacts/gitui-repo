import { Route, Routes } from "react-router-dom";
import Archives from "./Archives";

export const DisplayArchivesContent = () => {
  return (
    <Routes>
      <Route path="" element={<Archives />} />
    </Routes>
  );
};
