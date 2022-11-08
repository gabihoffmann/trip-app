import { DtoTripLocation } from "../../../services/api/v1/locations/types/dtoTripLocation";
import { LocalFormValues } from "./useLocalForm/types";

export function getFormValuesFromDtoLocationTrip(dto: DtoTripLocation) {
  const formValues: LocalFormValues = {
    city: dto.city,
    country: dto.country,
    hotel: {
      name: dto.hotelName || "",
      phone: dto.hotelPhone || "",
    },
    travel: dto.travelPlan || "",
  };

  return formValues;
}

export function getDtoLocationTripFromFormValues(
  values: LocalFormValues,
  locationId: number | undefined
) {
  let dtoValues: Partial<DtoTripLocation> = {
    // TODO: what means
    ...(locationId && { id: locationId }),
    city: values.city,
    country: values.country,
    hotelName: values.hotel.name,
    hotelPhone: values.hotel.phone,
    travelPlan: values.travel,
  };

  return dtoValues;
}
