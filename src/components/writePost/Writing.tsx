import styled from 'styled-components';
import { LOGIN_ID } from '../detailPost/Detail';
import ItemUser from '../feed/ItemUser';
import ImagePrint from './ImagePrint';
import PostEditor from './PostEditor';
import TitleInput from './TitleInput';
import WriteButtonList from './WriteButtonList';

function Writing() {
  return (
    <WritingWrapper>
      <ImageWrapper>
        <ImagePrint imgUrl={[""]}/>
      </ImageWrapper>
      <ContentWrapper>
        <ItemUser id={memberId} />
        <TitleInput onChange={handleTitleonChange} title={title} />
        <PostEditor
          onChange={setContent}
          content={content}
          imagePath={images}
        />
        <WriteButtonList
          handleCancelonClick={handleCancelOnClick}
          handleSubmitonClick={handleSubmitOnClick}
        />
      </ContentWrapper>
    </WritingWrapper>
  );
}

export default Writing;

const WritingWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  width: 50%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  background-color: #000;
`;

const ContentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  & span:first-child {
    margin-left: 13px;
    height: 10%;
    font-weight: 800;
  }
`;
