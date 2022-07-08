import type { Recommended } from "src/types"

const API_URL = 'https://api.npoint.io/797a4f2946e5c1fa7035'


let items: Array<Recommended> = [];

type GetOptions = {
  page?: number;
  per_page?: number;
}
export async function getRecommended(options: GetOptions) {
  const page = options.page ? options.page : 0;
  const per_page = options.per_page ? options.per_page : 3;
  if (items.length == 0) {
    const response = await fetch(API_URL);
    const data = await response.json();
    items = data;
  }
  const start = page * per_page;
  return items.slice(start, start + per_page);
}