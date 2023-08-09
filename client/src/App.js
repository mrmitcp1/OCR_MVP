import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import {Route, Routes} from "react-router-dom";
import AddTrip from "./pages/add";
import ListTrip from "./pages/list";


function App() {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ListTrip/>}></Route>
          <Route path="/add" element={<AddTrip/>}></Route>
        </Routes>
      </>
  );
}

export default App;
