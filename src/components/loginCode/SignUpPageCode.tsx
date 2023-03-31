import React, { ChangeEvent, FormEvent, useState } from 'react';
import { ImBubble } from 'react-icons/im';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { KAKAO_AUTH_URL } from '../../api/API_KEY';
import LogoImamge from '../../assets/images/LOGO.png'

export default function SignUpPageCode() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [nickName, setNickName] = useState<string>();
  const [phonNumber, setPhonNumber] = useState<string>("");
  const [emailErrorMessage, setemailErrorMessage] = useState<string>('');
  const [PasswordMessage, setePasswordMessage] = useState<string>('');
  const [confirmPasswordMessage, seteconfirmPasswordMessage] = useState<string>('');
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false)

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

  const onSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  const emailCheck = (email: string) => {
    setemailErrorMessage(
      emailRegEx.test(email) ? '' : '이메일을 확인해주세요.',
    );
  };

  const passwordCheck = (password: string) => {
    setePasswordMessage(
      passwordRegEx.test(password)
        ? ''
        : '비밀번호는 6자리 이상 특수문자를 사용해주새요',
    );
  };

  const handelEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    emailCheck(e.target.value);
  };
  const handelPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    passwordCheck(e.currentTarget.value);
  };

  const handelConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = (e.currentTarget.value);
      setConfirmPassword(passwordConfirmCurrent)
    if (password === passwordConfirmCurrent) {
        seteconfirmPasswordMessage('비밀번호가 같습니다.')
        setIsPasswordConfirm(false)
      } else {
        seteconfirmPasswordMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ')
        setIsPasswordConfirm(true)
      }
  };

  const handlePhonNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhonNumber(e.currentTarget.value)
  }
  const KAKAO_AUTH_URL = import.meta.env.VITE_APP_KaKaoauthURL
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  // 회원가입 로직
  // const signUp = e => {
  //   e.preventDefault();
  //   fetch('http://서버IP:3000/auth/signup', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json;charset=utf-8' },
  //     body: JSON.stringify({
  //       email: userInput.email,  // 백엔드에서 key를 뭐로 받는지 확인하고 작성 
  //       password: userInput.password,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // };


  return (
    <Main>
    <MainDiv>
      <TopBoxDiv>
        <LogoBoxDiv>
          <LogoDiv>
            <Link to="/">
            <LogoImg><img src={LogoImamge} alt="" /></LogoImg>
            </Link>
          </LogoDiv>
        </LogoBoxDiv>
        <MemberInfo>
          <MemberInfoForm onSubmit={onSubmit}>
            <TopMent>친구들의 사진과 게시글을 보려면 가입하세요.</TopMent>
            <KaKaoLoginDiv>
              <KakaoLoginButton type="button" onClick={handleKakaoLogin}>
                <ImBubble size={'20px'} style={{ marginRight: '7px' }} />{' '}
                카카오로 로그인
              </KakaoLoginButton>
            </KaKaoLoginDiv>
            <StrokMainDiv>
              <StrokDiv />
              <StrokTextDiv>또는</StrokTextDiv>
              <StrokDiv />
            </StrokMainDiv>
            <InfoDiv>
              <Info>
                <EmailInfoInput
                  placeholder="이메일을 입력해주세요."
                  name="signup_id"
                  type="email"
                  value={email}
                  onChange={handelEmail}
                />
              </Info>
            </InfoDiv>
            {
              <div
                style={{ fontSize: '13px', marginLeft: '45px', color: 'red' }}
              >
                {emailErrorMessage}
              </div>
            }
            <InfoDiv>
              <Info>
                <EmailInfoInput
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  value={password}
                  onChange={handelPassword}
                />
              </Info>
            </InfoDiv>
            {
              <div
                style={{ fontSize: '13px', marginLeft: '45px', color: 'red' }}
              >
                {PasswordMessage}
              </div>
            }
            <InfoDiv>
              <Info>
                {
                  <EmailInfoInput
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요"
                    value={confirmPassword}
                    onChange={handelConfirmPassword}
                  />
                }
              </Info>
            </InfoDiv>
            {isPasswordConfirm && 
              <div
                style={{ fontSize: '13px', marginLeft: '45px', color: 'red' }}
              >
                {confirmPasswordMessage}
              </div>
            }
            <InfoDiv>
              <NickNameInfo>
                <EmailInfoInput placeholder="닉네임을 입력해주세요." />
              </NickNameInfo>
              <Duplication>중복확인</Duplication>
            </InfoDiv>
            <InfoDiv>
              <Info>
                <EmailInfoInput placeholder="전화번호를 입력해주세요." value={phonNumber} onChange={handlePhonNumber} />
              </Info>
            </InfoDiv>
            <Condition>
              <span style={{ fontSize: '13px' }}>이용약관에 동의합니다.</span>{' '}
              <input type="checkbox" />
            </Condition>
            <KaKaoLoginDiv>
              <SignUpButton type="button" onClick={handleKakaoLogin}>
                <span style={{ fontSize: '14px', color: 'white' }}>
                  가입하기
                </span>
              </SignUpButton>
            </KaKaoLoginDiv>{' '}
          </MemberInfoForm>
        </MemberInfo>
      </TopBoxDiv>
      <LoginpageBox>
        <p
          style={{
            fontSize: '14px',
            margin: '15px',
            textAlign: 'center',
            color: 'rgb(38 38 38)',
          }}
        >
          계정이 있으신가요?
          <FindYourPW href="/Login">
            <span
              style={{
                marginLeft: '5px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'rgb(0 149 246)',
              }}
            >
              로그인
            </span>
          </FindYourPW>
        </p>
      </LoginpageBox>
    </MainDiv>
  </Main>
);
}

