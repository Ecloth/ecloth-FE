import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { SelectedTopFiveFilterState } from "../../atoms/postAtom";
import { IPost } from "../../types/postType";
import {dummy} from "../feed/FeedBody";
import TopFiveItem from "./TopFiveItem";

function TopFiveBody() {
  const selected = useRecoilState<string>(SelectedTopFiveFilterState)[0];

  console.log(selected)
  let selectedList: IPost[] = [];
  if (selected === filterItems[0]) {
    selectedList = dummy.sort((a, b) => b.like - a.like).slice(0,4);
    console.log(selectedList)
  } else if (selected === filterItems[1]) {
    selectedList = dummy.sort((a, b) => b.view - a.view).slice(0,4);
  }
  useEffect(() => {

  },[selected])
  return (
    <ItemWrppaer>
      {selectedList.map((item) => (
        <TopFiveItem key={item.post_id} itemProps={item} />
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
