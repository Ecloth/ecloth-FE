import styled from "styled-components";

function ChattingHeader() {
  return (
    <HeaderWrapper>
      <div className="user">USER</div>
      <div className="option">option</div>
    </HeaderWrapper>
  );
}

export default ChattingHeader;

const HeaderWrapper = styled.span`
  height: 15%;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  justify-content: space-between;
  .user {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }

  .option {
    margin-right: 5px;
  }
`;
