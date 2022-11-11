import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import { LocationsService } from "../../../../services/api/v1/locations";
import { DtoTripLocation } from "../../../../services/api/v1/locations/types/dtoTripLocation";
import { DtoValidationError } from "../../../../services/api/v1/locations/types/dtoValidationError";
import { getDtoLocationTripFromFormValues } from "../helpers";
import { LocalFormValues } from "../useLocalForm/types";

interface LocationServiceProps {
  locationId?: number;
}

//TODO: questinamento no uselocationservice o id via props no service - o load utiliza argumento na fn , save props ?
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
    async (
      values: LocalFormValues,
      onSuccess: () => void,
      onValidateErrors: (errors: any) => void
    ) => {
      const dto = getDtoLocationTripFromFormValues(values, props?.locationId);

      try {
        setLoading(true);

        if (props?.locationId) {
          await LocationsService.update(props?.locationId, dto);
        } else {
          await LocationsService.create(dto);
        }
        onSuccess();
      } catch (error: any) {
        const serviceErrors = error as AxiosError;
        if (serviceErrors?.response?.status === 422) {
          onValidateErrors(serviceErrors?.response?.data);
        }
      } finally {
        setLoading(false);
      }
    },
    [props?.locationId]
  );

  const remove = useCallback(
    async (onSuccess: () => void) => {
      try {
        setLoading(true);
        if (props?.locationId) await LocationsService.delete(props?.locationId);
        onSuccess();
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
    remove,
  };
}
