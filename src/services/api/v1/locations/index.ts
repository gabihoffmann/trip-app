// import { AxiosConfig } from "../../../../configs/axios";
import Axios from "axios";
import { ListParams } from "./params";
import { DtoTripLocation } from "./types/dtoTripLocation";

const locationUrl = "/v1/api/locations";

export class LocationsService {
  static async list(params: ListParams) {
    const response = await Axios.get<DtoTripLocation[]>(locationUrl, {
      params,
    });
    return response;
  }
  static async get(locationId: number) {
    const response = await Axios.get<DtoTripLocation>(
      `${locationUrl}/${locationId}`
    );
    return response;
  }
  static async create(dto: DtoTripLocation) {
    const response = await Axios.post<DtoTripLocation>(locationUrl, dto);
    return response;
  }
  static async update(locationId: number, dto: DtoTripLocation) {
    const response = await Axios.put<DtoTripLocation>(
      `${locationUrl}/${locationId}`,
      dto
    );
    return response;
  }
  static async delete(locationId: number) {
    const response = await Axios.delete(`${locationUrl}/${locationId}`);
    return response;
  }
}
