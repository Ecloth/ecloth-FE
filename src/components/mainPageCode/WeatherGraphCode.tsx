import React from 'react'
import { useRecoilState } from 'recoil';
import styled from "styled-components";
import { hourTempaState, precipitationState } from '../../atoms/Atom';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import HorizontalScroll from 'react-scroll-horizontal';
import { AiFillCloud } from 'react-icons/ai';
import { BsFillCloudDrizzleFill } from 'react-icons/bs';
import { BsFillCloudSnowFill } from 'react-icons/bs';
import { BsCloudSleetFill } from 'react-icons/bs';
import cliud from "../../assets/images/cloud.png"

export default function WeatherGraphCode() {
  const [hourTempa, setHourTempa] = useRecoilState(hourTempaState);
  const [precipitation, setPrecipitation] = useRecoilState(precipitationState);

  const data = [...hourTempa].map((el) => (
    {name : el.fcstTime.substring(0,2) + "시", temp : el.fcstValue}
    )).splice(1)

    const ptyForm = [...precipitation].map((el) => el.fcstValue);
    
    const PTYForm = ptyForm.map((el) => {
      if (el === '0') {
        return "맑음"
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
        return <AiFillCloud size={'40px'} color={'white'} />;
      } else if (el === '비') {
        return <BsFillCloudDrizzleFill size={'40px'} color={'white'} />;
      } else if (el === '비 또는 눈') {
        return <BsCloudSleetFill size={'40px'} color={'white'} />;
      } else if (el === '눈') {
        return <BsFillCloudSnowFill size={'40px'} color={'white'} />;
      }
    })

    const data2 = PTYForm.map((el) => (
      {name : el}
    ))
  return (
    <>
    <HorizontalScroll style={{top: "30px", width:2000}}>
    <GraphSpan>
    <ResponsiveContainer width={3000} height={30}>
    <LineChart data={data} margin={{ top: 0, left: 60 }}>
      <XAxis interval="preserveStartEnd" minTickGap={5} dataKey="name" tickLine={false} axisLine={false} stroke="white" fontSize={"60"} fontWeight={"bold"} />
  </LineChart>
  </ResponsiveContainer>
    <ResponsiveContainer width={3000} height={110}>
    <LineChart data={data} margin={{ top: 30, bottom: 30 }}>
      <XAxis interval="preserveStartEnd"  minTickGap={5} dataKey="temp" tickLine={false} axisLine={false} stroke="#86ff05" fontWeight={"bold"} fontSize="20px" unit="°C"/>
      <YAxis axisLine={false} tick={false}/>
      <Tooltip contentStyle={{backgroundColor: "rgb(43, 144, 217)", borderRadius: "10px"}} cursor={{ stroke: '#FEE500', strokeWidth: 2 }} filterNull={false}/> 
    <Line type="monotone" dataKey="temp" stroke="#FEE500" strokeWidth={5} unit="°C" name="온도" activeDot={{ r: 8 }}/>
  </LineChart>
  </ResponsiveContainer>
    <ResponsiveContainer width={3000} height={90}>
    <LineChart data={data2} margin={{ top: 10, left: 65, bottom: 60 }}>
      <XAxis interval="preserveStartEnd" minTickGap={5} dataKey="name" tickLine={false} axisLine={false} stroke="white" fontSize={"60"} fontWeight={"bold"} />
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
  right: 520px;
  /* left: 100px; */
`;