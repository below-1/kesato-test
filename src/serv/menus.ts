import type { Menu, MenuType } from "src/types";

const typeUris: Record<MenuType, string> = {
  'pizza': 'https://api.npoint.io/7c5d91fdf8c8ad5fc1c8',
  'burger': 'https://api.npoint.io/7c5d91fdf8c8ad5fc1c8',
  'noodle': 'https://api.npoint.io/2dc3f3b285d355c89692',
  'drink': 'https://api.npoint.io/86f7dcb8912a7d2316b0',
  'salad': 'https://api.npoint.io/4d02f88b59e746facdd6'
}

type SearchOptions = {
  type: MenuType;
}

export async function search({ type }: SearchOptions) {
  const response = await fetch(typeUris[type])
  const result = await response.json()
  return result as Array<Menu>;
}