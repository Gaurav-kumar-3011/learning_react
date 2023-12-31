import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";


//not using Keys (not acceptable)<<<<< index as Keys (not recommended) <<<<<< Unique Key (Best Practice)
const Body = () => {

    const [listOfRestaurant, setListOfRestaurants] = useState(resList);

    // let listOfRestaurant =[

    //     {
    //         "info": {
    //             "id": "5938",
    //             "name": "Burger King",
    //             "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    //             "areaName": "Shivaji Nagar",
    //             "costForTwo": "₹350 for two",
    //             "cuisines": [
    //                 "Burgers",
    //                 "American"
    //             ],
    //             "avgRating": 4.2,
    //             "sla": "20 mins"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "5939",
    //             "name": "KFC",
    //             "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    //             "areaName": "Bansi Nagar",
    //             "costForTwo": "₹250 for two",
    //             "cuisines": [
    //                 "Chicken roll",
    //                 "Veg Roll"
    //             ],
    //             "avgRating": 3.8,
    //             "sla": "10 mins"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "5940",
    //             "name": "Dominos",
    //             "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    //             "areaName": "BTM Layout",
    //             "costForTwo": "₹550 for two",
    //             "cuisines": [
    //                 "Pizza",
    //                 "veggy parcel"
    //             ],
    //             "avgRating": 4.1,
    //             "sla": "20 mins"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "5941",
    //             "name": "Motu Seth",
    //             "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    //             "areaName": "BTM Layout",
    //             "costForTwo": "₹250 for two",
    //             "cuisines": [
    //                 "Chicken Manchurian",
    //                 "naan"
    //             ],
    //             "avgRating": 3.9,
    //             "sla": "16 mins"
    //         }
    //     }
    // ]

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {

                    const filterData = listOfRestaurant.filter((res) => res.info.avgRating > 4.4);
                    console.log(filterData);
                    setListOfRestaurants(filterData);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }

                {/* -----passing data using props-----
               <RestaurantCard resName="Meghana Biryani" cuisine="Biryani, North Indian, Asian" rating="4.4 ⁎" delTime="38 mins" />
                <RestaurantCard resName="KFC" cuisine="Rolls, Burger" rating="3.2⁎" delTime="28 mins" />
                <RestaurantCard resName="Roti Wala" cuisine="Bread, patties" rating="4.2⁎" delTime="15 mins" />
                <RestaurantCard resName="Motu Seth Rolls" cuisine="Chicken roll, Egg roll" rating="4.5⁎" delTime="41 mins" /> */}
            </div>
        </div>
    )
}
export default Body;