import { rest } from "msw";
import { DtoTripLocation } from "../../../../services/api/v1/locations/types/dtoTripLocation";
import { tripLocationDataSource } from "./dataSource";

const locationsBaseUrl = "/v1/api/locations";

export const getTripLocationsHandler = rest.get(
  locationsBaseUrl,
  (req, res, ctx) => {
    return res(ctx.json(tripLocationDataSource), ctx.status(200));
  }
);

export const getTripLocationHandler = rest.get(
  `${locationsBaseUrl}/:locationId`,
  (req, res, ctx) => {
    const locationId = parseInt(String(req.params["locationId"]));

    if (locationId) {
      const location = tripLocationDataSource.find(
        (item) => item.id! === locationId
      );

      if (location) {
        return res(ctx.json(location), ctx.status(200));
      }
    }

    return res(ctx.status(404));
  }
);

export const createTripLocationHandler = rest.post(
  locationsBaseUrl,
  (req, res, ctx) => {
    const body = req.json as Partial<DtoTripLocation>;

    try {
      body.id = tripLocationDataSource.length + 1;
      tripLocationDataSource.push(body as DtoTripLocation);
      return res(ctx.json(body), ctx.status(200));
    } catch (e: any) {
      return res(ctx.status(422));
    }
  }
);

export const updateTripLocationHandler = rest.put(
  `${locationsBaseUrl}/:locationId`,
  (req, res, ctx) => {
    const locationId = parseInt(String(req.params["locationId"]));

    if (locationId) {
      const locationIndex = tripLocationDataSource.findIndex(
        (item) => item.id! === locationId
      );
      let location = tripLocationDataSource.find(
        (item) => item.id! === locationId
      );

      if (location) {
        try {
          const body = req.json();
          location = { ...location, ...body };
          tripLocationDataSource[locationIndex] = location;
        } catch (e: any) {
          return res(ctx.status(422));
        }
      }
    }

    return res(ctx.status(404));
  }
);

export const deleteTripLocationHandler = rest.delete(
  `${locationsBaseUrl}/:locationId`,
  (req, res, ctx) => {
    const locationId = parseInt(String(req.params["locationId"]));

    if (locationId) {
      try {
        const removeIndex = tripLocationDataSource.findIndex(
          (item) => item.id! === locationId
        );
        tripLocationDataSource.slice(removeIndex);

        return res(ctx.status(204));
      } catch (e) {
        return res(ctx.status(422));
      }
    }

    return res(ctx.status(404));
  }
);
