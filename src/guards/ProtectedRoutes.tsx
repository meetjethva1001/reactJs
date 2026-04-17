import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}