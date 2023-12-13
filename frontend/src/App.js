import './App.css';

import { useState, useEffect } from 'react';
import { Cart } from './components/Cart';
import { PopulateMenuItems } from './api/PopulateMenuItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { MenuItemPage } from './pages/MenuItemPage';
import { CheckoutPage } from './pages/CheckoutPage';
import Login from './components/Login';
import getItems from './api/getItems';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';


function App() {


  const [cartItems, setCartItems] = useState([])
  const [ingredient, setIngredient] = useState('brisket')
  const [userID, setUserID] = useState("")
  const [loginVisible, setLoginVisible] = useState(false)


  async function populate () {
    let response = await getItems("item", {})
    if (response.length == 0) {
      PopulateMenuItems()
    }
  }


  // add to cart function
  const addToCart = (item) => {
    setCartItems([
      ...cartItems,
      item
    ])
  }

  // remove from cart function
  // 
  // 

  // clear  function
  //
  //

  const fetchCalories = async () => {
    const response = await fetch('http://localhost:4000/nutrition')
    const data = await response.json()
    setCalories(data)
  }

  if (!basket) return (
    <div>
      <h1>loading...</h1>
    </div>
  )

  // get cart from local storage
  useEffect(() => {
    populate()  
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  // set cart in local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <div className="text-white bg-fancy-dark-blue">

      <BrowserRouter>

        <Nav setLoginVisible={setLoginVisible} loginVisible={loginVisible} cartItems={cartItems} />
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/menu'
            element={<MenuPage addToCart={addToCart} />}
          />
          <Route
            path='/menuitem'
            element={<MenuItemPage />}
          />

          <Route
            path='/checkout'
            element={<CheckoutPage />}
          />

        </Routes>

        <Footer />
      </BrowserRouter>


      {loginVisible && (userID === "" ? <Login setUserID={setUserID} /> :
        <div style={{ position: "fixed", right: 10, top: 10, padding: "10px", borderRadius: "10px", backgroundColor: "rgb(21,31,45)", color: "lightGray" }}>
          <h3 style={{ margin: 0, marginRight: 5, fontWeight: "bold", float: "left" }}>{userID.Username}</h3>
          <p onClick={() => setUserID("")} style={{ margin: 0, float: "left" }}>Log Out</p>
        </div>)}


    </div >
  )
}

export default App;
