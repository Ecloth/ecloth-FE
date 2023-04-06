import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoginState } from '../../atoms/Atom';
import Swal from 'sweetalert2';

export default function KakaoLoginPageCode() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const navigate = useNavigate();
//   const KAKAO_CODE = location.search.split('=')[1];
  const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');
   // 백엔드 인가코드 전달 코드
    useEffect(() => {
      axios({
        method : "GET",
        url : `http://13.125.74.102:8080/KakaoLogin?code=${KAKAO_CODE}`
      })
      .then((result:any) => {
        console.log(result);        
        const res = result.headers.authorization
        const token = res.substr(7)
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
        
        localStorage.setItem('token', token);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: '로그인이 완료되었습니다.'
        })
        window.location.replace('/');
        setIsLogin(true)
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
