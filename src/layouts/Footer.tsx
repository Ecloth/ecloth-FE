import styled from "styled-components";
import {AiOutlineCopyright, AiFillGithub} from "react-icons/ai";
import {RxNotionLogo} from "react-icons/rx";

function Footer() {
  const handleGithubonClick = () => {
    console.log();
  };
  return (
    <FootWrapper>
      <CopyRight>
        {" "}
        <AiOutlineCopyright></AiOutlineCopyright>Created by 잘할수있조 | 2023{" "}
      </CopyRight>
      <InfoWrapper>
        <ProjectInfo>
          <div>PROJECT</div>
          ECloth
          <br />
          @잘할수있조
          <br />
          @BE: 손한별, 이윤지, 최고은
          <br />
          @FE: 서유림, 장기철
        </ProjectInfo>
        <ProjectInfo>이용약관</ProjectInfo>
        <Contact>
          Contact
          <button onClick={handleGithubonClick}>
            {" "}
            <AiFillGithub className="icon"></AiFillGithub>
          </button>
          <button onClick={handleGithubonClick}>
            {" "}
            <RxNotionLogo className="icon"></RxNotionLogo>
          </button>
        </Contact>
      </InfoWrapper>
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
  height: 380px;
  box-sizing: border-box;
  color: #fff;
  background-color: var(--grayColor2);
`;

const CopyRight = styled.span`
  display: block;
  padding-top: 30px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;
const InfoWrapper = styled.span`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 60px auto;
  justify-content: space-between;
`;

const ProjectInfo = styled.span`
  display: block;
  width: fit-content;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  font-weight: 500;

  & div {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 20px;
  }
`;

const Contact = styled.span`
  display: block;
  display: flex;
  align-items: flex-end;

  & button {
    width: 30px;
    height: 30px;
    padding: 5px;
    margin: 0;
    background-color: inherit;
    border: 0;
    margin-left: 10px;
    cursor: pointer;
  }
  & .icon {
    font-size: 1.5rem;
    color: #fff;
  }
`;
