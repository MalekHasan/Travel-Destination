import { useParams } from "react-router-dom";
import './TourDetail.css'
import { useState } from "react";
let data=require("../../data/db.json");
function TourDetail () {
    let {id}=useParams();
    let [tour]=(data.filter((element)=> element.id === id));
    const [showMore,setShowMore]=useState(false);
    const descLength =()=>
    {
        setShowMore(!showMore)
    }
console.log(tour); 
    return <>
    <div className="container">
        <div className="tour-content">
            <div  className="img">
                <img src={tour.image} alt={tour.name}/>
            </div>
            <div className="tour-text">
                <h3>City: {tour.name}</h3>
                <h4>Price: {tour.price}</h4>
                <p >
                    {showMore?tour.info:tour.info.split(" ").splice(0,40).join(" ")}
                    <span onClick={descLength} className="see-more">{showMore?' see less':' see more'}</span>
                </p>
            </div>
        </div>
    </div>
    </>
    }
        export default TourDetail;