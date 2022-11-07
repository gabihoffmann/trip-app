import { useCallback, useEffect, useState } from "react";
import { LocationsService } from "../../../../services/api/v1/locations";
import { DtoTripLocation } from "../../../../services/api/v1/locations/types/dtoTripLocation";
import { LocalFormValues } from "../searchFilters/useLocalForm/types";

export function useLocationsService() {
  const [locations, setLocations] = useState<DtoTripLocation[]>([]);
  const [loading, setLoading] = useState(false);
  // ---------------------------------------------
  // Functions
  const search = useCallback(async (values: LocalFormValues) => {
    try {
      setLoading(true);
      const result = await LocationsService.list({
        city: values.city,
        country: values.country,
      });
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
    search({
      city: "",
      country: "",
    });
  }, [search]);
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // API
  return {
    locations,
    loading,
    search,
  };
}
