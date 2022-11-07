// eslint-disable-next-line jest/no-mocks-import
import {
  getTripLocationsHandler,
  getTripLocationHandler,
  createTripLocationHandler,
  updateTripLocationHandler,
  deleteTripLocationHandler,
} from "../../../../../__mocks__/api/v1/locations/index";

export const handlers = [
  getTripLocationsHandler,
  getTripLocationHandler,
  createTripLocationHandler,
  updateTripLocationHandler,
  deleteTripLocationHandler,
];
