import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function KakaoLogin() {
    const location = useLocation();
    const navigate = useNavigate()
    const KAKAO_CODE = location.search.split('=')[1];
    // const KAKAO_CODE = new URL(window.location.href).searchParams.get("code")
    const REST_API_KEY = 'ffca549b185c4443af1113843fd7582c'
    const REDIRECT_URI = 'http://localhost:5173/KakaoLogin'

    const getKakaoToken = () => {
        fetch(`https://kauth.kakao.com/oauth/token`, {
            method : 'POST',
            headers : {'Content-Type': 'application/x-www-form-urlencoded'},
            body :`grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
        })
        .then(res => res.json())
        .then(data => {
            if(data.access_token) {
                localStorage.setItem('token', data.access_token)
            } else {
                navigate('/Login')
            }
            console.log(data)
        })
    }

    useEffect(() => {
        if(!location.search) return
        getKakaoToken()
    }, [])
  return (
    <div>KakaoLogin</div>
  )
}
