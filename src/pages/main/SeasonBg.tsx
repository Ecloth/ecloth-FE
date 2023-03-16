import React, {useState} from "react";
import styled from "styled-components";
import snowDay from "../../assets/images/snowDay.jpeg";
import rainDay from "../../assets/images/rainDay.jpeg";
import sunnyDay from "../../assets/images/landscape.jpeg";

export default function SeasonBg() {
  const [weather, setWeather] = useState<string>("");

  const currentWeather = "rainDay";
  let backgroundImg = "";
  const winter = currentWeather == "winterDay";
  const rain = currentWeather == "rainDay";
  const sunny = currentWeather == "sunnyDay";

  if (winter) {
    backgroundImg = snowDay;
  } else if (rain) {
    backgroundImg = rainDay;
  } else if (sunny) {
    backgroundImg = sunnyDay;
  }

  return (
    <>
      <Img src={backgroundImg} />
    </>
  );
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
