import styled from 'styled-components';
import profile from '../../assets/images/profile.png';


function EditBody() {
  const info : string | any = localStorage.getItem("email")

  return (
    <BodyWrapper>
      <Title>프로필 편집</Title>
      <ProfileEditDiv>
        <ProfileEditSubDiv>
          <ProfileEditSubImg src={profile}></ProfileEditSubImg>
        </ProfileEditSubDiv>
        <NameDiv>
          <Name>{info}</Name>
          <ProfileImgEdit >프로필 사진 바꾸기</ProfileImgEdit>
        </NameDiv>
      </ProfileEditDiv>
      <PersonalinfoForm>
        <Div>
          <Aside>
            <Label>닉네임</Label>
          </Aside>
          <InputDiv>
          <Input placeholder={info}/>
          </InputDiv>
        </Div>
        <Div>
        <Aside>
            <Label>전화번호</Label>
          </Aside>
          <InputDiv>
          <Input placeholder='010-0000-0000'/>
          </InputDiv>
        </Div>
        <Div>
        <Aside>
            <Label>이메일</Label>
          </Aside>
          <InputDiv>
          <Input placeholder={info}/>
          </InputDiv>
        </Div>
        <Div>
        <Aside>
            <Label>이전 비밀번호</Label>
          </Aside>
          <InputDiv>
          <Input />
          </InputDiv>
        </Div>
        <Div>
        <Aside>
            <Label>새 비밀번호</Label>
          </Aside>
          <InputDiv>
          <Input />
          </InputDiv>
        </Div>
        <Div>
        <Aside>
            <Label>새 비밀번호 확인</Label>
          </Aside>
          <InputDiv>
          <Input />
          </InputDiv>
        </Div>
      <EditButton>수정하기</EditButton>
      </PersonalinfoForm>
    </BodyWrapper>
  );
}

export default EditBody;

const BodyWrapper = styled.article`
  align-items: stretch;
  border: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font: inherit;
  font-size: 100%;
  margin: 0;
  min-width: 50px;
  padding: 0;
  position: relative;
  vertical-align: baseline;
`;

const Title = styled.div`
  width: 200px;
  height: 50px;
  text-align: center;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 30px;
  background-color: #6aafe6;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileEditDiv = styled.div`
  align-items: stretch;
  border: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  font: inherit;
  font-size: 100%;
  justify-content: flex-start;
  margin: 32px 0 0;
  padding: 0;
  position: relative;
  vertical-align: baseline;
`;

const ProfileEditSubDiv = styled.div`
  align-items: stretch;
  border: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font: inherit;
  font-size: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  position: relative;
  vertical-align: baseline;
  width: 50px;
  margin: 2px 32px 0 124px;
`;

const ProfileEditSubImg = styled.img`
  border-radius: 50%;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const NameDiv = styled.div`
  align-items: stretch;
  border: 0;
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  font: inherit;
  font-size: 100%;
  margin: 0;
  margin-right: 20px;
  overflow-x: hidden;
  padding: 0;
  position: relative;
  vertical-align: baseline;
`;

const Name = styled.div`
  margin-top: 5px;
  display: block;
`;

const ProfileImgEdit = styled.button`
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
  font-size: 17px;
  border-top-style: none;
  outline: none;
  padding-bottom: 0;
  line-height: 18px;
  border-left-style: none;
  color: rgb(0, 149, 246);
  border-bottom-left-radius: 2px;
  width: auto;
  border-bottom-right-radius: 2px;
  margin-right: 0;
`;

const PersonalinfoForm = styled.form`
  align-items: stretch;
  border: 0;
  display: flex;
  flex-direction: column;
  font: inherit;
  font-size: 100%;
  margin: 0;
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 0;
  vertical-align: baseline;
`;
const Div = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

const Aside = styled.aside`
  padding-left: 32px;
  padding-right: 32px;
  text-align: right;
  box-sizing: border-box;
  color: rgb(38, 38, 38);
  flex: 0 0 194px;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  margin-top: 6px;
  display: block;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  vertical-align: baseline;
`;

const InputDiv = styled.div`
  flex-basis: 355px;
  flex-direction: row;
  padding-right: 60px;
  align-items: stretch;
  border: 0;
  box-sizing: border-box;
  color: rgb(38 38 38);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  font: inherit;
  font-size: 16px;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  position: relative;
  vertical-align: baseline;
`;

const Input = styled.input`
    -webkit-appearance: none;
    background: transparent;
    border: 1px solid rgb(219 219 219);
    border-radius: 3px;
    box-sizing: border-box;
    color: rgb(38 38 38);
    font-size: 16px;
    height: 32px;
    padding: 0 10px;
    width: 100%;
    `

const EditButton = styled.button`
      font-weight: var(--font-weight-system-semibold);
      border-bottom-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-color: rgba(0,0,0,0.4);
      border-bottom-width: 0;
      border-left-width: 0;
      border-top-width: 0;
      text-overflow: ellipsis;
      justify-content: center;
      appearance: none;
      border-top-color: rgba(0,0,0,0.4);
      padding-top: 0;
      color: white;
      display: flex;
      text-align: center;
      cursor: pointer;
      background-color: rgb(0 149 246);
      border-bottom-right-radius: 8px;
      min-height: 0;
      flex-shrink: 0;
      border-left-color: rgba(0,0,0,0.4);
      margin-left: 0;
      border-top-left-radius: 8px;
      -webkit-tap-highlight-color: transparent;
      border-right-color: rgba(0,0,0,0.4);
      border-right-style: none;
      border-right-width: 0;
      width: 120px;
      height: 30px;
      line-height: 30px;
      margin-left: 300px;  
`