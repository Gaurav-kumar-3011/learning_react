import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    console.log(props);
    //const { cuisine, delTime, rating, resName } = props;  //use assigned variables inCase of props
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, areaName, sla } = resData?.info;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="food-img" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h4>{name}</h4>
            <h5>{cuisines.join(" , ")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{avgRating}⁎ {areaName}</h5>
            {/* <h5>{sla}</h5> */}
            <h5>{sla.slaString}</h5>
        </div>
    )
}

export default RestaurantCard;