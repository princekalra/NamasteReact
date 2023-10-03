import { CARD_IMG_URL } from "../utils/constant";
const Foodcard = ({ dataObj }) => {
  return (
    <div className="food-card">
      <img
        className="food-card-img"
        src={
          CARD_IMG_URL +
          dataObj.cloudinaryImageId
        }
      />
      <h3>{dataObj.name}</h3>
      <h4>{dataObj.cuisines.join(", ")}</h4>
      <h4>{dataObj.avgRating}</h4>
    </div>
  );
};
export default Foodcard;