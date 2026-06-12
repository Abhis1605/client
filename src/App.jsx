import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const token = localStorage.getItem('token')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to="/dashboard" />} />
        <Route path="/" element={token ? <Layout /> : <Navigate to="/login" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
