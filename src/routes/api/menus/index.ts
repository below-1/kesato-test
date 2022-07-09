import type { RequestHandler } from '@sveltejs/kit'
import { z } from 'zod';
import menus from 'src/serv/menus'
import { MenuTypeSchema } from 'src/types';

const SearchParamsSchema = z.object({
  type: MenuTypeSchema
})

export const get: RequestHandler = async ({ url }) => {
  const parseResult = await MenuTypeSchema.safeParseAsync(url.searchParams.get('type'));
  if (!parseResult.success) {
    throw new Error('invalid search parameters');
  }
  const type = parseResult.data;
  if (!type) {
    throw new Error('type is undefined')
  }
  const items = await menus.getByType(type);
  // const menus = await search({ type });
  return {
    body: {
      items
    }
  }
}