import styled from "styled-components";
import { BiSliderAlt } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { SelectedFilterState } from "../../atoms/postAtom";
import { useEffect } from "react";

export const selectList = ["최신", "좋아요", "조회수"];

function FeedFilter() {
  const [selected, setSelected] = useRecoilState<string | any>(
    SelectedFilterState,
  );

  useEffect(() => {
    // axios
    //   .get(`http://13.125.74.102:80/api/feed/post`)
    //   // .get(`http://13.125.74.102:8080/api/feed/post`)
    //   .then(function (response) {
    //     console.log(response.data);
    //     setPostsList(response.data);
    //   });
  }, []);

  const handleSelect = (e: any) => {
    setSelected(e.target.value as string);
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
