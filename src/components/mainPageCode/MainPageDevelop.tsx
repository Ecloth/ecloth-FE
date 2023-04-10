import styled from 'styled-components';
import React, { useState } from "react";
import Nav from "../../layouts/Nav";
import Navv from "../../layouts/Navv";
import { useRecoilState } from "recoil";
import {
  CurrentXState,
  CurrentYState,
  GridXState,
  GridYState,
  ImageState,
  NicknameState,
} from "../../atoms/Atom";
import MapSearchCode from "./MapSearchCode";
import Temperature from "../../pages/main/Temperature";
import WeatherGraph from '../../pages/main/WeatherGraph';
import SeasonBg from '../../pages/main/SeasonBg';
import ClothPage from '../../pages/main/ClothPage';

export default function MainPageDevelop() {
  const [latitude, setLatitude] = useState<number | any>();
  const [longitude, setLongitude] = useState<number | any>();
  const [gridX, setGridX] = useRecoilState<number | any>(GridXState);
  const [gridY, setGridY] = useRecoilState<number | any>(GridYState);
  const [currentX, setCurrentX] = useRecoilState<number | any>(CurrentXState);
  const [currentY, setCurrentY] = useRecoilState<number | any>(CurrentYState);
  const [nick, setNick] = useRecoilState<string | any>(NicknameState);
  const [image, setImage] = useRecoilState(ImageState);
  setNick("장기철");

  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  });

  return (
    <>
      <div class="flex w-full bg-white">
        {/* <Navv />   */}
        <main class="min-h-screen border-l bg-white">
          <nav class="flex items-center justify-between border-b bg-white px-10 py-6">
            <div class="flex w-5/6 items-center">
              <MapSearchCode latitude={latitude} longitude={longitude} />
            </div>
            <div class="flex items-center space-x-4">
              <img class="w-8 rounded-full" src={image} alt="Image" />
              <p class="hidden md:block">{nick}</p>
            </div>
          </nav>
          <div class="mx-6">
            {/* <h1 class="my-6 text-3xl">날씨</h1> */}

            <div class="mt-4 space-y-3 md:flex md:space-y-0">
              <div class="ml-auto h-25 rounded-md bg-gradient-to-r bg-sky-400 p-3 absolute right-14 top-40">
                  <Temperature
                    latitude={currentY}
                    longitude={currentX}
                    gridX={gridX}
                    gridY={gridY}
                  />
            </div>
                <GraphDiv>
                <WeatherGraph />
                </GraphDiv>
                <SeasonBg />
            </div>
          </div>

          <div class="mx-6">

            <h1 class="my-6 text-center text-3xl">오늘은 이 옷 어때?</h1>

            <div class="mt-4 space-y-3 md:space-y-0">
              <Clothing>
                <ClothPage />
                </Clothing>
            </div>
          </div>
                  <div class="mx-6">
          <h1 class="my-6 text-3xl"></h1>
          <div class="mx-6 mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            <div class="overflow-hidden rounded-t-md shadow-lg ">
              <div class="">
                <img
                  class="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div class="relative p-2">
                  <p class="mt-6 text-lg font-semibold">
                    Basic how to ride your skateboard comfortly
                  </p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    class="absolute -top-6 right-6 h-12 w-12 rounded-full border-2 p-0.5"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="overflow-hidden rounded-t-md shadow-lg">
              <div class="">
                <img
                  class="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div class="relative p-2">
                  <p class="mt-6 text-lg font-semibold">
                    Basic how to ride your skateboard comfortly
                  </p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    class="absolute -top-6 right-6 h-12 w-12 rounded-full border-2 p-0.5"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="overflow-hidden rounded-t-md shadow-lg ">
              <div class="">
                <img
                  class="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div class="relative p-2">
                  <p class="mt-6 text-lg font-semibold">
                    Basic how to ride your skateboard comfortly
                  </p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    class="absolute -top-6 right-6 h-12 w-12 rounded-full border-2 p-0.5"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="overflow-hidden rounded-t-md shadow-lg ">
              <div class="">
                <img
                  class="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div class="relative p-2">
                  <p class="mt-6 text-lg font-semibold">
                    Basic how to ride your skateboard comfortly
                  </p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    class="absolute -top-6 right-6 h-12 w-12 rounded-full border-2 p-0.5"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
        </main>
      </div>
      {/* <footer class="text-center py-6 mt-4">
						Copyright &copy; 2022 dej45.com Template by Namina
					</footer> */}
    </>
  );
}

const GraphDiv = styled.div`
  position: absolute;
  left: 60%;
  top: 84%;
  transform: translate(-50%, -20%);
  margin-left: auto;
  background-color: #2b90d9;
  width: 70%;
  height: 30%;
  border-radius: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 80%;
`;

const Clothing = styled.div`
  padding: 10px;
  width: 40%;
  margin-left: 330px;
  box-sizing: border-box;
`;