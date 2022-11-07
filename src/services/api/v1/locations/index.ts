import { AxiosConfig } from "../../../../configs/axios";
import { DtoTripLocation } from "./types/dtoTripLocation";

const locationUrl = "/v1/api/locations";

export class LocationsService {
  static async list() {
    const response = await AxiosConfig.get<DtoTripLocation[]>(locationUrl);
    return response;
  }
  static async get(locationId: number) {
    const response = await AxiosConfig.get<DtoTripLocation>(
      `${locationUrl}/${locationId}`
    );
    return response;
  }
  static async create(dto: DtoTripLocation) {
    const response = await AxiosConfig.post<DtoTripLocation>(locationUrl, dto);
    return response;
  }
  static async update(locationId: number, dto: DtoTripLocation) {
    const response = await AxiosConfig.put<DtoTripLocation>(
      `${locationUrl}/${locationId}`,
      dto
    );
    return response;
  }
  static async delete(locationId: number) {
    const response = await AxiosConfig.delete(`${locationUrl}/${locationId}`);
    return response;
  }
}
