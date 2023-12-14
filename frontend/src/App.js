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
import { ContactUsPage } from './pages/ContactUs';


function App() {


  const [cartItems, setCartItems] = useState([])
  const [userID, setUserID] = useState("")

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

  

  // get cart from local storage
  useEffect(() => {
    populate()  
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }

    const userID = localStorage.getItem("userID");
    if (userID != "undefined" && userID !== undefined) {
      setUserID(JSON.parse(userID));
    }

  }, []);

  // set cart in local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
  localStorage.setItem("userID", JSON.stringify(userID))
  console.log(userID)
  }, [userID]);

  if (!cartItems) return (
      <div>
        <h1>loading...</h1>
      </div>
    )

  return (
    <div className="text-white bg-fancy-dark-blue">

      <BrowserRouter>

        <Nav userID={userID} setUserID={setUserID} cartItems={cartItems} />
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

          <Route
            path='/contactus'
            element={<ContactUsPage />}
          />

        </Routes>

        <Footer />
      </BrowserRouter>


    </div >
  )
}

export default App;
