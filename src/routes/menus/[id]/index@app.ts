import type { RequestHandler } from "@sveltejs/kit";
import menus from "src/serv/menus";

export const get: RequestHandler = async ({ params }) => {
  const id = params.id;
  const menu = await menus.getById(id);
  return {
    body: {
      menu
    }
  }
}