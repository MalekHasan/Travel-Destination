import { Link } from "react-router-dom";
import "./Tours.css"
function Tours(props)
// let {key,item}
{
    return<>
    <Link to={'city/'+props.tourId} key={props.index} className="link">
        <div className="tour" key={props.tourId}>
                    <img src={props.tour.image} alt={props.tour.name}/>
                    <h3>{props.tour.name}</h3>
        </div>
    </Link>
    </>

}
export default Tours;

// old code with it's return
// return (<>
//     <div className="container">
//     <div className="tours">
// {
//     props.dataArray.map((item,i)=>{
//         return (
            // <div className="tour" key={i}>
            //     <img src={item.image} alt={item.name} />
            //     <h3>{item.name}</h3>
            //     </div>)
//     })
// }
// </div>
//     </div>
// </>)