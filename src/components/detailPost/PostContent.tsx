import styled from "styled-components";
import RecordTime from "../commons/RecordTime";

function PostContent() {
  return (
    <PostWrapper>
      <span className="title">제목입니다.</span>
      <span className="text">
        내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
      </span>
      <RecordTime date={new Date().getDate() + "시간"} />
    </PostWrapper>
  );
}

export default PostContent;
const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto 0px;
  padding: 0 3%;
  max-height: 45%;
  width: 90%;
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
