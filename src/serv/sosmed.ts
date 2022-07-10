import type { IgPost } from "src/types";

const ig_post_url = 'https://api.npoint.io/5aec7a6c20e0a241d24f'

export class SosMedService {
  protected ig_post: Array<IgPost> = [];

  public async getTopInstagram() {
    if (!this.ig_post.length) {
      const response = await fetch(ig_post_url)
      this.ig_post = await response.json()
    }
    return this.ig_post;
  }

}

export default new SosMedService();