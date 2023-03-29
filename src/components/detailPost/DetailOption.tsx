import { useState } from "react";
import {BiDotsHorizontalRounded} from "react-icons/bi"
import { Link } from "react-router-dom";
import styled from "styled-components";

function DetailOption ({postId} : {postId:number}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDeletePost =(e:React.MouseEvent<HTMLButtonElement>) => {
    console.log("delete post");
  }
  return(
    <ButtonWrapper className="buttonWrapper">

    <BiDotsHorizontalRounded onClick={() => setIsOpen(!isOpen)} className="icon">
    </BiDotsHorizontalRounded>
    {isOpen && <OptionWrapper>
      <ul>
        <li>
          <Link to={`/post/edit/${postId}`}className="linkItem">수정하기
            </Link>
          </li>
        <li>
          <button className="linkItem" onClick={handleDeletePost}>삭제하기
            </button>
          </li>
      </ul>
    </OptionWrapper>}
    </ButtonWrapper>
  )

}

export default DetailOption;

const ButtonWrapper = styled.div`
text-align: end;
margin-right: 15px;
  width: 77px;
  height: 30px;
  cursor: pointer;
  .icon{
      width: 30px;
      font-size: 1.5rem;
    }
`

const OptionWrapper = styled.span`
  display: block;
  width: 80px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);

   ul{
    width: fit-content;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    
    
    & li{
      padding: 5px;
      cursor: pointer;
      z-index: 4;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      .linkItem{
        background-color: #fff;
        color:#000;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }

  }
`