import Search from "./Search";
import dataList from "../utils/dummyData";
import Foodcard from "./FoodCard";

export const Body = () => {
  return (
    <div>
      <Search />
      <div className="cards-container">
        {dataList.map((data) => (
          <Foodcard dataObj={data?.info} key={data?.info?.id}/>
        ))}
      </div>
    </div>
  );
};

export default Body;
