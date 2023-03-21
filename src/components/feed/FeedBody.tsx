import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { SelectedFilterState } from "../../atoms/postAtom";
import {IPost} from "../../types/postType";
import { selectList } from "./FeedFilter";
import FeedItem from "./FeedItem";

export const dummy: IPost[] = [
  {
    post_id: 1,
    member_id: "test123",
    title: "제목입니다",
    content: "내용입니다내용입니다내용입니다내용입니다",
    like: 4,
    view: 7,
    comment: 24,
    create_date: "2023-02-17",
    update_date: "2023-03-18",
    images: ["https://www.kdfnews.com/news/photo/202202/87406_87382_2149.jpg"],
  },
  {
    post_id: 2,
    member_id: "USER2",
    title: "이 옷 괜찮죠",
    content: "싸게 샀어요",
    like: 227,
    view: 327,
    comment: 432,
    create_date: "2023-02-28",
    update_date: "2023-03-01",
    images: ["https://i.pinimg.com/236x/24/ef/b5/24efb51aac6a339b337742cea1d9c0f9.jpg"],
  },
  {
    post_id: 3,
    member_id: "USER2",
    title: "1234",
    content: "옷 어떤가요",
    like: 27,
    view: 31,
    comment: 2,
    create_date: "2023-02-28",
    update_date: "2023-03-01",
    images: ["https://nationaltoday.com/wp-content/uploads/2021/06/shutterstock_1657335223-1-min-640x514.jpg"],
  },
  {
    post_id: 4,
    member_id: "USER2",
    title: "제목제목",
    content: "이 옷 어때 ??",
    like: 9,
    view: 87,
    comment: 47,
    create_date: "2023-02-28",
    update_date: "2023-03-01",
    images: [
      "https://cdn-std-web-155-55.cdn-nhncommerce.com/gtogcokr_godomall_com/data/editor/board/ootd/ae_luv_1_132811.jpg",
    ],
  },
  {
    post_id: 5,
    member_id: "USER3",
    title: "Title",
    content: "옷 삼",
    like: 12,
    view: 97,
    comment: 7,
    create_date: "2023-03-21",
    update_date: "2023-03-21",
    images: [
      "https://i0.wp.com/echeveau.net/wp-content/uploads/2021/03/OOTD-20210312-6.jpg?resize=1170%2C1755&ssl=1",
    ],
  },
  {
    post_id: 6,
    member_id: "test123",
    title: "ㅎㅎ득템",
    content: "이 옷 어떤가요",
    like: 29,
    view: 37,
    comment: 6,
    create_date: "2023-03-29",
    update_date: "2023-03-29",
    images: [
      "https://manhattanmall.co.kr/file_data/hansungfnc32/2020/12/29/6c0b874ce1d22dbcc6d14599fc4e359f.jpg",
    ],
  },
  {
    post_id: 7,
    member_id: "USER1",
    title: "이거 따라 샀어요",
    content: "어떤가요",
    like: 79,
    view: 58,
    comment: 647,
    create_date: "2023-03-29",
    update_date: "2023-03-29",
    images: [
      "https://image.musinsa.com/mfile_s01/2021/11/18/c0fba364051750be3be1c7df772277fd210841.jpg",
    ],
  },
];

function CommunityBody() {

  const selected = useRecoilState<string>(SelectedFilterState)[0];
  console.log(selected)
  let selectedList: IPost[] = [];
  if (selected === selectList[0]) {
    selectedList = dummy;
    console.log(selectedList)

  } else if (selected === selectList[1]) {
    selectedList = dummy.sort((a, b) => b.post_id - a.post_id);
  } else if (selected === selectList[2]) {
    selectedList = dummy.sort((a, b) => b.like - a.like);
  } else if (selected === selectList[3]) {
    selectedList = dummy.sort((a, b) => b.view - a.view);
  } else if (selected === selectList[4]){
    selectedList = dummy.sort((a, b) => b.comment - a.comment);
  }
  useEffect(() => {

  },[selected])

  return (
    <BodyWrapper>
      {selectedList && selectedList.map(item => (
        <FeedItem itemProps={item} key={item.post_id}></FeedItem>
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
