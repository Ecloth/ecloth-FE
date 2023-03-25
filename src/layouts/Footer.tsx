import styled from "styled-components";
import {AiOutlineCopyright} from "react-icons/ai";

function Footer() {
  return (
    <FootWrapper>
      <CopyRight>
        {" "}
        <AiOutlineCopyright></AiOutlineCopyright>Created by 잘할수있조 | 2023{" "}
      </CopyRight>
    </FootWrapper>
  );
}

export default Footer;

const FootWrapper = styled.footer`
  margin: 0;
  margin-top: 90px;
  bottom: 0px;
  left: 0px;
  padding: 0px;
  width: 100vw;
  height: 400px;
  box-sizing: border-box;
  color: #fff;
  background-color: var(--grayColor);
`;

const CopyRight = styled.div`
  padding-top: 30px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;
