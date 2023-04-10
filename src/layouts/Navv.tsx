import React, { useEffect, useState } from 'react'
import LogoImamge from '../assets/images/LOGO.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { ImageState, NicknameState, isLoginState } from '../atoms/Atom';

export default function Navv() {
    const [isLogin, setIsLogin] = useRecoilState(isLoginState);
    const [nick, setNick] = useRecoilState<string | any>(NicknameState)
    const [loginId, setLoginId] = useState<string>("")
    const [image, setImage] = useRecoilState(ImageState)
    // const LOGIN_ID = localStorage.getItem("id")
    const LOGIN_ID = loginId
    console.log(LOGIN_ID)
  
    
    const buttonList = [
      {text: "Feed", path: "/"},
      {text: "Chat", path: "/"},
    ];
    const token = localStorage.getItem('token')
  
    useEffect(() => {
      try {
        axios({
          url: 'http://13.125.74.102:8080/api/member/me/id',
          // url: 'https://43cb-175-194-251-236.jp.ngrok.io/api/member/me/id',
          headers : {
            'Authorization' : `Bearer ` + token
          },
          method: 'GET',
          withCredentials: true,
        })
          .then((result) => {
            console.log("member/id", result)
            // localStorage.setItem("id", result.data)
            setLoginId(result.data)
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      axios.interceptors.response.use(
        (response) => {
          // setIsLogin(true)  
          return response;
        },
        (error) => {
          const {
            response: { status },
          } = error;
          if (status === 401) {
            try {
              axios({
                url: 'http://13.125.74.102:8080/api/token/reissue',
                // url: 'https://43cb-175-194-251-236.jp.ngrok.io/api/token/reissue',
                method: 'POST',
                withCredentials: true,
              }) .then((res) => {
                console.log(res)
              })
            } catch (err) {
              console.log(err);
            }
          }
          return Promise.reject(error);
        },
      );
      try {
        axios({
          url: 'http://13.125.74.102:8080/api/member/me',
          // url: 'https://43cb-175-194-251-236.jp.ngrok.io/api/member/me',
          headers : {
            'Authorization' : `Bearer ` + token
          },
          method: 'GET',
          withCredentials: true,
        })
          .then((result) => {
            setNick(result.data.nickname)
            setImage(result.data.profileImagePath)
            if (result) {
              setIsLogin(true);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }, [isLogin]);
  
  return (
	<div class="md:flex w-2/5 md:w-1/4 h-screen bg-white border-r hidden">
		<div class="mx-auto py-10">
        <img src={LogoImamge} alt=""width={"150px"} height={"50px"}  />
			<ul>
				<li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
                    <Link to="/">
					<span class="font-semibold">Home</span>
                    </Link>
				</li>
				<li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
					<span class="font-semibold">Feed</span>
				</li>
				<li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path d="M12 14l9-5-9-5-9 5 9 5z" />
						<path
							d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
					</svg>
					<span class="font-semibold">Chating</span>
				</li>
				<li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
					</svg>
                   <a class="font-semibold" style={{listStyle: "none",textDecoration : "none", color:"black"}} href={`/myPage/${LOGIN_ID}`}><span>  Profile </span> </a>
				</li>
                <Link to="/Login">
				<button class="w-full mt-10 bg-[#EC5252] rounded-full py-1.5 text-white">Login</button>
                </Link>
			</ul>
		</div>
	</div>  )
}
