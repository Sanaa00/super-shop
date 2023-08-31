import './App.css'
import { Route, Routes } from "react-router-dom";
import Sidbar from './Component/Sidbar/Sidbar';
import Products from "./Pages/products/Products"
import SingleItem from './Component/SingleItem/SingleItem';
function App() {


  return (
    <div >
      <Routes>
        <Route path="/" element={<Sidbar />}> 
          <Route path="/"  element={<Products />} >
            <Route path="/products/:id" element={<SingleItem />} />
          </Route>
        </Route>
      </Routes>{" "}
    </div>
  )
}

export default App

