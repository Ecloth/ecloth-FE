export interface IPost {
  post_id: number;
<<<<<<< Updated upstream
  member_id: string;
=======
  member_id: number;
  nickName: string;
>>>>>>> Stashed changes
  title: string;
  content: string;
  like: number;
  view: number;
  comment: number;
<<<<<<< Updated upstream
  create_date: string;
=======
  create_date: Date;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  member_id: string;
  post_id: number;
  content: string;
  create_date: string;
=======
  member_id: number;
  post_id: number;
  content: string;
  create_date: Date;
>>>>>>> Stashed changes
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
