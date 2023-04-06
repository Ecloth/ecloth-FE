import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { SelectedTopFiveFilterState } from "../../atoms/postAtom";
import { IPost } from "../../types/postType";
import LoadTopFive from "./LoadTopFive";

import TopFiveItem from "./TopFiveItem";

function TopFiveBody() {
  const selected = useRecoilState<string>(SelectedTopFiveFilterState);
  let [selectedList, setSelectedList] = useState<IPost[]>();

  let selectFilter = "likeCount";


  useEffect(() => {
    if (selected[0] === "좋아요") {
      selectFilter = "likeCount";
    } else if (selected[0] === "조회수") {
      selectFilter = "viewCount";
    }
    setTimeout(() => {
      axios
        .get(`http://13.125.74.102:8080/api/feed/post`, {
          params: {
            page: 1,
            size: 4,
            sortBy: selectFilter,
            sortOrder: "DESC",
          },
        })
        .then(function (response) {
          console.log(response.data);
          setSelectedList(response.data.posting_list);
        }),
        1000;
    });
  }, []);

  // if (selectedList && selected[0] === filterItems[1]) {
  //   selectedList = selectedList
  //     .sort((a, b) => b.like_count - a.like_count)
  //     .slice(0, 4);
  // } else if (selected[0] === filterItems[0]) {
  //   selectedList = selectedList
  //     .sort((a, b) => b.view_count - a.view_count)
  //     .slice(0, 4);
  // }
  return (
    <ItemWrppaer>
      {selectedList
        ? selectedList.map((item) => (
            <TopFiveItem key={item.posting_id} itemProps={item} />
          ))
        : new Array(4).fill("").map(() => <LoadTopFive />)}
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
