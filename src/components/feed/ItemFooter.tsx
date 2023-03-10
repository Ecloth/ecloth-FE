import styled from "styled-components";

function ItemFooter() {
  return (
    <FooterWrapper>
      <UserInfo>
        <img className="profile" alt="profile" src="public/test.jpg"></img>
        <UserNickName>USER123</UserNickName>
      </UserInfo>
      <Views>조회수 35</Views>
    </FooterWrapper>
  );
}

export default ItemFooter;

const FooterWrapper = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
`;
const UserInfo = styled.span`
  display: block;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  .profile {
    width: 35px;
    height: 35px;
    overflow: hidden;
    border-radius: 50%;
  }
`;
const UserNickName = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin: 0;
  margin-left: 5px;
`;
const Views = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
`;
