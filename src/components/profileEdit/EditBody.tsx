import styled from 'styled-components';
// import profile from '../../assets/images/profile.png';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { ImageState, NicknameState, RoleState } from '../../atoms/Atom';
import Swal from 'sweetalert2';


function EditBody() {
  const [nick, setNick] = useRecoilState<string | any>(NicknameState)
  const token = localStorage.getItem('token')
  const [email, setEmail] = useState<string>()
  const [Password, setPassword] = useState<string>()
  const [newPassword, setNewPassword] = useState<string>()
  const [newConfirmPassword, setNewConfirmPaasword] = useState<string>()
  const [nickname, setNickname] = useState<string>()
  const [phone, setPhone] = useState<string | any>()
  const [profileImagePath, setProfileImagePath] = useState<string | any>({selectedFiles : null})
  const [role, setRole] = useRecoilState<boolean>(RoleState)
  const [emailConfirm, setEmailConfirm] = useState<string>()
  const [image, setImage] = useRecoilState(ImageState)


  const handleNicknameInput = (e : ChangeEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value)
  }
  const handlePasswordInput = (e : ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPassword(e.currentTarget.value)
  }
  const handleNewPasswordInput = (e : ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setNewPassword(e.currentTarget.value)
  }
  const handleNewConfirmPasswordInput = (e : ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setNewConfirmPaasword(e.currentTarget.value)
  }
  const handlePhoneInput = (e : ChangeEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value)
    if(phone.length === 11) {
      setPhone(phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'))
    }
  }
  const handleProfileImageInput = (e : ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    setProfileImagePath({
      selectedFiles : files
    })
  }
  const handleModifyButton = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      axios({
        // url: 'https://43cb-175-194-251-236.jp.ngrok.io/api/member/me',
        url: 'http://13.125.74.102:8080/api/member/me',
        headers : {
          'Authorization' : `Bearer ` + token
        },
        params : {
          newPassword : newPassword,
          nickname : nickname,
          Password : Password,
          phone : phone,
          profileimagepath : profileImagePath,
        },
        method: 'PUT',
        withCredentials: true,
      })
        .then((result) => {
          console.log("Modify", result)
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
    try {
      fetch(`http://13.125.74.102:8080/api/register/email-auth?code=${emailConfirm}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
      })
    } catch (error) {
      console.log(error);
    }
    Swal.fire({
      title: '회원정보를 수정하시겠습니까?',
      text: "다시 수정할 수 있습니다.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '확인',
      cancelButtonText: '취소'
  }).then((result) => {
      if (result.isConfirmed) {
          Swal.fire(
              "수정 중입니다."
              )
            }
            // window.location.replace("/profile/edit")
});
  }

  const handleNicknameDuplicationButton = () => {
    fetch('http://13.125.74.102:8080/api/register', {
    // fetch('https://43cb-175-194-251-236.jp.ngrok.io/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      nickname : nickname,  // 백엔드에서 key를 뭐로 받는지 확인하고 작성 
    }),
  })
    .then(res => res.json())
    .then((data) => {
      if(data.message === "이미 사용중인 닉네임 입니다.") {
        Swal.fire({
          text: '이미 사용중인 닉네임 입니다.',
          width: 350,
          padding: 10,
          confirmButtonText: '확인',
        })} else if("" === nickname){
          Swal.fire({
            text: '닉네임을 입력해주세요.',
            width: 350,
            padding: 10,
            confirmButtonText: '확인',
          })} else {
            Swal.fire({
              text: '사용가능한 닉네임 입니다.',
              width: 350,
              padding: 10,
              confirmButtonText: '확인',
            })}
    });
 }

  const handleEmailConfirm = (e : ChangeEvent<HTMLInputElement>) => {
    setEmailConfirm(e.currentTarget.value)
  }
  console.log(emailConfirm)

  useEffect(() => {
    try {
      axios({
        url: 'http://13.125.74.102:8080/api/member/me',
        headers : {
          'Authorization' : `Bearer ` + token
        },
        method: 'GET',
        withCredentials: true,
      })
        .then((result) => {
          if(result.data.role === 'ROLE_MEMBER'){
            setRole(true)
          }
          setEmail(result.data.email)
          setPhone(result.data.phone)
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [])
  return (
    <BodyWrapper>
      <Title>프로필 편집</Title>
      <ProfileEditDiv>
        <ProfileEditSubDiv>
          <ProfileEditSubImg src={image}></ProfileEditSubImg>
        </ProfileEditSubDiv>
        <NameDiv>
          <Name>{nick}</Name>
          {/* <ProfileImgEdit >프로필 사진 바꾸기</ProfileImgEdit> */}
          <ProfileImgEdit type='file' onChange={handleProfileImageInput}/>
        </NameDiv>
      </ProfileEditDiv>
      <PersonalinfoForm onSubmit={handleModifyButton}>
        <Div>
          <Aside>
            <Label>닉네임</Label>
          </Aside>
          <InputDiv>
          <Input placeholder={nick} onChange={handleNicknameInput}/>
          </InputDiv>
        </Div>
          <Duplication type='button' onClick={handleNicknameDuplicationButton}>중복확인</Duplication>
        <Div>
        <Aside>
            <Label>전화번호</Label>
          </Aside>
          <InputDiv>
          <Input type="text" placeholder={phone} onChange={handlePhoneInput}/>
          </InputDiv>
        </Div>
        <Div>
        <Aside>
            <Label>이메일</Label>
          </Aside>
          <InputDiv>
          <Input placeholder={email} value={email}/>
          </InputDiv>
        </Div>
        {role &&
        <><Div>
            <Aside>
              <Label>이전 비밀번호</Label>
            </Aside>
            <InputDiv>
              <Input type='password' value={Password} onChange={handlePasswordInput}/>
            </InputDiv>
          </Div>
          <Div>
              <Aside>
                <Label>새 비밀번호</Label>
              </Aside>
              <InputDiv>
                <Input type='password' value={newPassword} onChange={handleNewPasswordInput} />
              </InputDiv>
            </Div>
            <Div>
              <Aside>
                <Label>새 비밀번호 확인</Label>
              </Aside>
              <InputDiv>
                <Input type='password' value={newConfirmPassword} onChange={handleNewConfirmPasswordInput}/>
              </InputDiv>
            </Div>
            <Div>
              <Aside>
                <Label> 이메일 인증 </Label>
              </Aside>
              <InputDiv>
                <Input type='text' value={emailConfirm} onChange={handleEmailConfirm}/>
              </InputDiv>
            </Div>
            </>
        }
      <EditButton type='submit'>수정하기</EditButton>
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
  margin-top: 10px;
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
  margin: 10px 70px 0;
  padding: 0;
  position: relative;
  vertical-align: baseline;
`;

const Duplication = styled.button`
  position : absolute;
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
  right : 0px;
  top: 124px;
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

const ProfileImgEdit = styled.input`
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
  margin: 75px;
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
  /* display: flex; */
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
    width: 90%;
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