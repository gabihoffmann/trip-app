import { LocalFormValues } from "../searchFilters/useLocalForm/types";
import { SearchParams } from "./types";

export const filtersInitialValues: LocalFormValues = {
  city: "",
  country: "",
};

export const searchParamsInitialValues: SearchParams = {
  filters: filtersInitialValues,
};
