import './App.css';

import { useState, useEffect } from 'react';
import { PopulateMenuItems } from './components/PopulateMenuItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { MenuItemPage } from './pages/MenuItemPage';
import { CartPage } from './pages/CartPage';

import Login from './components/Login';
import { ReviewPage } from './pages/ReviewPage';

import getItems from './api/getItems';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { ContactUsPage } from './pages/ContactUs';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderHistory } from './pages/OrderHistory';

import loadingImage from './images/Loading-PNG-Photo-export.png'


function App() {

  const [cartItems, setCartItems] = useState([])
  const [cartQuantity, setCartQuantity] = useState()
  const [cartSubTotal, setCartSubTotal] = useState()
  const [userID, setUserID] = useState("")

  // populate menu items if none exist
  async function populate() {
    let response = await getItems("item", {})
    if (response.length == 0) {
      PopulateMenuItems()
    }
  }

  // add to cart function
  const addToCart = (item, quantity) => {

    const isItemAlreadyInCart = cartItems.find((cartItem) => cartItem._id === item._id)

    // if the item is already in the cart...
    if (isItemAlreadyInCart) {

      // update the quantity, otherwise return the item
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity += quantity }
            : cartItem
        )
      );
    } else {
      // if the item did not exist in the cart, add to cart
      setCartItems([...cartItems, { ...item, quantity: quantity }]);
    }
  }

  // remove from cart function
  const removeFromCart = (item, quantity) => {

    // update the quantity and update state
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem._id === item._id
          ? { ...cartItem, quantity: item.quantity - quantity }
          : cartItem
      )
    )
  }

  // populate menu if empty
  useEffect(() => {
    populate()

    const userID = localStorage.getItem("userID");
    if (userID) {
      console.log(userID)
      setUserID(JSON.parse(userID));
    }

  }, []);

  // get cart items from local storage and update state
  useEffect(() => {
    const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log('>>>>', cartItemsFromLocalStorage)


    if (cartItemsFromLocalStorage.length) {
      // set cart items in state
      setCartItems(cartItemsFromLocalStorage);
    }
  }, [])

  // if cartItems is updated in state, update cartItems in local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    setCartQuantity(
      cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0,
      )
    )

    setCartSubTotal(
      cartItems.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.Price),
        0,
      )
    )
  }, [cartItems]);


  // .....
  useEffect(() => {
    localStorage.setItem("userID", JSON.stringify(userID))
    console.log(userID)
  }, [userID]);

  if (!cartItems) return (
    <div className='h-screen w-screen bg-fancy-dark-blue place-content-center grid'>
      <img src={loadingImage} className='w-40 h-40 animate-spin-slow place-self-center'/>
      <h1 className='text-gold text-3xl w-max h-max place-self-center mt-5'>loading...</h1>
    </div>
  )

  return (
    <div className=" h-full text-white bg-fancy-dark-blue">

      <BrowserRouter>

        <Nav userID={userID} setUserID={setUserID} cartQuantity={cartQuantity} />

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
            path='/menuitem/:id'
            element={<MenuItemPage />}
          />

          <Route
            path='/cart'
            element={<CartPage cartItems={cartItems} cartSubTotal={cartSubTotal} addToCart={addToCart} removeFromCart={removeFromCart} />}
          />

          <Route
            path='/checkout'
            element={<CheckoutPage cartItems={cartItems} setCartItems={setCartItems} cartSubTotal={cartSubTotal} userID={userID}/>}
          />

          <Route
            path='/contactus'
            element={<ContactUsPage />}
          />

          <Route

            path='/reviews'
            element={<ReviewPage />}
          />
              
          <Route

            path='/orderhistory'
            element={<OrderHistory userID={userID}/>}

          />

        </Routes>

        <Footer />
      </BrowserRouter>


    </div>
  )
}

export default App;