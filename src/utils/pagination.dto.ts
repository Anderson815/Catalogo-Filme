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

    const paginationNotAble = filter.pagination === false;

    this.page = paginationNotAble ? 1 : filter.page;
    this.limit = paginationNotAble ? totalItems : filter.limit;
    this.totalItems = totalItems;
    this.resource = resource;
    this.totalPages = paginationNotAble ? 1 : Math.ceil(totalItems / filter.limit);
    this.amountItemsCurrentPage = resource.length;
  }
}
