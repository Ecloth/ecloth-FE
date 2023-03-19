import {Link} from "react-router-dom";
import styled from "styled-components";
import {IPost} from "../../types/postType";
import ItemDesc from "./ItemDesc";
import ItemFooter from "./ItemFooter";
import ItemHeader from "./ItemHeader";
import ItemImage from "./ItemImage";

function FeedItem({itemProps}: {itemProps: IPost}) {
  return (
    <ItemWrapper>
      <Link to={`/Feed/${itemProps.post_id}`} className="itemLink">
        <ItemImage images={itemProps.images} postId={itemProps.post_id} />
        <ItemHeader date={itemProps.create_date} likes={itemProps.like} comments={itemProps.comment} />
        <ItemDesc title={itemProps.title} content={itemProps.content} />
      </Link>
      <ItemFooter id={itemProps.member_id} views={itemProps.view} />
    </ItemWrapper>
  );
}

export default FeedItem;

const ItemWrapper = styled.span`
  display: block;
  margin: 10px 5px;
  min-width: 200px;
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
