import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImBubble } from 'react-icons/im';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';

export default function Login() {
  const REST_API_KEY = 'ffca549b185c4443af1113843fd7582c';
  const REDIRECT_URI = 'http://localhost:5173/KakaoLogin';

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleClick = () => {
    open({ onComplete: handleKakaoLogin });
  };
  return (
    <>
      <Main>
        <MainDiv>
          <SubDiv>
            <LoginBox>
              <LoginDetails>
                <LogoBox>
                  <LogoImgDiv>
                    <Link to="/">
                      <LogoImg>로고자리</LogoImg>
                    </Link>
                  </LogoImgDiv>
                </LogoBox>
                <IdPassWordBox>
                  <IdPassWordForm>
                    <LoginInpoDiv>
                      <InputDiv>
                        <InputDivDetail>
                          <InputLabel>
                            <IdPwInput placeholder="이메일" />
                          </InputLabel>
                        </InputDivDetail>
                      </InputDiv>
                    </LoginInpoDiv>
                    <LoginInpoDiv>
                      <InputDiv>
                        <InputDivDetail>
                          <InputLabel>
                            <IdPwInput placeholder="비밀번호" />
                          </InputLabel>
                        </InputDivDetail>
                      </InputDiv>
                    </LoginInpoDiv>
                    <LoginButtonDiv>
                      <LoginButton>로그인</LoginButton>
                    </LoginButtonDiv>
                    <StrokMainDiv>
                      <StrokDiv />
                      <StrokTextDiv>또는</StrokTextDiv>
                      <StrokDiv />
                    </StrokMainDiv>
                    <LoginButtonDiv>
                      <KakaoLoginButton
                        type="button"
                        onClick={handleKakaoLogin}
                      >
                        <ImBubble
                          size={'20px'}
                          style={{ marginRight: '7px' }}
                        />{' '}
                        카카오로 로그인
                      </KakaoLoginButton>
                    </LoginButtonDiv>
                    <FindYourPW href="/"> 비밀번호를 잊으셨나요?</FindYourPW>
                  </IdPassWordForm>
                </IdPassWordBox>
              </LoginDetails>
            </LoginBox>
            <SignTopDiv>
              <SignUpDiv>
                <p
                  style={{
                    color: 'rgb(38 38 38',
                    fontSize: '14px',
                    margin: '15px',
                    textAlign: 'center',
                  }}
                >
                  계정이 없으신가요?{' '}
                  <FindYourPW href='/SignUp'><span style={{fontSize: "15px", fontWeight: "600", color: "rgb(0 149 246)"}}>가입하기</span></FindYourPW>
                </p>
              </SignUpDiv>
            </SignTopDiv>
          </SubDiv>
        </MainDiv>
      </Main>
    </>
  );
}

const Main = styled.main`
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0;
  order: 4;
  padding: 0;
  position: relative;
  justify-content: center;
`;
const MainDiv = styled.div`
margin-top: 30px;
  overflow: hidden;
  min-height: 100%;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
const SubDiv = styled.div`
  color: rgb(var(--ig-primary-text));
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
`;

const LoginBox = styled.div`
  color: rgb(var(--ig-primary-text));
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
`;

const LoginDetails = styled.div`
  align-items: center;
  background-color: rgb(var(--ig-primary-background));
  border: 1px solid rgb(219, 219, 219);
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

const LogoBox = styled.div`
  margin-top: calc(50px);
  margin-bottom: calc(12px);
  flex: 0 0 auto;
  justify-content: flex-start;
  flex-direction: column;
  align-items: stretch;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

const LogoImgDiv = styled.div`
  cursor: pointer;
  display: block;
`;

const LogoImg = styled.i`
  background-position: 0px -52px;
  background-size: auto;
  width: 175px;
  height: 51px;
  background-repeat: no-repeat;
  display: block;
`;

const IdPassWordBox = styled.div`
  margin-top: 32px;
  margin-bottom: 10px;
  max-width: 350px;
  width: 100%;
`;

const IdPassWordForm = styled.form`
  border: 0;
  display: flex;
  flex-direction: column;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

const LoginInpoDiv = styled.div`
  margin-top: 10px;
  flex: 0 0 auto;
  justify-content: flex-start;
  flex-direction: column;
  align-items: stretch;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

const InputDiv = styled.div`
  margin: 0 40px 6px;
`;

const InputDivDetail = styled.div`
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

const InputLabel = styled.label`
  border: 0;
  display: flex;
  flex: 1 0 0px;
  font: inherit;
  font-size: 100%;
  height: 36px;
  margin: 0;
  min-width: 0;
  padding: 0;
  position: relative;
  vertical-align: baseline;
`;

const IdPwInput = styled.input`
  font-size: 14px;
  -webkit-appearance: none;
  background: rgb(250 250 250);
  border: 0;
  flex: 1 0 auto;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 9px 0 7px 8px;
  text-overflow: ellipsis;
`;

const LoginButtonDiv = styled.div`
  margin-top: 17px;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 17px;
  flex: 0 0 auto;
  justify-content: flex-start;
  flex-direction: column;
  align-items: stretch;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

const LoginButton = styled.button`
  background-color: rgba(0 149 246);
  -webkit-appearance: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-size: 14px;
  pointer-events: auto;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: inherit;
  -webkit-user-select: none;
  width: auto;
  border-radius: 8px;
  color: rgb(255 255 255);
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

const KakaoLoginButton = styled.button`
  background-color: #FEE500;
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

const FindYourPW = styled.a`
  color: rgb(0 55 107);
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

const SignTopDiv = styled.div`
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

const SignUpDiv = styled.div`
      display: block;
      color: rgb(142 142 142);
      font-size: 14px;
    line-height: 18px;
    margin: -3px 0 -4px;
`;
