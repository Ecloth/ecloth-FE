import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { CiLock } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState<string>("")

  const handleEmail = (e : ChangeEvent <HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  const handleSubmitButton = () => {
      console.log(email)
      alert(`${email}로 임시코드를 보냈습니다.`)
  }
  return (
    <Main>
      <MainRestBox>
        <ResetBox>
          <SubRestBox>
            <RestInfoBox>
              <InfoLockLogo>
                <LockSpan>
                  <CiLock
                    size={80}
                    style={{ marginLeft: '7px', marginTop: '5px' }}
                  />
                </LockSpan>
              </InfoLockLogo>
              <InfomationPhraseBox>
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: '5px',
                    marginBottom: '10px',
                  }}
                >
                  로그인에 문제가 생겼나요?
                </div>
                <InfomationPhrase>
                  이메일 주소를 입력하시면 계정에 다시 액세스할 수 있는
                  임시코드를 보내드립니다.
                </InfomationPhrase>
              </InfomationPhraseBox>
                <form style={{ margin: 0, padding: 0 }} onSubmit={handleSubmitButton}>
              <EmailInfoBox>
                  <EmailInfoLabel>
                    <EmailInfoInput placeholder="이메일을 입력해주세요." value={email} onChange={handleEmail}/>
                  </EmailInfoLabel>
              </EmailInfoBox>
              <TemporaryBox>
                <Temporary type="submit">로그인 임시코드 보내기</Temporary>
              </TemporaryBox>
              </form>
              <StraightLineDiv>
                <StraightLineSubDiv>
                  <StrokDiv />
                  <StrokTextDiv>또는</StrokTextDiv>
                  <StrokDiv />
                </StraightLineSubDiv>
              </StraightLineDiv>
              <StraightLineDiv>
                <NewAccount to="/SignUp">새 계정 만들기</NewAccount>
              </StraightLineDiv>
                <BottomDiv>
                  <BottomSubDiv>
                    <LoginPageLink to="/Login">
                  로그인으로 돌아가기
                    </LoginPageLink>
                  </BottomSubDiv>
                </BottomDiv>
            </RestInfoBox>
          </SubRestBox>
        </ResetBox>
      </MainRestBox>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin: 44px 0;
  overflow: hidden;
  flex-direction: column;
  display: flex;
`;
const MainRestBox = styled.div`
  border: 1px solid rgb(219 219 219);
  border-radius: 3px;
  margin: 60px auto 0;
  max-width: 935px;
  overflow: hidden;
`;

const ResetBox = styled.div`
  overflow-y: visible;
  border-bottom-left-radius: 0;
  background-color: transparent;
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  border-bottom-right-radius: 0;
  align-items: stretch;
  overflow-x: visible;
  justify-content: flex-start;
  position: relative;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const SubRestBox = styled.div`
  max-width: 388px;
  overflow-y: visible;
  border-bottom-left-radius: 0;
  justify-content: center;
  margin-right: auto;
  background-color: transparent;
  min-width: 0;
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  border-bottom-right-radius: 0;
  min-height: 0;
  align-items: stretch;
  overflow-x: visible;
  align-self: auto;
  position: relative;
  flex-grow: 1;
  margin-left: auto;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const RestInfoBox = styled.div`
  overflow-y: visible;
  border-bottom-left-radius: 0;
  background-color: transparent;
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  border-bottom-right-radius: 0;
  flex-shrink: 0;
  align-items: stretch;
  overflow-x: visible;
  align-self: auto;
  justify-content: flex-start;
  position: relative;
  flex-grow: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const InfoLockLogo = styled.div`
  overflow-y: visible;
  margin-top: 24px;
  border-bottom-left-radius: 0;
  background-color: transparent;
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom-right-radius: 0;
  flex-shrink: 0;
  margin-bottom: 16px;
  overflow-x: visible;
  align-self: auto;
  justify-content: flex-start;
  position: relative;
  flex-grow: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const LockSpan = styled.span`
  background-size: 440px 411px;
  background-position: -129px 0;
  border: 3px solid black;
  border-radius: 50%;
  height: 96px;
  width: 96px;
