import styled from "styled-components";
import dayjs from "dayjs";

function RecordTime({ date }: { date: Date }) {
  const targetDate = dayjs(new Date());
  let diffHour = "";
  if (0 < targetDate.diff(date, "hour") && targetDate.diff(date, "hour") < 24) {
    diffHour = targetDate.diff(date, "hour") + "시간";
  }
  return (
    <>
      {diffHour !== "" ? (
        <TimeText className="timeText">{diffHour}</TimeText>
      ) : (
        <TimeText className="timeText">
          {dayjs(date).format("YYYY-MM-DD")}
        </TimeText>
      )}{" "}
    </>
  );
}

export default RecordTime;

const TimeText = styled.span`
  font-size: 0.6rem;
  font-weight: 400;
  line-height: 17px;
  text-align: start;
  width: 60px;

  color: rgba(0, 0, 0, 0.7);
`;
