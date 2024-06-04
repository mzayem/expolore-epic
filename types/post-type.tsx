type Post = {
  id: string;
  name: string;
  title: string;
  content: String;
  images: Images[];
  createdAt: string;
  updatedAt: string;
};

export interface Images {
  id: string;
  url: string;
}

export default Post;
