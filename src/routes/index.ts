import type { RequestHandler } from "@sveltejs/kit";
import menus from "src/serv/menus";
import posts from "src/serv/posts";
import sosmed from "src/serv/sosmed";

export const get: RequestHandler = async () => {
  const highlightPost = await posts.getHighlight()
  const firstSpecialDealType = 'pizza'
  const pizzaSpecialDeals = await menus.getByType(firstSpecialDealType)
  const firstRecommendedPart = await menus.getRecommended(3)
  const dealOfTheWeek = await menus.getDealOfTheWeek();
  const igPosts = await sosmed.getTopInstagram()
  const featuredDeals = await menus.getFeaturedDeals();
  const recentBlogs = await posts.getRecentBlogs();
  return {
    body: {
      highlightPost,
      specialDeals: {
        firstType: firstSpecialDealType,
        firstItems: pizzaSpecialDeals.slice(0, 4)
      },
      recommended: {
        firstPart: firstRecommendedPart
      },
      dealOfTheWeek,
      featuredDeals,
      recentBlogs,
      igPosts
    }
  }
}
