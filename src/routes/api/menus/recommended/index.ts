import type { RequestHandler } from '@sveltejs/kit'
import { z } from 'zod';
import menus from 'src/serv/menus';

const SearchParamsSchema = z.object({
  page: z.string().optional().transform(v => v ? parseInt(v) : undefined),
  per_page: z.string().optional().transform(v => v ? parseInt(v) : undefined)
})

export const get: RequestHandler = async ({ url }) => {
  const rawParams = Object.fromEntries(url.searchParams.entries())
  const parseResult = await SearchParamsSchema.safeParseAsync(rawParams)
  if (!parseResult.success) {
    throw new Error('fail  to parsing params')
  }
  const params = parseResult.data
  const result = await menus.getRecommended(18);
  const per_page = params.per_page ? params.per_page : 3;
  const page = params.page ? params.page : 0;
  const start = per_page * page;
  const end = start + per_page;
  const items = result.slice(start, end);

  return {
    body: {
      items
    }
  }
}