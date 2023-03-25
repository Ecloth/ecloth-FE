export interface IPost {
  post_id: number;
  member_id: string;
  title: string;
  content: string;
  like: number;
  view: number;
  comment: number;
  create_date: string;
  update_date: string;
  images: string[];
}
export interface IImage {
  image_id: number;
  post_id: number;
  image_path: string;
}

export interface IComment {
  comment_id: number;
  member_id: string;
  post_id: number;
  content: string;
  create_date: string;
  update_date: string;
}
export interface IReply {
  member_id: Long;
  reply_id: number;
  comment_id: number;
  content: string;
  create_date: string;
  update_date: string;
}
