import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import "./Home.css";
const data=require("../../data/db.json");
function Home() {
  return (
    <>
      <Header />
      <Tours dataArray={data}/>
      <Footer />
    </>
  );
}
export default Home;
