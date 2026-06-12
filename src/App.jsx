import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

function getAuthInfo(token) {
  if (!token) {
    return { role: "" }
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]))

    return {
      role: payload.role || ""
    }
  } catch {
    return { role: "" }
  }
}

function ProtectedRoute({ token, role, allowedRole, children }) {
  if (!token) {
    return <Navigate to="/login" replace />
  }

  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/dashboard" replace />
  }

  return children
}

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const role = getAuthInfo(token).role;

  useEffect(() => {
    const handleStorage = () => {
      setToken(localStorage.getItem("token"));
    };

    const handleAuthChanged = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("auth-changed", handleAuthChanged);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("auth-changed", handleAuthChanged);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public */}
        <Route
          path="/login"
          element={!token ? <Login setToken={setToken} /> : <Navigate to={role === "admin" ? "/admin" : "/dashboard"} replace />}
        />

        <Route
          path="/register"
          element={!token ? <Register /> : <Navigate to={role === "admin" ? "/admin" : "/dashboard"} replace />}
        />

        {/* Protected */}
        <Route
          element={
            <ProtectedRoute token={token} role={role}>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route
            path="dashboard"
            element={
              <ProtectedRoute token={token} role={role}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin"
            element={
              <ProtectedRoute token={token} role={role} allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}