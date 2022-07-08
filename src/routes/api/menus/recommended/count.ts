import type { RequestHandler } from '@sveltejs/kit'
import { z } from 'zod';
import { search } from 'src/serv/menus'
import { getRecommended } from 'src/serv/recommended';

export const get: RequestHandler = async ({ url }) => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return {
    body: {
      items: result
    }
  }
}