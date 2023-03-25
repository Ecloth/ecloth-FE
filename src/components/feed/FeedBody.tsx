import styled from "styled-components";
import {IPost} from "../../types/postType";
import FeedItem from "./FeedItem";

export const dummy: IPost[] = [
  {
    post_id: 1,
    member_id: "test",
    title: "제목입니다",
    content: "내용입니다내용입니다내용입니다내용입니다",
    like: 4,
    view: 7,
    comment: 24,
    create_date: "2023-03-17",
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
    title: "~~~₩₩",
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
];

function CommunityBody() {
  return (
    <BodyWrapper>
      {dummy.map(item => (
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
