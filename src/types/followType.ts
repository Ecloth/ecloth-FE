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

//팔로우 요청 or 개인, 타인 팔로우 정보 조회
//POST  api/member/{memberId}/follow
//GET  api/member/follow or api/member/{memberId}/follow
export interface IFollowSend {
  follow_member_info: IFollowMemberInfo;
}

export interface IFollows {
  nickname: string;
  profile_image_path: string;
  target_id: number;
}

//개인, 타인 팔로우(팔로워) 목록 조회
//GET api/member/follows or api/member/{memberId}/follows
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
