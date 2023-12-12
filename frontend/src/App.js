import './App.css';

import { useState, useEffect } from 'react';
import { Basket } from './components/Basket';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { MenuItemPage } from './pages/MenuItemPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { Login } from './components/Login';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';


function App() {

  // const [basket, setBasket] = useState('item one')
  // const [calories, setCalories] = useState([""])
  // const [ingredient, setIngredient] = useState('brisket')
  // const [userID, setUserID] = useState("")

  // const fetchCalories = async (ingredient) => {
  //   const response = await fetch('http://localhost:4000/nutrition')
  //   const data = await response.json()
  //   setCalories(data)
  // }

  // useEffect(() => {
  //   fetchCalories(ingredient)
  // }, [])


  // if (!calories || !basket) return (
  //   <div>
  //     <h1>loading...</h1>
  //   </div>
  // )



  return (
    <div className="App text-white">

      {/* <p>{`${calories[0].name} calories: ${calories[0].calories}`}</p> */}

      <BrowserRouter>

        <Nav />
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/menu'
            element={<MenuPage />}
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


      {/* {userID == "" ? <Login setUserID={setUserID} /> : <h3 style={{ position: "fixed", right: 10, top: 10, padding: "10px", borderRadius: "10px", backgroundColor: "lightGrey" }}>{userID.Username}</h3>} */}


    </div>
  )
}

export default App;
