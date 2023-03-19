import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {SlMagnifier} from "react-icons/sl";
import {BiCurrentLocation} from "react-icons/Bi";
import {useDaumPostcodePopup} from "react-daum-postcode";
import {postcodeScriptUrl} from "react-daum-postcode/lib/loadPostcode";
import { useRecoilState } from "recoil";
import { CurrentXState, CurrentYState, GridXState, GridYState} from "../../atoms/Atom";

interface MapSearchProps {
  latitude?: number;
  longitude?: number;
}

export default function MapSearch(props: MapSearchProps) {
  const [locationObj, setLocationObj] = useState<any>({});
  const [fullAddress, setFullAddress] = useState<string>();
  const [gridX, setGridX] = useRecoilState(GridXState);
  const [gridY, setGridY] = useRecoilState(GridYState);
  const [currentX, setCurrentX] = useRecoilState(CurrentXState);
  const [currentY, setCurrentY] = useRecoilState(CurrentYState);

  const API = import.meta.env.VITE_APP_apikey;
  const handleLocationButton = async () => {
    if(gridX && gridY != null) {
      setGridX("");
      setGridY("");
    }
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
          setLocationObj({
            si: location.address.region_1depth_name,
            gu: location.address.region_2depth_name,
            dong: location.address.region_3depth_name,
            address_name: location.address.address_name,
          });
        });
        setFullAddress("");
    } catch (error) {
      console.log(error);
    }
  };

  const open = useDaumPostcodePopup(postcodeScriptUrl);

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

  const locationText = locationObj.si ? locationObj.si : "지역을 설정해주세요.";

  const handleClick = () => {
    open({onComplete: handleComplete});
    if(currentX && currentY != null){
      setCurrentX("");
      setCurrentY("");
    }

  };

  const remote = axios.create();

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
    })
    .catch(error => {
      console.log(error);
    });

  remote
    .get(`https://dapi.kakao.com/v2/local/search/address.json?query="${locationObj.address_name}"`, {
      headers: {
        Authorization: `KakaoAK ${API}`,
      },
    })
    .then(responseData => {
      const currentX = responseData.data.documents[0].x;
      const currentY = responseData.data.documents[0].y;
      setCurrentX(currentX);
      setCurrentY(currentY);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <>
      <RegionSearchText>{fullAddress ? fullAddress : locationText}</RegionSearchText>
      <SlMagnifierButon type="button" onClick={handleClick}>
        <SlMagnifier />
      </SlMagnifierButon>
      <SlMagnifierButon type="button" onClick={handleLocationButton}>
        <BiCurrentLocation />
      </SlMagnifierButon>
      <ClothesnText>
        <span>오늘의 옷 추천!</span>
      </ClothesnText>
    </>
  );
}

const RegionSearchText = styled.section`
  font-size: 18px;
  padding: 15px;
  box-sizing: border-box;
  margin-left: 10px;
  margin-right: 10px;
  min-width: 40%;
  width: auto;
  background: #6aafe6;
  border: none;
  border-radius: 5px;
  color: white;
  height: 50px;
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
  margin-right: 90px;
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
  height: 50px;
  padding: 0px;
  border-radius: 10px;
  background-color: #d4dfe6;
  border: none;
  cursor: pointer;
`;
