import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { IChatList } from '../types/chatType';

const { persistAtom } = recoilPersist();
const chatURL = '/chatData.json';

// const chatURL = "http://localhost:8080/api/chat";

export const ChattingRoomState = atom({
  key: 'ChattingRoomState',
  default: [],
});

export const chatList = selector<IChatList>({
  key: 'chatList',
  get: async () => {
    try {
      const res = await fetch(chatURL);
      // console.log(await res.json());
      return (await res.json()) || {};
    } catch (error) {
      console.log(`Error: \n${error}`);
    }
    return [];
  },
});
