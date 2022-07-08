import type { RequestHandler } from '@sveltejs/kit'
import postService from 'src/serv/posts'

export const get: RequestHandler = async () => {
  const postMetadata = await postService.getHighlight()
  return {
    body: {
      item: postMetadata
    }
  }
}