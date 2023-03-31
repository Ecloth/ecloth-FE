import TemperatureCode from '../../components/mainPageCode/TemperatureCode';

export default function Temperature() {
  return <TemperatureCode />;
}
const TempDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TempForm = styled.form`
  color: white;
  opacity: 100%;
  font-size: 65px;
  display: flex;
`;

const TempSpan = styled.div`
  font-size: 30px;
  margin-left: 10px;
`;