`;

const InfomationPhraseBox = styled.div`
  overflow-y: visible;
  border-bottom-left-radius: 0;
  background-color: transparent;
  flex-direction: column;
  margin-top: 0;
  box-sizing: border-box;
  margin-left: 44px;
  display: flex;
  border-bottom-right-radius: 0;
  flex-shrink: 0;
  margin-bottom: 16px;
  align-items: stretch;
  overflow-x: visible;
  align-self: auto;
  justify-content: flex-start;
  position: relative;
  flex-grow: 0;
  border-top-left-radius: 0;
  margin-right: 44px;
  border-top-right-radius: 0;
`;

const InfomationPhrase = styled.div`
  text-align: center;
  display: block;
  color: rgb(142 142 142);
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  margin: -3px 0 -4px;
`;

const EmailInfoBox = styled.div`
  border-bottom-left-radius: 0;
  background-color: transparent;
  flex-direction: column;
  margin-top: 0;
  box-sizing: border-box;
  margin-left: 44px;
  display: flex;
  border-bottom-right-radius: 0;
  flex-shrink: 0;
  margin-bottom: 16px;
  align-items: stretch;
  overflow-x: visible;
  align-self: auto;
  justify-content: flex-start;
  position: relative;
  flex-grow: 0;
  border-top-left-radius: 0;
  margin-right: 44px;
  border-top-right-radius: 0;
`;

const EmailInfoInput = styled.input`
  border: none;
  padding: 4px 9px;
  width: 100%;
  background: rgb(250 250 250);
  border-radius: 6px;
  color: rgb(38 38 38);
  flex-grow: 1;
  font-size: 14px;
  line-height: 30px;
  margin: 0;
  overflow: visible;
  outline: none !important;
`;

const EmailInfoLabel = styled.label`
  background: rgb(250 250 250);
  align-items: center;
  border: 1px solid rgb(219 219 219);
  border-radius: 6px;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding-right: 8px;
  position: relative;
  /* outline: none !important; */
  cursor: default;
  font-weight: 600;
  vertical-align: middle;
  font-size: 12px;
`;

const TemporaryBox = styled.div`
  overflow-y: visible;
  border-bottom-left-radius: 0;
  background-color: transparent;
  flex-direction: column;
  margin-top: 0;
  box-sizing: border-box;
  margin-left: 44px;
  display: flex;
  border-bottom-right-radius: 0;
  flex-shrink: 0;
  margin-bottom: 16px;
  align-items: stretch;
  overflow-x: visible;
  align-self: auto;
  justify-content: flex-start;
  position: relative;
  flex-grow: 0;
  border-top-left-radius: 0;
  margin-right: 44px;
  border-top-right-radius: 0;
`;

const Temporary = styled.button`
  font-weight: 600;
  border-bottom-color: 0, 0, 0, 0.4;
  border-left-width: 0;
  text-overflow: ellipsis;
  justify-content: center;
  appearance: none;
  border-top-color: 0, 0, 0, 0.4;
  border-top-right-radius: 8px;
  touch-action: manipulation;
  padding-top: 0;
  min-width: 0;
  flex-basis: auto;
  margin-top: 0;
  border-right-color: 0, 0, 0, 0.4;
  border-bottom-left-radius: 8px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  border-top-width: 0;
  user-select: none;
  display: flex;
  align-items: center;
  /* pointer-events: none; */
  border-bottom-right-radius: 8px;
  min-height: 0;
  flex-shrink: 0;
  border-left-color: 0, 0, 0, 0.4;
  text-align: center;
  cursor: pointer;
  outline-style: none;
  border-bottom-style: none;
  padding-left: 16px;
  border-bottom-width: 0;
  flex-direction: row;
  padding-right: 16px;
  position: relative;
  margin-left: 0;
  border-top-left-radius: 8px;
  z-index: 0;
  text-decoration: none;
  border-right-width: 0;
  font-size: 15px;
  border-top-style: none;
  outline: none;
  padding-bottom: 0;
  line-height: 14px;
  border-left-style: none;
  width: auto;
  margin-right: 0;
  height: 32px;
  background-color: rgb(0, 149, 246);
`;

const StraightLineDiv = styled.div`
  margin-top: 16px;
  overflow-y: visible;
  border-bottom-left-radius: 0;
  background-color: transparent;
  flex-direction: column;
  box-sizing: border-box;
  margin-left: 44px;
  display: flex;
  border-bottom-right-radius: 0;
  flex-shrink: 0;
  margin-bottom: 16px;
  align-items: stretch;
  overflow-x: visible;
  align-self: auto;
  justify-content: flex-start;
  position: relative;
  flex-grow: 0;
  border-top-left-radius: 0;
  margin-right: 44px;
  border-top-right-radius: 0;
