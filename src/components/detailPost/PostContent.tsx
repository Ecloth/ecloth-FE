import styled from "styled-components";
import RecordTime from "../commons/RecordTime";

function PostContent({title, text}: {title: string; text: string}) {
  return (
    <PostWrapper>
      <div>
        <span className="title">{title}</span>
        <span className="text">{text}</span>
      </div>
      <RecordTime date={new Date().getDate() + "시간"} />
    </PostWrapper>
  );
}

export default PostContent;
const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px auto 0px;
  padding: 0 3%;
  max-height: 45%;
  width: 90%;
  height: 25%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & .title {
    font-weight: 700;
    font-size: 1rem;
    line-height: 24px;
    margin-bottom: 5px;
  }
  & .text {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 19px;
    margin-bottom: 5px;
  }
`;
