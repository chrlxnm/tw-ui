import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import History from "pages/History";
import Home from "pages/Home";
import Layout from "components/Layout";
import LoginPage from "pages/LoginPage";
import NotFound from "pages/NotFound";
import PrivateRoute from "pages/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/riwayat"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
