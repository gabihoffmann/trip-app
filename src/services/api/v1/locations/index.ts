import { ApiGateway } from "../../../../configs/axios/apiGateway";
import { ListParams } from "./params";
import { DtoTripLocation } from "./types/dtoTripLocation";
import { DtoValidationError } from "./types/dtoValidationError";

const locationUrl = "/locations";

export class LocationsService {
  static async list(params: ListParams) {
    const response = await ApiGateway.get<DtoTripLocation[]>(locationUrl, {
      params,
    });
    return response;
  }
  static async get(locationId: number) {
    const response = await ApiGateway.get<DtoTripLocation>(
      `${locationUrl}/${locationId}`
    );
    return response;
  }
  static async create(dto: DtoTripLocation) {
    //no service uso o Dto do Error ?? não precisa o proposito do serviço é consumir os dados
    const response = await ApiGateway.post<DtoTripLocation>(locationUrl, dto);
    return response;
  }
  static async update(locationId: number, dto: DtoTripLocation) {
    const response = await ApiGateway.put<DtoTripLocation>(
      `${locationUrl}/${locationId}`,
      dto
    );
    return response;
  }
  static async delete(locationId: number) {
    const response = await ApiGateway.delete(`${locationUrl}/${locationId}`);
    return response;
  }
}
