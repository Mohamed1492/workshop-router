import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./Components/ProductList";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from "./Components/Contact";
import About from "./Components/About";
import Details  from "./Components/Details";

function App() {

  const [products, setProducts] = useState([
    {
      id:1,name:"Kappa Basket Logo Sanantonio- 940 Green-Black",pic:"https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/99/9926/1.jpg?6430",price:85
    },
    {
      id:2,name:" Ferro Montre pour femme - Rose Gold - Garantie 1An",pic:"https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/14/8933/1.jpg?4924",price:110
    },
    {
      id:3,name:"Sultan Barbecue grils à charbon Design Conique En Acier - Noir",pic:"https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/44/7647/1.jpg?1446",price:44
    },
  ])
  return <>
  <Router>
  <NavBar>
  </NavBar>
<Routes>
  <Route path="/"  element={

  <ProductList items={products} />
  } />
<Route path="/contact" element={<Contact/>} />
<Route path="/about" element={<About/>} />
<Route path="/info/:id" element={<Details list={products} />} />
</Routes>
  </Router>
  </>;
}

export default App;
