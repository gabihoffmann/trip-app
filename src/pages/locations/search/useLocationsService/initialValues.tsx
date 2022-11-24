import { DtoPagination } from "../../../../services/types/dtoServicesResult";
import { LocalFormValues } from "../searchFilters/useLocalForm/types";
import { SearchParams } from "./types";

export const filtersInitialValues: LocalFormValues = {
  city: "",
  country: "",
};

export const paginationInitialValues: DtoPagination = {
  page: 1,
  per_page: 10,
  total_items: 10,
};

export const searchParamsInitialValues: SearchParams = {
  filters: filtersInitialValues,
  pagination: paginationInitialValues,
};
