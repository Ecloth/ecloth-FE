import styled from "styled-components";
import { AiTwotoneHeart } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import dayjs from "dayjs";
import RecordTime from "../commons/RecordTime";

function ItemHeader({
  date,
  likes,
  comments,
}: {
  date: Date;
  likes: number;
  comments: number;
}) {
  return (
    <HeaderWrapper>
      <RecordTime date={date} />
      {/* <ItemDate>{dayjs(date).format("YYYY-MM-DD")}</ItemDate> */}
      <>
        <ItemIcon>
          <AiTwotoneHeart size="15" />
          {likes}
          <AiOutlineComment size="15" className="commentIcon" />
          {comments}
        </ItemIcon>
      </>
    </HeaderWrapper>
  );
}

export default ItemHeader;

const HeaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemIcon = styled.span`
  display: flex;
  justify-content: space-around;
  min-width: 60px;
  flex-direction: row;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  .commentIcon {
    margin-left: 5px;
  }
`;

const ItemDate = styled.span`
  font-size: 0.6rem;
  font-weight: 400;
  line-height: 17px;

  color: rgba(0, 0, 0, 0.7);
`;
