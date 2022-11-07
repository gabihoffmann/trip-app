import { Route, Routes } from "react-router-dom";
import { LocationPage } from "./pages/locations/location";
import { SearchLocations } from "./pages/locations/search";
import { NotFound } from "./pages/notfound";

export function AppRoutes() {
  // ---------------------------------------------
  // Render

  return (
    <Routes>
      {/* Location page */}
      <Route path="/locations">
        <Route index element={<SearchLocations />} />
        <Route path="location">
          <Route index element={<LocationPage />} />
          <Route path=":id" element={<LocationPage />} />
        </Route>
      </Route>
      {/* unknown routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
