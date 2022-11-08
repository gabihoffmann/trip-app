import { useCallback, useEffect, useState } from "react";
import { LocationsService } from "../../../../services/api/v1/locations";
import { DtoTripLocation } from "../../../../services/api/v1/locations/types/dtoTripLocation";
import { getDtoLocationTripFromFormValues } from "../helpers";
import { LocalFormValues } from "../useLocalForm/types";

interface LocationServiceProps {
  locationId?: number;
}

export function useLocationService(props?: LocationServiceProps) {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<DtoTripLocation>();

  // ---------------------------------------------
  // Functions
  const load = useCallback(async (locationId: number) => {
    try {
      setLoading(true);
      const result = await LocationsService.get(locationId);
      setLocation(result.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const save = useCallback(
    async (values: LocalFormValues) => {
      const dto = getDtoLocationTripFromFormValues(values, props?.locationId);

      try {
        setLoading(true);

        if (!props?.locationId)
          // TODO: Não está aceitando o dto como um Partial
          await LocationsService.create(dto as DtoTripLocation);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [props?.locationId]
  );
  // ---------------------------------------------
  // Effects
  useEffect(() => {
    if (props?.locationId) {
      load(props?.locationId);
    }
  }, [props?.locationId, load]);
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // API

  return {
    location,
    loading,
    load,
    save,
  };
}
