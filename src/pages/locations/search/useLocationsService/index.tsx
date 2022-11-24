import { useCallback, useEffect, useState } from "react";
import { LocationsService } from "../../../../services/api/v1/locations";
import { DtoTripLocation } from "../../../../services/api/v1/locations/types/dtoTripLocation";
import { LocalFormValues } from "../searchFilters/useLocalForm/types";
import { searchParamsInitialValues } from "./initialValues";
import { SearchParams } from "./types";

export function useLocationsService() {
  const [locations, setLocations] = useState<DtoTripLocation[]>([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState<SearchParams>(searchParamsInitialValues);
  // ---------------------------------------------
  // Functions

  const setFilters = useCallback((filters: LocalFormValues) => {
    setParams({
      filters,
    });
  }, []);

  const search = useCallback(async (params: SearchParams) => {
    try {
      setLoading(true);
      const result = await LocationsService.list({
        city: params.filters.city,
        country: params.filters.country,
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
    if (params) {
      search(params);
    }
  }, [search, params]);
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // API
  return {
    locations,
    loading,
    setFilters,
  };
}
