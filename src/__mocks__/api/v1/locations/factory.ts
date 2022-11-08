import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { DtoTripLocation } from "../../../../services/api/v1/locations/types/dtoTripLocation";

export const tripLocationFactory = Factory.define<DtoTripLocation>(
  ({ sequence }) => ({
    id: sequence,
    city: faker.address.cityName(),
    country: faker.address.country(),
    hotelName: faker.company.bs(),
    hotelPhone: faker.phone.number("#########"),
    travelPlan: faker.lorem.sentence(),
  })
);
