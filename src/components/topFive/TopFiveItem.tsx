import styled from "styled-components";
import {AiTwotoneHeart} from "react-icons/ai";
import {AiOutlineComment} from "react-icons/ai";
import {AiFillEye} from "react-icons/ai";
import {IPost} from "../../types/postType";
import {Link} from "react-router-dom";

function TopFiveItem({itemProps}: {itemProps: IPost}) {
  return (
    <ItemWrapper>
      <Link to={`/feed/${itemProps.post_id}`} className="image">
        <img alt="image" src={itemProps.images[0]} className="fiveImage"></img>
        <Icons className="iconList">
          <Icon className="icon">
            <AiTwotoneHeart className="icon"></AiTwotoneHeart>
            <div>{itemProps.like}</div>
          </Icon>
          <Icon className="icon">
            <AiOutlineComment className="icon"></AiOutlineComment>
            <div>{itemProps.comment}</div>
          </Icon>
          <Icon className="icon">
            <AiFillEye className="icon"></AiFillEye>
            <div>{itemProps.view}</div>
          </Icon>
        </Icons>
      </Link>
    </ItemWrapper>
  );
}

export default TopFiveItem;

const ItemWrapper = styled.div`
  width: 80%;
  /* min-width: calc( ; */
  height: 250px;
  object-fit: contain;
  margin: 15px;
  position: relative;
  .image .fiveImage {
    width: 100%;
    height: 250px;
  }

   .fiveImage:hover {
    opacity: 0.7;
    transition: all 0.3s ease;
    cursor: pointer;
    & .iconList .icon {
      opacity: 1;
      z-index: 3;
    }
  }
`;

const Icons = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Icon = styled.li`
  color: #fff;

  opacity: 0;
  margin: 0 8px;
  transition: all 0.3s ease;
  text-align: center;
`;
