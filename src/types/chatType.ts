export interface ICreateChat {
  chat_id: string;
  requester_id: string;
  target_id: string;
}

export interface IChatMessage {
  sender_id: string;
  receiver_id: string;
  content: string;
  create_date: string;
}

export interface IChatRoom {
  total: number;
  page_number: number;
  record_size: number;
  page_size: number;
  chat_list: IChatMessage[];
}
