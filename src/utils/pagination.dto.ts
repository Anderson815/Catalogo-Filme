import { FilterDto } from "./filter.dto";

export class Pagination<Resource> {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  amountItemsCurrentPage: number;
  resource: Resource[];

  constructor(
    filter: FilterDto,
    totalItems: number,
    resource: Resource[],
  ) {
    this.page = filter.pagination ? filter.page : 1;
    this.limit = filter.pagination ? filter.limit : totalItems;
    this.totalItems = totalItems;
    this.resource = resource;
    this.totalPages = filter.pagination ? Math.ceil(totalItems / filter.limit) : 1;
    this.amountItemsCurrentPage = resource.length;
  }
}
