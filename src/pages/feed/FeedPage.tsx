import SectionWrapper from "../../components/commons/SectionWrapper";
import MainFeed from "../../components/myPage/MainFeed";
import UserInfo from "../../components/myPage/UserInfo";

function FeedPage() {
  return (
    <SectionWrapper>
      <UserInfo />
      <MainFeed />
    </SectionWrapper>
  );
}

export default FeedPage;
