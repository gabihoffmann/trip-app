import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/notfound";

export function AppRoutes() {
  // ---------------------------------------------
  // Render

  return (
    <Routes>
      <Route path="/home" element={<div>oi</div>} />
      {/* unknown routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
