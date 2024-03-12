import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthGuard from "../components/auth";

// Lazy-loaded route components
const LoginIn = lazy(() => import("./LoginIn"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const ResetPassword = lazy(() => import("./ResetPassword"));
const Layout = lazy(() => import("../components/layout"));
const SwinDashboard = lazy(() => import("./swin/Dashboard/index"));
const MyProfile = lazy(() => import("./MyProfile"));
const EditProfile = lazy(() => import("./MyProfile/EditProfile"));
const ChangePassword = lazy(() => import("./MyProfile/ChangePassword"));

const Helpline = lazy(() => import("./Helpline"));

const Routing = () => {
  // const [container, setContainer] = useState(null);

  return (
    <Routes>
      {/*   If the user is not logged in, show login and registration routes */}
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<LoginIn />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />

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
        <Route path="/swin/helpline" element={<Helpline />} />

        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myprofile/edit" element={<EditProfile />} />
        <Route
          path="/myprofile/changepassword"
          element={<ChangePassword />}
        />
      </Route>

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Routing;