const Main = styled.main`
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0;
  order: 4;
  padding: 0;
  position: relative;
  justify-content: center;
`;

const MainDiv = styled.div`
  color: rgb(38 38 38);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
`;

const TopBoxDiv = styled.div`
  align-items: center;
  background-color: rgb(255 255 255);
  border: 1px solid rgb(219 219 219);
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font: inherit;
  font-size: 100%;
  margin: 0 0 10px;
  padding: 10px 0;
  position: relative;
  vertical-align: baseline;
`;

const LogoBoxDiv = styled.div`
  margin-top: 36px;
  margin-bottom: 9px;
  flex: 0 0 auto;
  justify-content: flex-start;
  flex-direction: column;
  align-items: stretch;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

const LogoDiv = styled.div`
  cursor: pointer;
  display: block;
`;

const LogoImg = styled.i`
  /* background-image: url(https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png); */
  background-position: 0px -52px;
  background-size: auto;
  width: 175px;
  height: 51px;
  background-repeat: no-repeat;
  display: inline-block;
`;

const MemberInfo = styled.div`
  margin-bottom: 20px;
`;
const MemberInfoForm = styled.form`
  border: 0;
  display: flex;
  flex-direction: column;
  font: inherit;
  font-size: 100%;
  margin: 0;
  max-width: 350px;
  padding: 0;
  vertical-align: baseline;
`;

const TopMent = styled.h2`
  color: rgb(142 142 142);
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  margin: 0 40px 10px;
  text-align: center;
`;
const KaKaoLoginDiv = styled.div`
  margin-top: 8px;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 8px;
  flex: 0 0 auto;
  justify-content: flex-start;
  flex-direction: column;
  align-items: stretch;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;
const KakaoLoginButton = styled.button`
  background-color: #fee500;
  -webkit-appearance: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 40px;
  pointer-events: auto;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: inherit;
  -webkit-user-select: none;
  width: auto;
  border-radius: 8px;
  color: #000000 85%;
  position: relative;
  padding: 7px 16px;
`;
const SignUpButton = styled.button`
  background-color: #1c7ed6;
  -webkit-appearance: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 40px;
  pointer-events: auto;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: inherit;
  -webkit-user-select: none;
  width: auto;
  border-radius: 8px;
  color: #000000 85%;
  position: relative;
  padding: 7px 16px;
`;

