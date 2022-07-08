import type { RequestHandler } from "@sveltejs/kit";
import posts from "src/serv/posts";

export const get: RequestHandler = async () => {
  const highlightPost = await posts.getHighlight()
  return {
    body: {
      highlightPost
    }
  }
}
