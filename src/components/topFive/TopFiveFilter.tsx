import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { SelectedTopFiveFilterState } from "../../atoms/postAtom";

export const filterItems = ["좋아요", "조회수"];
function TopFiveFilter() {
  const [selected, setSelected] = useRecoilState<string | any>(
    SelectedTopFiveFilterState,
  );
  const [checkedInputs, setCheckedInputs] = useState(selected);

  const changeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckedInputs(e.target.id);
      setSelected(checkedInputs);
    }
  };
  return (
    <FilterWrapper>
      {filterItems.map((item, idx) => (
        <div key={idx}>
          <FilterItem
            type="radio"
            name="filterItem"
            value={checkedInputs}
            id={item}
            onChange={changeRadio}
          />
          <ItemText htmlFor={item}>{item}</ItemText>
        </div>
      ))}
    </FilterWrapper>
  );
}

export default TopFiveFilter;

const FilterWrapper = styled.form`
  display: block;
  margin-top: 50px;
  margin-bottom: 10px;
  height: 50px;
`;

const ItemText = styled.label`
  cursor: pointer;
  font-size: 1rem;
  color: #ffffff;
  text-align: center;
  font-weight: 800;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
`;
const FilterItem = styled.input.attrs({ type: "radio" })`
  display: none;
  &:hover {
    cursor: pointer;
  }
  &:checked + label {
    background: none;
    font-weight: 800;
    font-size: 1.3rem;
    line-height: 36px;
    text-align: center;
    height: 35px;
    line-height: 1.8rem;
    font-weight: 800;
    /* display: none; */
    color: var(--blueColor2);
  }
`;
