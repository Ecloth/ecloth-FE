import styled from "styled-components";

function RecordTime({date}: {date: string}) {
  return <TimeText className="timeText">{date}</TimeText>;
}

export default RecordTime;

const TimeText = styled.span`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 0.6rem;
  line-height: 17px;
  margin-bottom: 3px;
  width: 15%;
  max-width: 25%;
  color: rgba(0, 0, 0, 0.5);
  text-align: end;
`;
