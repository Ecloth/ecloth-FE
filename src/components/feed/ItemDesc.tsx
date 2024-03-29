import styled from "styled-components";

function ItemDesc({title, content}: {title: string; content: string}) {
  return (
    <DescWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <TextWrapper>{content}</TextWrapper>
    </DescWrapper>
  );
}

export default ItemDesc;

const DescWrapper = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const TextWrapper = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin: 0;
  height: 55px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