const StrokMainDiv = styled.div`
  margin: 10px 40px 18px;
  display: flex;
  flex-direction: row;
`;

const StrokDiv = styled.div`
  top: 0.45em;
  flex-shrink: 1;
  height: 1px;
  position: relative;
  flex-grow: 1;
  background-color: rgb(219 219 219);
`;

const StrokTextDiv = styled.div`
  text-transform: uppercase;
  margin-right: 18px;
  padding-left: 0;
  padding-top: 0;
  flex-direction: column;
  margin-top: 0;
  border-left: 0;
  margin-bottom: 0;
  border-bottom: 0;
  box-sizing: border-box;
  display: flex;
  border-top: 0;
  padding-right: 0;
  flex-shrink: 0;
  margin-left: 18px;
  font-weight: 600;
  color: rgb(142 142 142);
  align-items: stretch;
  font-size: 0.8125rem;
  position: relative;
  line-height: 1.1538;
  flex-grow: 0;
  border-right: 0;
  padding-bottom: 0;
  vertical-align: baseline;
`;

const InfoDiv = styled.div`
  margin: 0 40px 6px;
  display: flex;
  align-items: center;
`;
const Info = styled.div`
  margin-top: 5px;
  border-top: 1px solid rgb(219 219 219);
  font-size: 14px;
  border-left: 1px solid rgb(219 219 219);
  background-color: rgb(250 250 250);
  width: 100%;
  border-bottom: 1px solid rgb(219 219 219);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: rgb(38 38 38);
  flex-direction: row;
  border-top-left-radius: 3px;
  position: relative;
  border-right: 1px solid rgb(219 219 219);
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
`;
const NickNameInfo = styled.div`
  margin-top: 5px;
  border-top: 1px solid rgb(219 219 219);
  font-size: 14px;
  border-left: 1px solid rgb(219 219 219);
  background-color: rgb(250 250 250);
  width: 65%;
  border-bottom: 1px solid rgb(219 219 219);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: rgb(38 38 38);
  flex-direction: row;
  border-top-left-radius: 3px;
  position: relative;
  border-right: 1px solid rgb(219 219 219);
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
`;

const EmailInfoInput = styled.input`
  background: rgb(250 250 250);
  border: 0;
  flex: 1 0 auto;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 9px 0 7px 8px;
  text-overflow: ellipsis;
  -webkit-appearance: none;
  font-size: 12px;
`;

const Duplication = styled.button`
  margin-top: 3px;
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;

  height: 30px;
  font-size: 12px;

  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }
`;

const Condition = styled.p`
  color: rgb(142 142 142);
  font-size: 12px;
  line-height: 16px;
  margin: 10px 40px;
  text-align: center;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const LoginpageBox = styled.div`
  align-items: center;
  background-color: rgb(255 255 255);
  border: 1px solid rgb(219 219 219);
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font: inherit;
  font-size: 100%;
  margin: 0 0 10px;
  padding: 10px 0;
  position: relative;
  vertical-align: baseline;
`;

const FindYourPW = styled.a`
  margin-left: 5px;
  color: rgb(0, 149, 246);
  font-size: 14px;
  line-height: 16px;
  margin-top: 12px !important;
  text-align: center !important;
  display: inline;
  padding-left: 0;
  background-color: transparent;
  touch-action: manipulation;
  padding-top: 0;
  list-style: none;
  border-left: 0;
  margin-bottom: 0;
  border-bottom: 0;
  box-sizing: border-box;
  border-top: 0;
  padding-right: 0;
  cursor: pointer;
  margin-left: 0;
  -webkit-tap-highlight-color: transparent;
  border-right: 0;
  outline: none;
  padding-bottom: 0;
  margin-right: 0;
`;