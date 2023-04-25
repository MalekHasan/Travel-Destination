import Tours from "../tours/Tours";
import "./Home.css";
let data=require("../../data/db.json");
function Home() {
  return (
    <>
      <div className="container"> 
        <div className="tours">
            {data.map((item,i) => <Tours tourId={item.id} tour={item} index={i} />)}
          </div>
      </div>
      {/* <Tours dataArray={data}/> */}
    </>
  );
}
export default Home;
