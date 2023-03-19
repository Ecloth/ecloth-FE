import styled from 'styled-components';
import { useState } from 'react';
import MapSearch from './MapSearch';
import WeatherGraph from './WeatherGraph';
import LoadImg from './SeasonBg';
import Temperature from './Temperature';
import dfs_xy_conv from './GridTransformation.ts';
import {
  CurrentXState,
  CurrentYState,
  GridXState,
  GridYState,
} from '../../atoms/Atom';
import { useRecoilState } from 'recoil';
import ClothePage from './ClothePage';
import SeasonBg from './SeasonBg';

export default function MainPage() {
  const [latitude, setLatitude] = useState<number | any>();
  const [longitude, setLongitude] = useState<number | any>();
  const [gridX, setGridX] = useRecoilState<number | any>(GridXState);
  const [gridY, setGridY] = useRecoilState<number | any>(GridYState);
  const [currentX, setCurrentX] = useRecoilState<number | any>(CurrentXState);
  const [currentY, setCurrentY] = useRecoilState<number | any>(CurrentYState);

  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  });


  // LCC DFS 좌표변환 ( code : "toXY"(위경도->좌표, v1:위도, v2:경도), "toLL"(좌표->위경도,v1:x, v2:y) )
  const rs = dfs_xy_conv('toXY', currentY, currentX);
  const rx = dfs_xy_conv('toXY', gridY, gridX);
  return (
    <Body>
      <Topdiv>
        <MapSearch latitude={latitude} longitude={longitude} />
      </Topdiv>
      <Main>
        <Weather>
          <TemperatureDiv>
            <Temperature
              latitude={currentY}
              longitude={currentX}
              gridX={gridX}
              gridY={gridY}
            />
          </TemperatureDiv>
          <GraphDiv>
            <WeatherGraph />
          </GraphDiv>
          <SeasonBg />
        </Weather>
        <Clothing>
          <ClothePage />
        </Clothing>
      </Main>
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
  margin-top: 10px;
`;

const TemperatureDiv = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  margin-left: auto;
  background-color: #2b90d9;
  width: 30%;
  height: 20%;
  border-radius: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  opacity: 80%;
`;

const GraphDiv = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, -20%);
  margin-left: auto;
  background-color: #2b90d9;
  width: 90%;
  height: 30%;
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 80%;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 600px;
`;
const Weather = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  width: 90%;
  border: 1px solid transparent;
  border-radius: 5px;
  box-sizing: border-box;
  background-size: cover;
  position: relative;
`;
const Clothing = styled.div`
  padding: 15px;
  margin-right: 10px;
  width: 40%;
  box-sizing: border-box;
`;
