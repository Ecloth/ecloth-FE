import React, {useState} from "react";
import styled from "styled-components";
import snowDay from "../../assets/images/snowDay.jpeg";
import rainDay from "../../assets/images/rainDay.jpeg";
import sunnyDay from "../../assets/images/landscape.jpeg";
import { precipitationState } from "../../atoms/Atom";
import { useRecoilState } from "recoil";
import BounceLoader from "react-spinners/BounceLoader"

export default function SeasonBgCode() {
  const [weather, setWeather] = useState<string>("");
  const [precipitation, setPrecipitation] = useRecoilState(precipitationState);
  const now = new Date();
  const hours = Number(("0" + now.getHours()).slice(-2) + "00");

  const curPrecipaitation = [...precipitation].map((el) => {
    if(Number(el.fcstTime) === hours) {
      return (el.fcstValue)
    }
  })

  // 현재 기상에 맞는 배경이미지 전시
  const currentWeather = curPrecipaitation.filter((el) => el).find((a) => a)
  // const currentWeather = 1

  let backgroundImg = "";
  const winter = currentWeather == "3";
  const rain = currentWeather == "1";
  const sunny = currentWeather == "0";

  if (winter) {
    backgroundImg = snowDay;
  } else if (rain) {
    backgroundImg = rainDay;
  } else if (sunny) {
    backgroundImg = sunnyDay;
  }
  if(backgroundImg) {
    return (
      <>
        <Img src={backgroundImg} />
      </>
    );
  } else {
    return (
      <Background>
      <Content>
        지역을 설정하면 날씨를 확인할 수 있습니다.
        </Content>
        <BounceLoader color="#6aafe6" style={{position: "absolute", left: "600px", top:"270px"}} size="100"/>
      </Background>
    )
  }
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Background = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
`
const Content = styled.div`
  background-color : #6aafe6;
  color: white;
  width: 600px;
  height: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  font-size: 30px;
  margin-top: 80px;
  margin-left: 350px;
`
