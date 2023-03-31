import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function KakaoLoginPageCode() {
  const navigate = useNavigate();
//   const KAKAO_CODE = location.search.split('=')[1];
  const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');

   // 백엔드 인가코드 전달 코드
    useEffect(() => {
      axios({
        method : "GET",
        url : `https://ef75-175-194-251-236.jp.ngrok.io/KakaoLogin?code=${KAKAO_CODE}`
      })
      .then((res:any) => {
        console.log(res);        
        let test = res.headers.get('authorization')
        console.log(test)
        
        const ACCESS_TOKEN = res.data.accessToken;
        localStorage.setItem("token", ACCESS_TOKEN);
        navigate("/")
      }).catch((err)=> {
        console.log(err)
        window.alert("로그인 실패")
        // navigate("/Login")
      })
    }, []);

    // useEffect(() => {
    //   fetch(`https://b769-175-194-251-236.jp.ngrok.io/KakaoLogin?code=${KAKAO_CODE}`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded;",
    //     },
    //   });
    // }, []);
  

//   const getKakaoToken = () => {
    // fetch(`https://kauth.kakao.com/oauth/token`, {
    //     method : 'GET',
    //     headers : {'Content-Type': 'application/x-www-form-urlencoded'},
    //     body :`grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    // })
    // .then(res => res.json())
    // .then(data => {
    //     if(data.access_token) {
    //         localStorage.setItem('token', data.access_token)
    //     } else {
    //         navigate('/Login')
    //     }
    //     console.log(data)
    // })
//   };

//   useEffect(() => {
//     if (!location.search) return;
//     getKakaoToken();
//   }, []);

  return <div>KakaoLogin</div>;

}
