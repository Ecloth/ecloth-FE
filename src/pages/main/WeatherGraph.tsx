import React from 'react'
import { useRecoilState } from 'recoil';
import styled from "styled-components";
import { hourTempaState, precipitationState } from '../../atoms/Atom';
import { Line, LineChart, ResponsiveContainer, Text, Tooltip, XAxis, ZAxis } from 'recharts';
import HorizontalScroll from 'react-scroll-horizontal';
import { AiFillCloud } from 'react-icons/ai';
import { BsFillCloudDrizzleFill } from 'react-icons/bs';
import { BsFillCloudSnowFill } from 'react-icons/bs';
import { BsCloudSleetFill } from 'react-icons/bs';
import cliud from "../../assets/images/cloud.png"

export default function WeatherGraph() {
  const [hourTempa, setHourTempa] = useRecoilState(hourTempaState);
  const [precipitation, setPrecipitation] = useRecoilState(precipitationState);

  const data = [...hourTempa].map((el) => (
    {name : el.fcstTime.substring(0,2) + "시", temp : el.fcstValue}
    )).splice(1)

    const ptyForm = [...precipitation].map((el) => el.fcstValue);

    const PTYForm = ptyForm.map((el) => {
      if (el === '0') {
        return '맑음';
      } else if (el === '1') {
        return '비';
      } else if (el === '2') {
        return '비 또는 눈';
      } else if (el === '3') {
        return '눈';
      }
    });
  const test = PTYForm.map((el) => {
      if (el === '맑음') {
        return <AiFillCloud size={'70px'} color={'white'} />;
      } else if (el === '비') {
        return <BsFillCloudDrizzleFill size={'70px'} color={'white'} />;
      } else if (el === '비 또는 눈') {
        return <BsCloudSleetFill size={'70px'} color={'white'} />;
      } else if (el === '눈') {
        return <BsFillCloudSnowFill size={'70px'} color={'white'} />;
      }
    })
    const data2 = PTYForm.map((el) => (
      {name : el}
    ))
  return (
    <>
    <HorizontalScroll style={{top: "0px", width:800}}>
    <GraphSpan>
    <ResponsiveContainer width={3000} height={80}>
    <LineChart data={data2} margin={{ top: 0, left: 20, bottom: 20 }}>
      <XAxis interval="preserveStartEnd" minTickGap={5} dataKey="name" tickLine={false} axisLine={false} stroke="white" fontSize={"60"} fontWeight={"bold"} />
  </LineChart>
  </ResponsiveContainer>
    <ResponsiveContainer width={3000} height={110}>
    <LineChart data={data} margin={{ top: 40, left: 0, bottom: 20 }}>
      <XAxis interval="preserveStartEnd"  minTickGap={5} dataKey="name" tickLine={false} axisLine={false} stroke="#86ff05" fontWeight={"bold"}/>
      <Tooltip contentStyle={{backgroundColor: "rgb(43, 144, 217)", borderRadius: "10px"}}/> 
    <Line type="monotone" dataKey="temp" stroke="#FEE500" strokeWidth={4} unit="도" name="온도"/>
  </LineChart>
  </ResponsiveContainer>
  </GraphSpan>
  </HorizontalScroll>
  </>
  )
}

const GraphSpan = styled.div`
  /* margin-right: 150px; */
  position : relative;
  right: 400px;
  /* left: 100px; */
`;

const PTYFormDiv = styled.div`
width: 3000px;
  top : 40px;
`