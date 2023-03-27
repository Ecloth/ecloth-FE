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
  follow_cnt: number;
  follower_cnt: number;
  follow_status: boolean;
}

export interface IFollowList {
  requester_id: number;
  point_direction: followType;
  total: number;
  page_number: number;
  record_size: number;
  sort_by: string;
  sort_order: string;
  follow_list: IFollowResponse[];
}

export interface IFollwerList {
  requester_id: number;
  point_direction: followType;
  total: number;
  page_number: number;
  record_size: number;
  sort_by: string;
  sort_order: string;
  follow_list: IFollowResponse[];
}
