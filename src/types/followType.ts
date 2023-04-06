export const FOLLOW_DIRECTION = {
  follow: "FOLLOWS",
  follower: "FOLLOWERS",
} as const;

type followType = (typeof FOLLOW_DIRECTION)[keyof typeof FOLLOW_DIRECTION];

export interface IFollowMemberInfo {
  member_id: number;
  follow_cnt: number;
  follower_cnt: number;
  nickname: string;
  profile_image_path: string;
}

export interface IFollowSend {
  follow_member_info: IFollowMemberInfo;
}

export interface IFollows {
  nickname: string;
  profile_image_path: string;
  target_id: number;
}

export interface IFollowList {
  follow_list: IFollows[];
  member_id: number;
  page: {
    page: number;
    size: number;
    sortBy: string;
    sortOrder: string;
  };
  point_direction: string;
  total: number;
}
