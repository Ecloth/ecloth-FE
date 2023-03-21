export const FOLLOW_DIRECTION = {follow: "FOLLOWS", follower: "FOLLOWERS"} as const;

type followType = (typeof FOLLOW_DIRECTION)[keyof typeof FOLLOW_DIRECTION];

export interface IFollow {
  target_id: string;
  follow_status: boolean;
}
export interface IFollowResponse {
  target_id: string;
  nickname: string;
  profile_image_path: string;
}
export interface IFollowMemberInfo{
  follow_cnt: number;
  follow_status: boolean;
  follower_cnt: number;
  nickName: string;
  profile_image_path: string;
  target_id: number;
}
export interface IPage {
  page:number;
  size:number;
  sortBy: string;
  sortOrder : string;
}
export interface IFollowList {
  member_id: number;
  point_direction: followType;
  total: number;
  page: IPage;
  follow_list: IFollowResponse[];
}

