export interface IPost {
  postId: number;
  memberId: number;
  nickName: string;
  profileImagePath: string;
  title: string;
  content: string;
  likeCount: number;
  viewCount: number;
  commentCount: number;
  createDate: Date;
  updateDate: string;
  imagePath: string[];
}
export interface IImage {
  image_id: number;
  post_id: number;
  image_path: string;
}

export interface IComment {
  commentId: number;
  memberId: number;
  postingId: number;
  parentId: number;
  nickname: string;
  profileImagePath: string;
  content: string;
  createDate: Date;
  updateDate: string;
}
export interface IReply {
  member_id: Long;
  reply_id: number;
  comment_id: number;
  content: string;
  create_date: string;
  update_date: string;
}
