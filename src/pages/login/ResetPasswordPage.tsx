import React from 'react';
import styled from 'styled-components';
import { CiLock } from 'react-icons/ci';

export default function ResetPasswordPage() {
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
              <EmailInfoBox>
                <form style={{ margin: 0, padding: 0 }}>
                  <EmailInfoLabel>
                    <EmailInfoInput placeholder="이메일을 입력해주세요." />
                  </EmailInfoLabel>
                </form>
              </EmailInfoBox>
              <TemporaryBox>
                <Temporary type='submit'>로그인 임시코드 보내기</Temporary>
              </TemporaryBox>
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
  border-top-color: 0,0,0,0.4;
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
  background-color: rgb(0, 149, 246)
`;
