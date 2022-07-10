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

  public async getById(id: string) {
    if (!this.metadataList.length) {
      await this.loadMetadata();
    }
    const post = this.metadataList.find(it => it.id == id)
    if (!post) {
      throw new Error('unknown post id')
    }
    const content = [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices malesuada eros. Mauris tempus gravida neque, sit amet vehicula leo luctus at. Curabitur tempor velit sagittis viverra fermentum. Ut lobortis et massa vitae cursus. Proin vel rhoncus nisi. Ut quis lobortis lectus. Quisque elementum ligula vitae nunc interdum, ac ultricies ipsum pulvinar. Nulla feugiat volutpat pulvinar. `,
      `Phasellus posuere lectus mauris, id ultricies odio convallis tempor. Proin non enim sit amet tortor efficitur scelerisque eu pulvinar nunc. Praesent ac nulla arcu. Nam euismod ullamcorper tempor. Maecenas in nulla lectus. Proin interdum, lorem eget varius ultricies, sapien ante tincidunt elit, eu tempus erat libero et lacus. Mauris sapien felis, tempor consequat tortor non, vehicula volutpat purus. Aenean eu purus neque. Vestibulum efficitur lacus at hendrerit condimentum. `,
      `Nunc dapibus, ex dapibus tincidunt porta, velit sapien interdum massa, eget vestibulum quam lacus eget eros. Mauris non odio vitae lacus congue fermentum. Nam eu quam a sapien fringilla mollis. Sed porta dignissim magna, placerat accumsan erat imperdiet at. Suspendisse vehicula massa risus, ac semper nisi vulputate at. Mauris rutrum odio dictum lorem aliquam suscipit. Curabitur ornare magna sed magna auctor, quis eleifend nisl dignissim. `
    ]
    return {
      post,
      content
    }
  }

}

export default new PostService();
