import { useLocationsService } from "./useLocationsService";

export function SearchLocations() {
  const service = useLocationsService();
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <div>
      Search Page
      {service.loading && <span>...carregando</span>}
      <pre>{JSON.stringify(service.locations, null, 2)}</pre>
    </div>
  );
}
