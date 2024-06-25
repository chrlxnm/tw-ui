import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import ClassListPage from "pages/Home/ClassListPage";
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
        <Route index element={<Navigate to="/beranda" />} />
        <Route path="/beranda" element={<Home />} />
        <Route path="/beranda/daftar-kelas" element={<ClassListPage />} />
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
