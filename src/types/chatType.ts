export interface ICreateChat {
  chat_id: number;
  requester_id: string;
  target_id: string;
}

export interface IChatMessage {
  chat_room_id: number;
  writer_id: number;
  message: string;
  register_date: Date;
}

export interface IPage {
  page: number;
  size: number;
  sortBy: string;
  sortOrder: string;
}

export interface IAllChatMessage {
  message_list: IChatMessage[];
  page: IPage;
  total: number;
}

export interface IChatRoom {
  chat_room_id: number;
  partner_id: number;
  partner_nickname: string;
  partner_profile_image_path: string;
  last_message: string | null;
  last_message_date: Date;
}

export interface IChatList {
  total: number;
  page: IPage;
  chat_room_list: IChatRoom[];
}
