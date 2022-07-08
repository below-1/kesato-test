import type { RequestHandler } from '@sveltejs/kit'
import { z } from 'zod';
import { search } from 'src/serv/menus'
import { getRecommended } from 'src/serv/recommended';

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
  const result = await getRecommended(parseResult.data)
  return {
    body: {
      items: result
    }
  }
}