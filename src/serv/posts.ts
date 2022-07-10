import type { PostMetaData } from "src/types";

const metadata_url = 'https://api.npoint.io/66689767db5a4199b652'

export class PostService {

  protected metadataList: Array<PostMetaData> = [];

  protected async loadMetadata() {
    const response = await fetch(metadata_url)
    const data = await response.json()
    this.metadataList = data;
  }

  public async getHighlight() {
    if (!this.metadataList.length) {
      await this.loadMetadata();
    }
    return this.metadataList[0];

  }

  public async getRecentBlogs() {
    if (!this.metadataList.length) {
      await this.loadMetadata();
    }
    return this.metadataList.slice(0, 3);
  }

}

export default new PostService();
