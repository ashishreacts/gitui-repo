import { Route, Routes } from "react-router-dom";
import Archives from "./Archives";
import { OpenSource } from "@/features/OpenSource";

export const DisplayArchivesContent = () => {
  return (
    <Routes>
      <Route path="" element={<Archives />} />
      <Route path="/archives/opensource" element={<OpenSource />} />
    </Routes>
  );
};
