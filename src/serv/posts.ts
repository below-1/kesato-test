import type { PostMetaData } from "src/types";

const metadata_url = 'https://api.npoint.io/66689767db5a4199b652'

export class PostService {

  protected metadataList: Array<PostMetaData> = [];

  public async getHighlight() {
    if (!this.metadataList.length) {
      const response = await fetch(metadata_url)
      const data = await response.json()
      this.metadataList = data;
    }
    return this.metadataList[0];
  }

}

export default new PostService();
