import {useParams} from "react-router-dom";
import SectionWrapper from "../../components/commons/SectionWrapper";
import {dummy} from "../../components/feed/FeedBody";
import MainFeed from "../../components/myPage/MainFeed";
import UserInfo from "../../components/myPage/UserInfo";

function FeedPage() {
  const {id} = useParams();
  const posts = dummy.filter(item => parseInt(id as string, 10) === item.member_id);
  return (
    <SectionWrapper>
      <UserInfo />
      <MainFeed posts={posts} />
    </SectionWrapper>
  );
}

export default FeedPage;
