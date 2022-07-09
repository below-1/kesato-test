import { MenuTypeOptions, type Menu, type MenuType } from "src/types";

type Cache = {
  type: MenuType;
  url: string;
  cached: boolean;
}

const typeUris: Array<Cache> = [
  { 
    type: 'pizza',
    url: 'https://api.npoint.io/7c5d91fdf8c8ad5fc1c8',
    cached: false
  },
  { 
    type: 'burger',
    url: 'https://api.npoint.io/9d107fab207554db4bda',
    cached: false
  },
  {
    type: 'noodle',
    url: 'https://api.npoint.io/2dc3f3b285d355c89692',
    cached: false
  },
  {
    type: 'drink',
    url: 'https://api.npoint.io/86f7dcb8912a7d2316b0',
    cached: false
  },
  {
    type: 'salad',
    url: 'https://api.npoint.io/4d02f88b59e746facdd6',
    cached: false
  }
];

export class MenuService {
  protected typeMetaData = typeUris;
  protected items: Array<Menu> = [];

  protected async _getByType(type: MenuType) {
    const metadata = this.typeMetaData.find(it => it.type == type)
    if (!metadata) {
      throw new Error('metadata unknown for arg: ' + type)
    }
    const response = await fetch(metadata.url)
    const data = await response.json()
    return data
  }

  public async getByType(type: MenuType) {
    const metadata = this.typeMetaData.find(it => it.type == type)
    if (!metadata) {
      throw new Error('metadata unknown for arg: ' + type)
    }
    if (!metadata.cached) {
      const data = await this._getByType(type);
      this.items = [ ...this.items, ...data ]
      metadata.cached = true;
    }
    return this.items.filter(it => it.type == type);
  }

  protected async getAll() {
    const proms = Promise.all(
      MenuTypeOptions.map(type => this.getByType(type as MenuType))
    )
    await proms;
  }

  public async getRecommended(n: number) {
    const allCached = this.typeMetaData.every(it => it.cached)
    if (!allCached) {
      await this.getAll()
    }
    return this.items.slice(0, n);
  }
}

export default new MenuService();


// const typeUris: Record<MenuType, string> = {
//   'pizza': 'https://api.npoint.io/7c5d91fdf8c8ad5fc1c8',
//   'burger': 'https://api.npoint.io/7c5d91fdf8c8ad5fc1c8',
//   'noodle': 'https://api.npoint.io/2dc3f3b285d355c89692',
//   'drink': 'https://api.npoint.io/86f7dcb8912a7d2316b0',
//   'salad': 'https://api.npoint.io/4d02f88b59e746facdd6'
// }
