import {useParams} from "react-router-dom";
import SectionWrapper from "../../components/commons/SectionWrapper";
import {dummy} from "../../components/feed/FeedBody";
import MainFeed from "../../components/myPage/MainFeed";
import UserInfo from "../../components/myPage/UserInfo";

function FeedPage() {
<<<<<<< Updated upstream
  const {id} = useParams();
  const posts = dummy.filter(item => id === item.member_id);
=======
<<<<<<< Updated upstream
=======
  const {id} = useParams();
<<<<<<< Updated upstream
  const posts = dummy.filter(item => id === item.member_id);
=======
  const posts = dummy.filter(item => parseInt(id as string, 10) === item.member_id);
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  return (
    <SectionWrapper>
      <UserInfo />
      <MainFeed posts={posts} />
    </SectionWrapper>
  );
}

export default FeedPage;
