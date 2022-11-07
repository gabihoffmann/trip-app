import { useCallback, useEffect, useState } from "react";
import { LocationsService } from "../../../../services/api/v1/locations";
import { DtoTripLocation } from "../../../../services/api/v1/locations/types/dtoTripLocation";

export function useLocationsService() {
  const [locations, setLocations] = useState<DtoTripLocation[]>([]);
  const [loading, setLoading] = useState(false);
  // ---------------------------------------------
  // Functions
  const search = useCallback(async () => {
    try {
      setLoading(true);
      const result = await LocationsService.list();
      console.log("result list: ", result);
      setLocations(result.data);
    } catch (error: any) {
      console.error("search list error: ", error);
    } finally {
      setLoading(false);
    }
  }, []);
  // ---------------------------------------------
  // Effects
  useEffect(() => {
    search();
  }, [search]);
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // API
  return {
    locations,
    loading,
  };
}
