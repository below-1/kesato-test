import type { RequestHandler } from "@sveltejs/kit";
import menus from "src/serv/menus";
import type { MenuType } from "src/types";

export const get: RequestHandler = async ({ url }) => {
  const { searchParams } = url
  const type: MenuType = searchParams.has('type') ? searchParams.get('type') as MenuType : 'pizza';
  const items = await menus.getByType(type);
  return {
    body: {
      type,
      items
    }
  }
}