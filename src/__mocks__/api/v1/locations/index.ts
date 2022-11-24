import { rest } from "msw";
import { DtoTripLocation } from "../../../../services/api/v1/locations/types/dtoTripLocation";
import { tripLocationDataSource } from "./dataSource";
import { createLocationSchema } from "./validation";

const locationsBaseUrl = "/v1/api/locations";

export const getTripLocationsHandler = rest.get(
  locationsBaseUrl,
  (req, res, ctx) => {
    const city = req.url.searchParams.get("city")?.toLocaleLowerCase();
    const country = req.url.searchParams.get("country")?.toLocaleLowerCase();
    const pageParam =
      req.url.searchParams.get("page")?.toLocaleLowerCase() || "";
    const perPageParam =
      req.url.searchParams.get("per_page")?.toLocaleLowerCase() || "";

    // search
    const result = tripLocationDataSource.filter((item) => {
      const containsCity =
        item.city.toLocaleLowerCase().indexOf(city || "") > -1;
      const containsCountry =
        item.country.toLocaleLowerCase().indexOf(country || "") > -1;
      return containsCountry && containsCity;
    });

    // pagination
    const page = pageParam ? Math.max(parseInt(pageParam), 1) : 1;
    const per_page = perPageParam ? Math.max(parseInt(perPageParam), 10) : 10;

    const initialIndex = (page - 1) * per_page;
    const finalIndex = initialIndex + per_page;
    const paginatedResult = result.slice(initialIndex, finalIndex);

    // response
    return res(
      ctx.json({
        pagination: {
          page,
          per_page,
          total_items: result.length,
        },
        data: paginatedResult,
      }),
      ctx.status(200)
    );
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
    // TODO: pesquisar lib se body está depreciado
    const body = req.body as Partial<DtoTripLocation>;

    try {
      createLocationSchema.validateSync(body, {
        abortEarly: false,
      });

      body.id =
        1 + tripLocationDataSource[tripLocationDataSource.length - 1].id!;
      tripLocationDataSource.push(body as DtoTripLocation);
      return res(ctx.json(body), ctx.status(200));
    } catch (e: any) {
      // TODO: inner >> como o yup agreega os erros de validação
      return res(ctx.status(422), ctx.json(e.inner));
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
      let location = tripLocationDataSource[locationIndex];

      if (location) {
        try {
          let body = req.body as DtoTripLocation;
          location = { ...location, ...body };
          tripLocationDataSource[locationIndex] = location;
          return res(ctx.status(200), ctx.json(location));
        } catch (e: any) {
          return res(ctx.status(422));
        }
      }
    }

    return res(ctx.status(404), ctx.json("errou aqui"));
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

        tripLocationDataSource.splice(removeIndex, 1);

        return res(ctx.status(204));
      } catch (e) {
        return res(ctx.status(422));
      }
    }

    return res(ctx.status(404));
  }
);
