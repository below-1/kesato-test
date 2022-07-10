import type { RequestHandler } from "@sveltejs/kit";
import posts from "src/serv/posts";

export const get: RequestHandler = async ({ params }) => {
  const id = params.id;
  const {
    post,
    content
  } = await posts.getById(id)
  return {
    body: {
      post,
      content
    }
  }
}