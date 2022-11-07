import { rest } from "msw";

const locationsBaseUrl = "/v1/api/locations";

export const getTripLocationsHandler = rest.get(
  locationsBaseUrl,
  (req, res, ctx) => {}
);

export const getTripLocationHandler = rest.get(
  `${locationsBaseUrl}/:locationId`,
  (req, res, ctx) => {}
);
export const createTripLocationHandler = rest.post(
  locationsBaseUrl,
  (req, res, ctx) => {}
);

export const updateTripLocationHandler = rest.put(
  `${locationsBaseUrl}/:locationId`,
  (req, res, ctx) => {}
);

export const deleteTripLocationHandler = rest.delete(
  `${locationsBaseUrl}/:locationId`,
  (req, res, ctx) => {}
);
