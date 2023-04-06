import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FollowButtonList from "./FollowButtonList";
import { FOLLOW_DIRECTION, IFollows } from "../../types/followType";
import { useParams } from "react-router-dom";

function FollowList({ isFollow }: { isFollow: string }) {
  const [followList, setFollowList] = useState<IFollows[]>([]);
  const param = useParams().id;
  const memberId = parseInt(param as string, 10);

  useEffect(() => {
    const params = {
      dir: isFollow,
      page: 1,
      size: 5,
      sortBy: "registerDate",
      sortOrder: "DESC",
    };
    axios
      .get(`http://13.125.74.102:8080/api/member/${memberId}/follows`, {
        params,
      })
      .then(function (response) {
        console.log(response.data);
        setFollowList(response.data.follow_list);
      });
  }, []);

  return (
    <SectionWrapper>
      <div className="header">{isFollow}</div>
      <div className="followerList">
        {followList.map((item) => (
          <div className="followerItem" key={item.target_id}>
            <div className="profile">
              <img src={item.profile_image_path} alt="profile"></img>
              <div className="nickName">{item.nickname}</div>
            </div>
            <FollowButtonList memberId={item.target_id} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default FollowList;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  & .header {
    padding: 8px 0;
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
  & .followerItem {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    padding: 8px 16px;
    .profile {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 70%;

      & img {
        width: 45px;
        height: 45px;
        border-radius: 50px;
        margin-right: 12px;
      }
    }
    & .nickName {
      font-weight: 600;
    }

    & .buttonWrapper {
      width: 20%;
    }
  }
`;
