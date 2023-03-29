import {useState} from "react";
import styled from "styled-components";
import {BiSliderAlt} from "react-icons/bi";
import { dummy } from "./FeedBody";
import { IPost } from "../../types/postType";
import { useRecoilState } from "recoil";
import { SelectedFilterState } from "../../atoms/postAtom";
export const selectList = ["", "최신", "좋아요", "조회수", "댓글"];

interface Item {
  productSlice: {
    loadingState: string;
    productList: any;
  };
}

function FeedFilter() {
  const [selected, setSelected] = useRecoilState<string | any>(SelectedFilterState);

  const handleSelect = (e: any) => {
    setSelected(e.target.value as string);
    console.log(selected)
  };

  return (
    <>
      <FilterWrapper>
        <BiSliderAlt className="icon" size="18" color="#2b90d9" />
        <Filter onChange={handleSelect} value={selected}>
          {selectList.map((item: string) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </Filter>
      </FilterWrapper>
    </>
  );
}

const FilterWrapper = styled.div`
  margin: 4px 15px;

  .icon {
    line-height: 20px;
  }
`;

const Filter = styled.select`
  width: 100px;
  font-size: 0.7rem;
  margin-left: 5px;
  padding-left: 1px;
  border-radius: 10px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 10px;
`;
export default FeedFilter;
