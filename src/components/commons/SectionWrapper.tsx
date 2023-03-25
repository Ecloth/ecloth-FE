import styled from "styled-components";

function SectionWrapper({children}: {children: JSX.Element[]}) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.section`
  width: 80%;
  margin: 0 auto;
`;

export default SectionWrapper;
