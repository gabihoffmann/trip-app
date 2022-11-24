export interface DtoServiceResult<TData> {
  pagination: DtoPagination;

  data: TData[];
}

export interface DtoPagination {
  page: number;
  per_page: number;
  total_items: number;
}
