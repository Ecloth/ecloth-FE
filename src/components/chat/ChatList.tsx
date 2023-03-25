import styled from "styled-components";
import ListItem from "./ListItem";

function ChatList() {
  return (
    <ListWrapper>
      <ul className="list">
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </ListWrapper>
  );
}

export default ChatList;

const ListWrapper = styled.span`
  display: flex;
  flex-direction: column;

  width: 30%;
  & .list {
    display: flex;
    border-radius: 20px;
    padding: 10px;
    flex-direction: column;
    background: var(--grayColor2);
    margin: 0;
  }

  & .itemwrapper:last-child {
    border: 0;
  }
`;
