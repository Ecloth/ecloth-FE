import { atom, selector, selectorFamily } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { IPost } from '../types/postType';

const { persistAtom } = recoilPersist();
const feedURL = '/data.json';

// const feedURL = "http://localhost:8080/api/feed/post";

export const SelectedFilterState = atom({
  key: 'SelectedFilterState',
  default: '',
});

export const SelectedTopFiveFilterState = atom({
  key: 'SelectedTopFiveFilterState',
  default: '좋아요',
});

export const PreviewImgsState = atom({
  key: 'PreviewImgsState',
  default: ['https://via.placeholder.com/80'],
});

export const ChatMessageState = atom({
  key: 'ChatMessageState',
  default: '',
});

export const postList = selector<IPost[]>({
  key: 'postList',
  get: async () => {
    try {
      const res = await fetch(feedURL);
      return (await res.json()) || [];
    } catch (error) {
      console.log(`Error: \n${error}`);
    }
    return [];
  },
});
