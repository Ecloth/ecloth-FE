import React from 'react'
import styled from "styled-components";
import winterImg from "../../assets/images/0~5C.png"
import earlyWinterImg from "../../assets/images/6~9C.png"
import boginWinterImg from "../../assets/images/10~11C.png"
import failImg from "../../assets/images/12~16C.png"
import earlyFailImg from "../../assets/images/17~19C.png"
import summerImg from "../../assets/images/20~22C.png"
import { useRecoilState } from 'recoil';
import { hourTempaState } from '../../atoms/Atom';

export default function ClothePage() {
  const [hourTempa, setHourTempa] = useRecoilState(hourTempaState);
  const now = new Date();
  const hours = Number(("0" + now.getHours()).slice(-2) + "00");

  const tmpTime = [...hourTempa].map(el => {
    if(Number(el.fcstTime) === hours) {
      return Number(el.fcstValue)
    }
  });
  const TMPTime = tmpTime.filter((el) => el).find((a) => a)
  const currentTemp : number | undefined = TMPTime;
  let ClotheImg = "";

  const winter = currentTemp <= 5;
  const earlyWinter = currentTemp >= 6 && currentTemp <= 9;
  const boginWinter = currentTemp >= 10 && currentTemp <= 11;
  const fail = currentTemp >= 12 && currentTemp <= 16;
  const earlyFail = currentTemp >= 17 && currentTemp <= 19;
  const summer = currentTemp >= 20 && currentTemp <= 30;

  if (winter) {
    ClotheImg = winterImg;
  } else if (earlyWinter) {
    ClotheImg = earlyWinterImg;
  } else if (boginWinter) {
    ClotheImg = boginWinterImg;
  } else if (fail) {
    ClotheImg = failImg;
  } else if (earlyFail) {
    ClotheImg = earlyFailImg;
  } else if (summer) {
    ClotheImg = summerImg;
  } 
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
  border-radius: 10px;
`;