import {useRef} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

function EditSideBar() {
  const liRef = useRef<HTMLLIElement>(null);

  const handleLionClick = () => {
    if (liRef.current?.className.includes("select")) {
      liRef.current.classList.remove("select");
    }
    liRef.current?.classList.add("select");
  };
  return (
    <SideBarWrapper>
      <li ref={liRef} className="" onClick={handleLionClick}>
        <Link to="/profile/edit" className="linkItem">
          프로필 편집
        </Link>
      </li>
      <li ref={liRef} className="" onClick={handleLionClick}>
        <Link to="/profile/delete" className="linkItem">
          회원탈퇴
        </Link>
      </li>
      <li ref={liRef} className="" onClick={handleLionClick}>
        <Link to="/profile/logout" className="linkItem">
          로그아웃
        </Link>
      </li>
    </SideBarWrapper>
  );
}

export default EditSideBar;

const SideBarWrapper = styled.ul`
  box-sizing: border-box;
  width: 30%;
  height: 100%;
  margin: 0;
  padding: 5% 0;
  border-right: 1px solid var(--grayColor2);

  & li {
    padding-left: 20px;
    margin-bottom: 15px;

    cursor: pointer;
    & .linkItem {
      color: #000;
    }
  }

  & .select {
    border-left: 2px solid #000;
  }
`;
