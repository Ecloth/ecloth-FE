import React from 'react'
import styled from "styled-components";
import winterImg from "../../assets/images/temp4.jpeg"
import earlyWinterImg from "../../assets/images/temp5~8.jpeg"
import boginWinterImg from "../../assets/images/temp9~11.jpeg"
import fallImg from "../../assets/images/temp12~16.jpeg"
import earlyFallImg from "../../assets/images/temp17~19.jpeg"
import earlySummerImg from "../../assets/images/temp20~22.jpeg"
import boginSummerImg from "../../assets/images/temp23~27.jpeg"
import summerImg from "../../assets/images/temp28~30.jpeg"
import { useRecoilState } from 'recoil';
import { hourTempaState, precipitationState } from '../../atoms/Atom';

export default function ClothePage() {
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

  // 온도에 맞는 옷 차림 추천 로직
  const TMPTime = tmpTime.filter((el) => el).find((a) => a)
  const currentTemp : number | any = TMPTime;
  let ClotheImg = "";

  const winter = currentTemp <= 4 ;
  const earlyWinter = currentTemp >= 5 && currentTemp <= 8;
  const boginWinter = currentTemp >= 9 && currentTemp <= 11;
  const fall = currentTemp >= 12 && currentTemp <= 16;
  const earlyFall = currentTemp >= 17 && currentTemp <= 19;
  const earlySummer = currentTemp >= 20 && currentTemp <= 22;
  const boginSummer = currentTemp >= 23 && currentTemp <= 27;
  const summer = currentTemp >= 28 && currentTemp <= 30;

  if (winter) {
    ClotheImg = winterImg;
  } else if (earlyWinter) {
    ClotheImg = earlyWinterImg;
  } else if (boginWinter) {
    ClotheImg = boginWinterImg;
  } else if (fall) {
    ClotheImg = fallImg;
  } else if (earlyFall) {
    ClotheImg = earlyFallImg;
  } else if (earlySummer) {
    ClotheImg = earlySummerImg;
  } else if(boginSummer) {
    ClotheImg = boginSummerImg
  } else if(summer) {
    ClotheImg = summerImg
  } 
  // 비오는 로직 추가
  // earlyWinter && PTY === "0" ? ClotheImg = summerImg : ClotheImg = summerImg

  if(ClotheImg) {
    return (
      <Img src={ClotheImg} />
      )
  } else {
    return (
      "현재위치를 설정해주세요."
    )
  }
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border : 5px solid #6aafe6;
`;