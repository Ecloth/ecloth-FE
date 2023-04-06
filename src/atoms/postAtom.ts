import { atom, selector, selectorFamily } from "recoil";
import { recoilPersist } from "recoil-persist";
import { IPage } from "../types/chatType";
import { IFeed, IPost } from "../types/postType";

const { persistAtom } = recoilPersist();
// const feedURL = "/data.json";

const feedURL = "http://13.125.74.102:8080/api/feed/post";

export const SelectedFilterState = atom({
  key: "SelectedFilterState",
  default: "",
});

export const SelectedTopFiveFilterState = atom({
  key: "SelectedTopFiveFilterState",
  default: "좋아요",
});

export const PreviewImgsState = atom({
  key: "PreviewImgsState",
  default: ["https://via.placeholder.com/80"],
});

export const ChatMessageState = atom({
  key: "ChatMessageState",
  default: "",
});

export const postList = selector<IFeed>({
  key: "postList",
  get: async () => {
    try {
      const res = await fetch(`http://13.125.74.102:80/api/feed/post`);
      console.log(await res.json());
      return (await res.json()) || [];
    } catch (error) {
      console.log(`Error: \n${error}`);
    }
    return [];
  },
});
