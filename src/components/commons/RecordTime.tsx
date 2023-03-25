import styled from "styled-components";
<<<<<<< Updated upstream

function RecordTime({date}: {date: string}) {
  return <TimeText className="timeText">{date}</TimeText>;
=======
import dayjs from "dayjs";

function RecordTime({date}: {date: Date}) {
  const targetDate = dayjs(new Date());
  let diffHour = "";
  if (0<targetDate.diff(date, "hour") && targetDate.diff(date, "hour") < 24){
    console.log("DATE" ,date, "TARGETDATE :", targetDate,"DIFF:", targetDate.diff(date, "hour"))
     diffHour = targetDate.diff(date, "hour") + "시간"
  }
  return (
    <>
    {
      diffHour !== "" ?
      <TimeText className="timeText">{diffHour}</TimeText>
      :
      <TimeText className="timeText">{dayjs(date).format("YYYY-MM-DD")}</TimeText>
  }       </>
  )
>>>>>>> Stashed changes
}

export default RecordTime;

const TimeText = styled.span`
<<<<<<< Updated upstream
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
=======
  font-size: 0.6rem;
  font-weight: 400;
  line-height: 17px;
  text-align: end;
  width: 80px;

  color: rgba(0, 0, 0, 0.7);
>>>>>>> Stashed changes
`;
