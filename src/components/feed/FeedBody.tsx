import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { SelectedFilterState } from "../../atoms/postAtom";
import { IFeed } from "../../types/postType";
import { selectList } from "./FeedFilter";
import FeedItem from "./FeedItem";
import LoadFeedBody from "./LoadFeedBody";

function CommunityBody() {
  const selected = useRecoilState<string>(SelectedFilterState);
  const [postsList, setPostsList] = useState<IFeed>();

  let selectedList = [];

  useEffect(() => {
    let selectName = "registerDate";
    // if (selected[0] === "최신") {
    //   selectName = "registerDate";
    // } else if (selected[0] === "좋아요") {
    //   selectName = "likeCount";
    // } else {
    //   selectName = "viewCount";
    // }
    setTimeout(() => {
      axios
          .get(`http://13.125.74.102:8080/api/feed/post`, {
          params: {
            page: 1,
            size: 100,
            sortBy: selectName,
            sortOrder: "DESC",
          },
        })
        .then(function (response) {
          console.log(response.data);
          setPostsList(response.data);
        });
    }, 1000);
  }, []);

  //필터 기능
  // if (postsList && selected[0] === selectList[0]) {
  //   selectedList = postsList.posting_list.sort(
  //     (a, b) => b.posting_id - a.posting_id,
  //   );
  // } else if (postsList && selected[0] === selectList[1]) {
  //   selectedList = postsList.posting_list.sort(
  //     (a, b) => b.like_count - a.like_count,
  //   );
  // } else if (postsList && selected[0] === selectList[2]) {
  //   selectedList = postsList.posting_list.sort(
  //     (a, b) => b.view_count - a.view_count,
  //   );
  //   console.log(selectedList);
  // }

  return (
    <BodyWrapper>
      {postsList
        ? postsList.posting_list.map((item) => (
            <FeedItem itemProps={item} key={item.posting_id}></FeedItem>
          ))
        : new Array(4).fill("").map(() => <LoadFeedBody />)}
    </BodyWrapper>
  );
}

export default CommunityBody;

const BodyWrapper = styled.article`
  width: 100%;
  /* width: 1300px; */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
