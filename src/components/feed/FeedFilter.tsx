import {useState} from "react";
import styled from "styled-components";
import {BiSliderAlt} from "react-icons/bi";
const selectList = ["최신", "좋아요", "조회수"];

interface Item {
  productSlice: {
    loadingState: string;
    productList: any;
  };
}

function FeedFilter() {
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(8);

  const offset = (page - 1) * limit;

  const [selected, setSelected] = useState("");

  // const Itemlist = useSelector((state: Item) => state.productSlice.productList);
  // const pricearr = [...Itemlist];
  // let selectedList: any = Itemlist;
  // let selectedList: any = [];
  // console.log(Itemlist);
  // if (selected === "") {
  //   selectedList = Itemlist.filter(
  //     (item: any) => item.category === "",
  //   );
  // } else if (selected === "") {
  //   selectedList = Itemlist.filter((item: any) => item.category === "");
  // } else if (selected === "") {
  //   selectedList = Itemlist.filter((item: any) => item.category === "");
  // } else if (selected === "") {
  //   selectedList = pricearr.sort((a, b) => a.price - b.price);
  // } else if (selected === "") {
  //   selectedList = pricearr.sort((a, b) => b.rating.rate - a.rating.rate);
  // }

  const handleSelect = (e: any) => {
    setSelected(e.target.value);
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
