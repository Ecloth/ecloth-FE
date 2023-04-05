import { Link } from "react-router-dom";
import styled from "styled-components";
import { IPost } from "../../types/postType";
import ItemDesc from "./ItemDesc";
import ItemFooter from "./ItemFooter";
import ItemHeader from "./ItemHeader";
import ItemImage from "./ItemImage";

function FeedItem({ itemProps }: { itemProps: IPost }) {
  return (
    <ItemWrapper>
      <Link to={`/Feed/${itemProps.posting_id}`} className="itemLink">
        <ItemImage
          images={itemProps.image_paths}
          postId={itemProps.posting_id}
        />
        <ItemHeader
          date={itemProps.register_date}
          likes={itemProps.like_count}
          comments={itemProps.view_count}
        />
        <ItemDesc title={itemProps.title} content={itemProps.content} />
      </Link>
      <ItemFooter
        memberId={itemProps.member.member_id}
        nickName={itemProps.member.nickname}
        profileImage={itemProps.member.profile_image_path}
        views={itemProps.view_count}
      />
    </ItemWrapper>
  );
}

export default FeedItem;

const ItemWrapper = styled.span`
  display: block;
  margin: 10px 15px;
  min-width: 250px;
  width: 21%;
  height: 470px;
  padding: 15px 5px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  flex-grow: 0;
  flex-shrink: 1;
  /* flex-basis: 0; */
  & .itemLink {
    color: black;
    min-width: 200px;
    width: 230px;
    height: 410px;
    padding: 8px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
