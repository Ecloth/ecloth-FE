import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {SlMagnifier} from "react-icons/sl";
import {BiCurrentLocation} from "react-icons/bi";
import {useDaumPostcodePopup} from "react-daum-postcode";
import {postcodeScriptUrl} from "react-daum-postcode/lib/loadPostcode";
import { useRecoilState } from "recoil";
import { CurrentXState, CurrentYState, GridXState, GridYState, isLoginState} from "../../atoms/Atom";
import dfs_xy_conv from "./GridTransformation";

interface MapSearchProps {
  latitude?: number;
  longitude?: number;
}

export default function MapSearchCode(props: MapSearchProps) {
  const [locationObj, setLocationObj] = useState<any>(localStorage.getItem("location"));
  const [fullAddress, setFullAddress] = useState<string>();
  const [gridX, setGridX] = useRecoilState(GridXState);
  const [gridY, setGridY] = useRecoilState(GridYState);
  const [currentX, setCurrentX] = useRecoilState(CurrentXState);
  const [currentY, setCurrentY] = useRecoilState(CurrentYState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);


  // 백으로 보낼 격자 x,y 값
  const currentValue = dfs_xy_conv('toXY', currentY, currentX);
  const searchValue = dfs_xy_conv('toXY', gridY, gridX);

  // 현재위치 설정 버튼 로직
  const API = import.meta.env.VITE_APP_apikey;

  const handleLocationButton = async () => {
    try {
      const res = await axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${props.longitude}&y=${props.latitude}`,
          {
            headers: {
              Authorization: `KakaoAK ${API}`,
            },
          },
        )
        .then(res => {
          const location = res.data.documents[0];
          localStorage.setItem("location", location.address.address_name)
          setLocationObj(location.address.address_name)
        });
        setFullAddress("");
    } catch (error) {
      console.log(error);
    }
    setIsLogin(false)
  };
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  // 지역 검색 로직
  const handleComplete = (data: any) => {
    let fullAddress = data.jibunAddress;
    let extraAddress = "";
    if (data.addressType === "J") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    //fullAddress -> 전체 주소반환
    setFullAddress(fullAddress);
    setLocationObj("");
  };

  // localstorage 현재위치 저장
  const location = localStorage.getItem("location")
  const locationText = location ? location : "지역을 설정해주세요.";

  // 지역검색 다음 모달창 open
  const handleClick = () => {
    open({onComplete: handleComplete});
  };
  
  useEffect(() => {

    const remote = axios.create();
    // 지역검색 주소 값 => 위도 경도 변환  
    remote
      .get(`https://dapi.kakao.com/v2/local/search/address.json?query="${fullAddress}"`, {
        headers: {
          Authorization: `KakaoAK ${API}`,
        },
      })
      .then(responseData => {
        const gridx = responseData.data.documents[0].x;
        const gridy = responseData.data.documents[0].y;
        setGridX(gridx);
        setGridY(gridy);
        setCurrentX(null);
        setCurrentY(null);
      })
      .catch(error => {
        console.log(error);
      });
  
    // 현재위치 주소 값 => 위도 경도 변환
    remote
      .get(`https://dapi.kakao.com/v2/local/search/address.json?query="${locationObj}"`, {
        headers: {
          Authorization: `KakaoAK ${API}`,
        },
      })
      .then(responseData => {
        const currentX = responseData.data.documents[0].x;
        const currentY = responseData.data.documents[0].y;
        setCurrentX(currentX);
        setCurrentY(currentY);
        setGridX(null)
        setGridY(null)
      })
      .catch(error => {
        console.log(error);
      });
  }, )


  return (
    <>
      <RegionSearchText>{fullAddress ? fullAddress : locationText}</RegionSearchText>
      <SlMagnifierButon type="button" onClick={handleClick}>
        <SlMagnifier style={{display: "inline", marginBottom: "4px"}}/>
      </SlMagnifierButon>
      <SlMagnifierButon type="button" onClick={handleLocationButton}>
        <BiCurrentLocation style={{display: "inline", marginBottom: "4px"}}/>
      </SlMagnifierButon>
      {/* <ClothesnText> */}
        {/* <span>오늘의 옷 추천!</span> */}
      {/* </ClothesnText> */}
    </>
  );
}

const RegionSearchText = styled.section`
  font-size: 18px;
  padding: 15px;
  box-sizing: border-box;
  margin-left: 10px;
  margin-right: 10px;
  min-width: 50%;
  width: auto;
  background: rgb(243,244,246);
  border: none;
  border-radius: 5px;
  color: black;
  /* height: 50px; */
  ::placeholder {
    color: white;
  }
`;

const ClothesnText = styled.section`
  text-align: center;
  font-weight: bold;
  padding: 15px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: 80px;
  background: #2b90d9;
  border: none;
  border-radius: 50px;
  color: white;
  min-width: 20%;
  width: auto;
  height: 50px;
  line-height: 20px;
  ::placeholder {
    color: white;
  }
`;

const SlMagnifierButon = styled.button`
  margin-right: 10px;
  width: 50px;
  height: 53px;
  padding: 0px;
  border-radius: 10px;
  background-color: #d4dfe6;
  border: none;
  cursor: pointer;
`;
