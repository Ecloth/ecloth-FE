import styled from 'styled-components';
import TopFiveItem from '../topFive/TopFiveItem';
import { IPost } from '../../types/postType';
import { useParams } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';
import { postList } from '../../atoms/postAtom';

function MainFeed() {
  const { id } = useParams();

  //서버 연동 전 테스트 코드
  const PostsLoadable = useRecoilValueLoadable<IPost[]>(postList);
  let posts: IPost[] =
    'hasValue' === PostsLoadable.state ? PostsLoadable.contents : [];
  const postsList = posts.filter(
    (item) => item.memberId === parseInt(id as string, 10),
  );

  return (
    <FeedWrapper>
      <div className="FeedWrapper">
        {postsList.map((item) => (
          <div key={item.postId} className="imageWrapper">
            <TopFiveItem itemProps={item} />
          </div>
        ))}
      </div>
    </FeedWrapper>
  );
}

export default MainFeed;

const FeedWrapper = styled.section`
  margin: 15px auto 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  & .FeedWrapper {
    display: flex;
    flex: 1;
    .imageWrapper {
      width: 33%;
    }
  }
`;
