import { DtoPagination } from "../../../../services/types/dtoServicesResult";
import { LocalFormValues } from "../searchFilters/useLocalForm/types";

export interface SearchParams {
  filters: LocalFormValues;
  pagination: DtoPagination;
}
