import axios from "axios";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import styled from "styled-components";
import { postList, SelectedFilterState } from "../../atoms/postAtom";
import { IPost } from "../../types/postType";
import { selectList } from "./FeedFilter";
import FeedItem from "./FeedItem";

function CommunityBody() {
  const selected = useRecoilState<string>(SelectedFilterState);
  // const FeedItem = React.lazy(() => import("./FeedItem"));
  const PostsLoadable = useRecoilValueLoadable<IPost[]>(postList);

  let posts: IPost[] =
    "hasValue" === PostsLoadable.state ? PostsLoadable.contents : [];
  let selectedList: IPost[] = [...posts];
  if (!selectedList) {
    return <div>Loading</div>;
  }

  if (selected[0] === selectList[0]) {
    selectedList = selectedList.sort((a, b) => b.postId - a.postId);
  } else if (selected[0] === selectList[1]) {
    selectedList = selectedList.sort((a, b) => b.likeCount - a.likeCount);
  } else if (selected[0] === selectList[2]) {
    selectedList = selectedList.sort((a, b) => b.viewCount - a.viewCount);
    console.log(selectedList);
  } else if (selected[0] === selectList[3]) {
    selectedList = selectedList.sort((a, b) => b.commentCount - a.commentCount);
  }
  useEffect(() => {}, [selected]);

  return (
    <BodyWrapper>
      {selectedList &&
        selectedList.map((item) => (
          <FeedItem itemProps={item} key={item.postId}></FeedItem>
        ))}
    </BodyWrapper>
  );
}

export default CommunityBody;

const BodyWrapper = styled.article`
  min-width: 600px;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;
