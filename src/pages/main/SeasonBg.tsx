import React, {useState} from "react";
import styled from "styled-components";
import snowDay from "../../assets/images/snowDay.jpeg";
import rainDay from "../../assets/images/rainDay.jpeg";
import sunnyDay from "../../assets/images/landscape.jpeg";
import { precipitationState } from "../../atoms/Atom";
import { useRecoilState } from "recoil";

export default function SeasonBg() {
  const [weather, setWeather] = useState<string>("");
  const [precipitation, setPrecipitation] = useRecoilState(precipitationState);
  const now = new Date();
  const hours = Number(("0" + now.getHours()).slice(-2) + "00");

  const curPrecipaitation = [...precipitation].map((el) => {
    if(Number(el.fcstTime) === hours) {
      return (el.fcstValue)
    }
  })
  const currentWeather = curPrecipaitation.filter((el) => el).find((a) => a)

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
    return "현재위치를 설정해주세요."
  }
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