`;

const StraightLineSubDiv = styled.div`
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

const NewAccount = styled(Link)`
  color: rgb(38 38 38);
  text-decoration: none;
  font-weight: 600;
  height: auto;
  display: inline;
  border-bottom-color: rgba(0, 0, 0, 0.4);
  border-top-left-radius: 2px;
  border-left-width: 0;
  text-overflow: ellipsis;
  padding-left: 0;
  appearance: none;
  border-top-color: rgba(0, 0, 0, 0.4);
  background-color: transparent;
  touch-action: manipulation;
  padding-top: 0;
  min-width: 0;
  list-style: none;
  flex-basis: auto;
  margin-top: 0;
  border-right-style: none;
  border-right-width: 0;
  margin-bottom: 0;
  border-right-color: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  border-top-width: 0;
  user-select: none;
  border-left-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  cursor: pointer;
  border-top-right-radius: 2px;
  outline-style: none;
  border-bottom-style: none;
  border-bottom-width: 0;
  position: relative;
  margin-left: 0;
  z-index: 0;
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  border-top-style: none;
  outline: none;
  padding-bottom: 0;
  line-height: 14px;
  border-left-style: none;
  border-bottom-left-radius: 2px;
  width: auto;
  border-bottom-right-radius: 2px;
  margin-right: 0;
`;

const BottomDiv = styled.div`
  margin-top: 68px;
  overflow-y: visible;
  border-bottom-left-radius: 0;
  background-color: transparent;
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  border-bottom-right-radius: 0;
  flex-shrink: 0;
  position: static;
  align-items: stretch;
  overflow-x: visible;
  align-self: auto;
  justify-content: flex-start;
  flex-grow: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const BottomSubDiv = styled.div`
  height: 44px;
  border-left-width: 1px;
  border-right-style: solid;
  border-bottom-width: 1px;
  overflow-y: visible;
  border-right-color: rgb(219 219 219);
  border-bottom-left-radius: 0;
  background-color: rgb(250 250 250);
  border-left-color: rgb(219 219 219);
  border-right-width: 1px;
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  border-top-color: rgb(219 219 219);
  border-bottom-right-radius: 0;
  flex-shrink: 0;
  border-left-style: solid;
  align-items: stretch;
  border-bottom-style: solid;
  overflow-x: visible;
  align-self: auto;
  position: relative;
  justify-content: space-around;
  flex-grow: 0;
  border-bottom-color: rgb(219 219 219);
  border-top-width: 1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top-style: solid;
`;

const LoginPageLink = styled(Link)`
      font-weight: 600;
      height: auto;
      display: inline;
      color: rgb(38 38 38);
      border-bottom-color: rgba(0, 0, 0, 0.4);
      border-top-left-radius: 2px;
      border-left-width: 0;
      text-overflow: ellipsis;
      padding-left: 0;
      appearance: none;
      border-top-color: rgba(0, 0, 0, 0.4);
      background-color: transparent;
      touch-action: manipulation;
      padding-top: 0;
      min-width: 0;
      list-style: none;
      flex-basis: auto;
      margin-top: 0;
      border-right-style: none;
      border-right-width: 0;
      margin-bottom: 0;
      border-right-color: rgba(0, 0, 0, 0.4);
      box-sizing: border-box;
      border-top-width: 0;
      user-select: none;
      padding-right: 0;
      min-height: 0;
      flex-shrink: 0;
      border-left-color: rgba(0, 0, 0, 0.4);
      text-align: center;
      cursor: pointer;
      border-top-right-radius: 2px;
      outline-style: none;
      border-bottom-style: none;
      border-bottom-width: 0;
      position: relative;
      margin-left: 0;
      z-index: 0;
      -webkit-tap-highlight-color: transparent;
      text-decoration: none;
      font-size: .875rem;
      border-top-style: none;
      outline: none;
      padding-bottom: 0;
      line-height: 18px;
      border-left-style: none;
      border-bottom-left-radius: 2px;
      width: auto;
      border-bottom-right-radius: 2px;
      margin-right: 0;
`