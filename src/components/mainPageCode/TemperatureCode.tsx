import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dfs_xy_conv from '../../components/mainPageCode/GridTransformation';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { CiTempHigh } from 'react-icons/ci';
import { AiFillCloud } from 'react-icons/ai';
import { BsFillCloudDrizzleFill } from 'react-icons/bs';
import { BsFillCloudSnowFill } from 'react-icons/bs';
import { BsCloudSleetFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import {
  CurrentXState,
  CurrentYState,
  GridXState,
  GridYState,
  hourTempaState,
  precipitationState,
} from '../../atoms/Atom';

interface MapSearchProps {
  latitude?: number | any;
  longitude?: number | any;
  gridX?: number | any;
  gridY?: number | any;
}

const remote = axios.create();

export default function TemperatureCode(props: MapSearchProps) {
  const [hourTempa, setHourTempa] = useRecoilState(hourTempaState);
  const [precipitation, setPrecipitation] = useRecoilState(precipitationState);
  const [gridX, setGridX] = useRecoilState<number | any>(GridXState);
  const [gridY, setGridY] = useRecoilState<number | any>(GridYState);
  const [currentX, setCurrentX] = useRecoilState<number | any>(CurrentXState);
  const [currentY, setCurrentY] = useRecoilState<number | any>(CurrentYState);

  // 기상청 api URL 베이스타임 시간 계산
  const baseTime = [200, 500, 800, 1100, 1400, 1700, 2000, 2300];
  const now = new Date();
  const year = now.getFullYear();
  const month = ('0' + (now.getMonth() + 1)).slice(-2);
  const date = ('0' + now.getDate()).slice(-2);
  const hours: number | any =
    now.getHours() < 10 && now.getHours() >= 0
      ? '0' + now.getHours() + '00'
      : now.getHours() + '00';

  // solution = baseTime과 가장 가까운 시간;
  const closeHours: number | any =
    now.getHours() < 10 && now.getHours() >= 0
      ? '0' +
        baseTime
          .filter(
            (a) =>
              Math.abs(a - hours) ===
              Math.min(...baseTime.map((a) => Math.abs(a - hours))),
          )
          .sort((a, b) => a - b)[0]
      : baseTime
          .filter(
            (a) =>
              Math.abs(a - hours) ===
              Math.min(...baseTime.map((a) => Math.abs(a - hours))),
          )
          .sort((a, b) => a - b)[0];

  const solution: string = closeHours + 100 > hours ? closeHours - 300 : closeHours;

  const curBaseTime: string = solution < '1000' ? '0' + solution : solution;

  // 금일 날짜 ex) 20230312
  const currentDate = Number(`${year}${month}${date}`);

  // 시간당 온도
  const tmpTime = [...hourTempa]
    .map((el) => {
      if (el.fcstTime === hours) {
        return el.fcstValue;
      }
    })
    .find((a) => a);

  // 시간당 강수형태
  const ptyForm = [...precipitation].map((el) => {
    if (el.fcstTime === hours) {
      return el.fcstValue;
    }
  });

  // const PTYForm = ["비"];
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

  useEffect(() => {
      // 지역검색 / 현재위치 값 초기화
  const test = currentX != null ? currentX : gridX;
  const test2 = currentY != null ? currentY : gridY;
     // 격자 X Y 값
  const rs = dfs_xy_conv('toXY', test2, test);

    remote
      .get(
        `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=AUAtxZM0Y3JjyLVDdxQAvOobhLHtdxSd5MBrSFmUOHFrDfjfEl4TlLcbE6atZvQrSSYwiXIZo%2BOnQJP7j3JUGg%3D%3D&numOfRows=310&pageNo=1&dataType=JSON&base_date=${currentDate}&base_time=${curBaseTime}&nx=${rs.x}&ny=${rs.y}`,
      )
      .then((responseData) => {
        const result = responseData.data.response.body.items.item;
        const TMP = result.filter((el: any) => el.category === 'TMP');
        const PTY = result.filter((el: any) => el.category === 'PTY');
        setHourTempa(TMP);
        setPrecipitation(PTY);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [gridX, currentX]);

  return (
    <TempDiv>
      <TempForm>
        <CiTempHigh size={'70px'} color={'white'} />
        {tmpTime}
        <TbTemperatureCelsius size={'70px'} color={'white'} />
      </TempForm>
      <TempSpan>
        {PTYForm.map((el) => {
          if (el === '맑음') {
            return <AiFillCloud size={'70px'} color={'white'} />;
          } else if (el === '비') {
            return <BsFillCloudDrizzleFill size={'70px'} color={'white'} />;
          } else if (el === '비 또는 눈') {
            return <BsCloudSleetFill size={'70px'} color={'white'} />;
          } else if (el === '눈') {
            return <BsFillCloudSnowFill size={'70px'} color={'white'} />;
          }
        }).find((a) => a)}{' '}
        <br></br>
      </TempSpan>
    </TempDiv>
  );
}
const TempDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TempForm = styled.form`
  color: white;
  opacity: 100%;
  font-size: 65px;
  display: flex;
`;

const TempSpan = styled.div`
  font-size: 30px;
  margin-left: 10px;
`;
