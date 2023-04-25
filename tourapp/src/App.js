import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from './components/home/Home';
import {Route,Routes} from 'react-router-dom';
import TourDetail from './components/tourDetail/TourDetail';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (<>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/city/:id' element={<TourDetail/>} />
  </Routes>
  <Footer/>

  </>);
}

export default App;
