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
      <Link to={`/Feed/${itemProps.postId}`} className="itemLink">
        <ItemImage images={itemProps.imagePath} postId={itemProps.postId} />
        <ItemHeader
          date={itemProps.createDate}
          likes={itemProps.likeCount}
          comments={itemProps.commentCount}
        />
        <ItemDesc title={itemProps.title} content={itemProps.content} />
      </Link>
      <ItemFooter
        memberId={itemProps.memberId}
        nickName={itemProps.nickName}
        profileImage={itemProps.profileImagePath}
        views={itemProps.viewCount}
      />
    </ItemWrapper>
  );
}

export default FeedItem;

const ItemWrapper = styled.span`
  display: block;
  margin: 10px 5px;
  min-width: 250px;
  width: 22%;
  height: 470px;
  padding: 15px 5px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

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
