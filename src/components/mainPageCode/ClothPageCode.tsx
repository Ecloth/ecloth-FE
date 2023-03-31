import React from 'react'
import styled from "styled-components";
import winterImg from "../../assets/images/temp4.jpeg"
import winterRainImg from "../../assets/images/temp4_rain.jpeg"
import earlyWinterImg from "../../assets/images/temp5~8.jpeg"
import earlyWinterRainImg from "../../assets/images/temp5~8_rain.jpeg"
import boginWinterImg from "../../assets/images/temp9~11.jpeg"
import boginWinterRainImg from "../../assets/images/temp9~11_rain.jpeg"
import fallImg from "../../assets/images/temp12~16.jpeg"
import fallRainImg from "../../assets/images/temp12~16_rain.jpeg"
import earlyFallImg from "../../assets/images/temp17~19.jpeg"
import earlyFallRainImg from "../../assets/images/temp17~19_rain.jpeg"
import earlySummerImg from "../../assets/images/temp20~22.jpeg"
import earlySummerRainImg from "../../assets/images/temp20~22_rain.jpeg"
import boginSummerImg from "../../assets/images/temp23~27.jpeg"
import boginSummerRainImg from "../../assets/images/temp23~27_rain.jpeg"
import summerImg from "../../assets/images/temp28~30.jpeg"
import summerRainImg from "../../assets/images/temp28~30_rain.jpeg"
import { useRecoilState } from 'recoil';
import { hourTempaState, precipitationState } from '../../atoms/Atom';

export default function ClothPageCode() {
  const [hourTempa, setHourTempa] = useRecoilState(hourTempaState);
  const [precipitation, setPrecipitation] = useRecoilState(precipitationState);

  const now = new Date();
  const hours = Number(("0" + now.getHours()).slice(-2) + "00");

  const tmpTime = [...hourTempa].map(el => {
    if(Number(el.fcstTime) === hours) {
      return Number(el.fcstValue)
    }
  });

  const curPrecipaitation = [...precipitation].map((el) => {
    if(Number(el.fcstTime) === hours) {
      return (el.fcstValue)
    }
  })
  const PTY = curPrecipaitation.filter((el) => el).find((a) => a)
  // const PTY = String(1)

  // 온도에 맞는 옷 차림 추천 로직
  const TMPTime = tmpTime.filter((el) => el).find((a) => a)
  const currentTemp : number | any = TMPTime;
  // const currentTemp : number | any = 4;
  let ClotheImg = "";
  const winter = currentTemp <= 4 ;
  const earlyWinter = currentTemp >= 5 && currentTemp <= 8;
  const boginWinter = currentTemp >= 9 && currentTemp <= 11;
  const fall = currentTemp >= 12 && currentTemp <= 16;
  const earlyFall = currentTemp >= 17 && currentTemp <= 19;
  const earlySummer = currentTemp >= 20 && currentTemp <= 22;
  const boginSummer = currentTemp >= 23 && currentTemp <= 27;
  const summer = currentTemp >= 28 && currentTemp <= 30;

  // 비오는 로직 추가

  if(winter && PTY === "0") {
    ClotheImg = winterImg;
  } else if(winter && PTY !== "0") {
    ClotheImg = winterRainImg;
  }

  if(earlyWinter && PTY === "0"){
    ClotheImg = earlyWinterImg
  } else if(earlyWinter && PTY !== "0") {
    ClotheImg = earlyWinterRainImg
  }

  if(boginWinter && PTY === "0") {
    ClotheImg = boginWinterImg
  } else if(boginWinter && PTY !== "0") {
    ClotheImg = boginWinterRainImg
  }

  if(fall && PTY === "0") {
    ClotheImg = fallImg
  } else if (fall && PTY !== "0") {
    ClotheImg = fallRainImg
  }

  if(earlyFall) {
    ClotheImg = earlyFallImg
  } else if(earlyFall && PTY !== "0") {
    ClotheImg = earlyFallRainImg
  }

  if(earlySummer && PTY === "0") {
    ClotheImg = earlySummerImg;
  } else if(earlySummer && PTY !== "0") {
    ClotheImg = earlySummerRainImg;
  }

  if(boginSummer && PTY === "0") {
    ClotheImg = boginSummerImg;
  } else if(boginSummer && PTY !== "0") {
    ClotheImg = boginSummerRainImg
  }

  if(summer && PTY === "0") {
    ClotheImg = summerImg
  } else if (summer && PTY !== "0") {
    ClotheImg = summerRainImg
  }

  if(ClotheImg) {
    return (
      <Img src={ClotheImg} />
      )
  } else {
    return (
      ""
    )
  }
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border : 5px solid #6aafe6;
`;