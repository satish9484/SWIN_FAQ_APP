import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const currentUser = true;
  const navigate = useNavigate(null);

  useEffect(() => {
    if (!currentUser) navigate("/login", { replace: true });
  }, [currentUser, navigate]);

  return <>{children}</>;
};

export default AuthGuard;
