import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Users from "../pages/users";
import RTK from "../pages/rtk";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/users" element={<Users />} />

      <Route path='/rtk' element={<RTK />} />
    </Routes>
  );
}

export default AppRoutes;