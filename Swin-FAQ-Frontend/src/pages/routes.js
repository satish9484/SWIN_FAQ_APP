import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthGuard from "../components/auth";

import SwinDashboard from "./swin/Dashboard/index";

// Lazy-loaded route components
const Layout = lazy(() => import("../components/layout"));
const MyProfile = lazy(() => import("./MyProfile"));
const EditProfile = lazy(() => import("./MyProfile/EditProfile"));
const ChangePassword = lazy(() => import("./MyProfile/ChangePassword"));

const Routing = () => {
  // const [container, setContainer] = useState(null);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthGuard>
            <Layout />
          </AuthGuard>
        }
      >
        {/* Student routes */}
        <Route path="/" element={<Navigate replace to="/swin" />} />
        <Route path="/swin" element={<SwinDashboard />} />
        <Route path="/swin/dashboard" element={<SwinDashboard />} />

        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myprofile/edit" element={<EditProfile />} />
        <Route path="/myprofile/changepassword" element={<ChangePassword />} />
      </Route>

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Routing;
