import styled from "styled-components";
import {SlMagnifier} from "react-icons/sl";
import {BiCurrentLocation} from "react-icons/Bi";
import {useState} from "react";
import axios from "axios";

export default function MainPage() {
  const [locationObj, setLocationObj] = useState<any>({});
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  navigator.geolocation.getCurrentPosition(position => {
    const {latitude, longitude} = position.coords;
    // Show a map centered at latitude / longitude.
    setLatitude(latitude);
    setLongitude(longitude);
    console.log(latitude, longitude);
  });

  const API = import.meta.env.VITE_APP_apikey;
  console.log("aa", API);
  const handleLocationButton = async () => {
    try {
      const res = await axios
        .get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${longitude}&y=${latitude}`, {
          headers: {
            Authorization: `KakaoAK ${API}`,
          },
        })
        .then(res => {
          const location = res.data.documents[0];
          setLocationObj({
            si: location.address.region_1depth_name,
            gu: location.address.region_2depth_name,
            dong: location.address.region_3depth_name,
            address_name: location.address.address_name,
          });
        });
      console.log("tt", location);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Body>
      <Topdiv>
        <Input type="text" placeholder="주요지명으로 입력" />
        <SlMagnifierButon>
          <SlMagnifier />
        </SlMagnifierButon>
        <SlMagnifierButon type="button" onClick={handleLocationButton}>
          <BiCurrentLocation />
        </SlMagnifierButon>
      </Topdiv>
      <Divmenu>
        <Weather>
          <Text>
            {latitude} {longitude}
          </Text>
        </Weather>
        <Clothing>
          <Text>{locationObj.si}</Text>
        </Clothing>
      </Divmenu>
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
  margin-top: 30px;
`;
const Input = styled.input`
  font-size: 18px;
  padding: 15px;
  box-sizing: border-box;
  margin-left: 30px;
  margin-right: 10px;
  width: 45%;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const SlMagnifierButon = styled.button`
  width: 50px;
  height: 45px;
  margin: 0px;
  padding: 0px;
`;

const Divmenu = styled.div`
  display: flex;
`;
const Weather = styled.div`
  padding: 15px;
  margin-top: 30px;
  margin-left: 30px;
  border: 1px solid black;
  height: 450px;
  width: 800px;
  box-sizing: border-box;
`;
const Clothing = styled.div`
  padding: 15px;
  margin-top: 30px;
  margin-left: 30px;
  border: 1px solid black;
  height: 450px;
  width: 500px;
  box-sizing: border-box;
`;

const Text = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
`;
