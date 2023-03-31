import { useRecoilState, useRecoilValueLoadable } from "recoil";
import styled from "styled-components";
import { postList, SelectedTopFiveFilterState } from "../../atoms/postAtom";
import { IPost } from "../../types/postType";
import { filterItems } from "./TopFiveFilter";

import TopFiveItem from "./TopFiveItem";

function TopFiveBody() {
  const selected = useRecoilState<string>(SelectedTopFiveFilterState);
  const PostsLoadable = useRecoilValueLoadable<IPost[]>(postList);
  const postsList: IPost[] =
    "hasValue" === PostsLoadable.state ? PostsLoadable.contents : [];

  let selectedList: IPost[] = [...postsList];

  if (selectedList && selected[0] === filterItems[1]) {
    selectedList = selectedList
      .sort((a, b) => b.likeCount - a.likeCount)
      .slice(0, 4);
  } else if (selected[0] === filterItems[0]) {
    selectedList = selectedList
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, 4);
  }
  return (
    <ItemWrppaer>
      {selectedList &&
        selectedList.map((item) => (
          <TopFiveItem key={item.postId} itemProps={item} />
        ))}
    </ItemWrppaer>
  );
}

export default TopFiveBody;

const ItemWrppaer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
