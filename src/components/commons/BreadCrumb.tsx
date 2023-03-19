import styled from "styled-components";

function BreadCrumb({title}: {title: string}) {
  return <BreadWrapper>{title}</BreadWrapper>;
}

const BreadWrapper = styled.div`
  width: 100px;
  color: var(--blueColor);
  font-weight: 800;
  font-size: 2rem;
  margin: 10px 10px 0 10px;
  line-height: 48px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export default BreadCrumb;
