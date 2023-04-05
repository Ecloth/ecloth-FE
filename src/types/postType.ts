import { IPage } from "./chatType";

export interface IMember {
  member_id: number;
  nickname: string;
  profile_image_path: string;
}

export interface IPost {
  posting_id: number;
  member: IMember;
  title: string;
  content: string;
  like_count: number;
  view_count: number;
  register_date: Date;
  updated_date: Date;
  image_paths: string[];
}

export interface IFeed {
  total: number;
  page: IPage;
  posting_list: IPost[];
}

export interface IMyPagePost {
  posting_id: number;
  represent_image_path: string;
}

export interface IMyPage {
  total: number;
  page: IPage;
  posting_list: IMyPagePost[];
}
export interface IImage {
  image_id: number;
  post_id: number;
  image_path: string;
}

export interface ICommentList {
  total: number;
  page: IPage;
  comment_list: IComment[];
}
export interface IReply {
  content: string;
  writer_id: number;
  reply_id: number;
  register_date: Date;
  updated_date: Date;
  nickname: string;
  profile_image_path: string;
}
export interface IComment {
  commentId: number;
  content: string;
  nickname: string;
  profileImagePath: string;
  registerDate: Date;
  reply: IReply;
  updatedDate: Date;
  writerId: number;
}
