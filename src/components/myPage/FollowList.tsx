import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import FollowButtonList from "./FollowButtonList";
import { FOLLOW_DIRECTION, IFollows } from "../../types/followType";

export const followDummyData :IFollows[]= [
    {
      "target_id": 2,
      "nickName": "test2",
      "profile_image_path": "https://www.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg",
      "follow_status" : true,
    },
    {
      "target_id": 3,
      "nickName": "test3",
      "profile_image_path":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPj4jA8TYFk8aEbMCexpuvls4PYXcYyqNyQ&usqp=CAU" ,
      "follow_status" : true,
    }
];
export const followerDummyData:IFollows[] = [
    {
      "target_id": 2,
      "nickName": "test2",
      "profile_image_path": "https://www.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg",
      "follow_status" : true,
    },
    {
      "target_id": 3,
      "nickName": "test3",
      "profile_image_path":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPj4jA8TYFk8aEbMCexpuvls4PYXcYyqNyQ&usqp=CAU" ,
      "follow_status" : false,
    },
    {
      "target_id": 4,
      "nickName": "test4",
      "profile_image_path":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPj4jA8TYFk8aEbMCexpuvls4PYXcYyqNyQ&usqp=CAU" ,
      "follow_status" : true,
    },
    {
      "target_id": 5,
      "nickName": "test5",
      "profile_image_path":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPj4jA8TYFk8aEbMCexpuvls4PYXcYyqNyQ&usqp=CAU" ,
      "follow_status" : false,
    }
];





function FollowList({isFollow}: {isFollow: boolean}) {
  const followList = followDummyData;
  const followerList = followerDummyData;
  const checkFollow = isFollow ? FOLLOW_DIRECTION.follow :FOLLOW_DIRECTION.follower;

  useEffect(() => {
    axios({
      method:'get',
      url:'api/member/{memberId}/follow',
      params:{
        dir:checkFollow,
        memberId: 1,
        page:1,
        size:5,
        sortBy:'registerDate',
        sortOrder:'DESC',
      },
      baseURL: 'http://localhost:8080'
    })
    .then(function (response) {
      // 성공한 경우 실행
      console.log(response);
    })
    .catch(function (error) {
      // 에러인 경우 실행
      console.log(error);
    })
    .then(function () {
      // 항상 실행
    });
  },[])

  return (
    <SectionWrapper>
      <div className="header">{isFollow ? "팔로잉 " : " 팔로워"}</div>
      <div className="followerList">
        {isFollow ? followList.map((item) => (
        <div className="followerItem">
          <div className="profile">
            <img src={item.profile_image_path} alt="profile"></img>
            <div className="nickName">{item.nickName}</div>
          </div>
          <FollowButtonList following={item.follow_status} memberId={item.target_id} />
        </div>
          ))
          :followerList.map((item) => (
            <div className="followerItem">
              <div className="profile">
                <img src={item.profile_image_path} alt="profile"></img>
                <div className="nickName">{item.nickName}</div>
              </div>
              <FollowButtonList following={item.follow_status} memberId={item.target_id} />
            </div>
              ))
        }
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
