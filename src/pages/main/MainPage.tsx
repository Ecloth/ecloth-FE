import React, {useEffect} from "react";
import styled from "styled-components";
import {SlMagnifier} from "react-icons/sl";
import {BiCurrentLocation} from "react-icons/Bi";
import useGeolocation from "./useGeolocation";

export default function Main() {
  const location = useGeolocation();

  const handleLocationButton = () => {
    {
      location.loaded ? JSON.stringify(location) : "Location data not available yet.";
    }
  };
  return (
    <Body>
      <Topdiv>
        <Input type="text" placeholder="주요지명으로 입력" />
        <SlMagnifierButon>
          <SlMagnifier />
        </SlMagnifierButon>
        <SlMagnifierButon type="button" onClick={handleLocationButton}>
          <BiCurrentLocation />
        </SlMagnifierButon>
      </Topdiv>
      <Divmenu>
        <Weather>
          <Text>날씨 이미지 첨부</Text>
        </Weather>
        <Clothing>
          <Text>온도별 옷차림</Text>
        </Clothing>
      </Divmenu>
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
`;

const Topdiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
const Input = styled.input`
  font-size: 18px;
  padding: 15px;
  box-sizing: border-box;
  margin-left: 30px;
  margin-right: 10px;
  width: 45%;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const SlMagnifierButon = styled.button`
  width: 50px;
  height: 45px;
  margin: 0px;
  padding: 0px;
`;

const Divmenu = styled.div`
  display: flex;
`;
const Weather = styled.div`
  padding: 15px;
  margin-top: 30px;
  margin-left: 30px;
  border: 1px solid black;
  height: 450px;
  width: 800px;
  box-sizing: border-box;
`;
const Clothing = styled.div`
  padding: 15px;
  margin-top: 30px;
  margin-left: 30px;
  border: 1px solid black;
  height: 450px;
  width: 500px;
  box-sizing: border-box;
`;

const Text = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
`;
