import './App.css';

import { useState, useEffect } from 'react'
import { Basket } from './components/Basket'
import { PopulateMenuItems } from './api/PopulateMenuItems'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MenuPage } from './pages/MenuPage'
import { MenuItemPage } from './pages/MenuItemPage';
import { CheckoutPage } from './pages/CheckoutPage';
import Login from './components/Login';
import getItems from './api/getItems';
import { Nav } from './components/Nav'


function App() {

  const [calories, setCalories] = useState([""])
  const [basket, setBasket] = useState('item one')
  const [ingredient, setIngredient] = useState('brisket')
  const [userID, setUserID] = useState("")

  const fetchCalories = async () => {
    const response = await fetch('http://localhost:4000/nutrition')
    const data = await response.json()
    setCalories(data)
  }

  async function populate () {
    let response = await getItems("item", JSON.stringify({}))
    if (response.length == 0) {
      PopulateMenuItems()
      // get items data and run a calorie fetch for each item
      
    }
  }
 
  useEffect(() => {
    // fetchCalories() // put into populate so it only runs once
    populate()   
  }, [])




  if (!basket) return (
    <div>
      <h1>loading...</h1>
    </div>
  )



  return (
    <div className="App">
      <Nav />

      <Basket
        basket={basket}
      />

      <BrowserRouter>
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
      </BrowserRouter>


      {userID === "" ? <Login setUserID={setUserID}/>: 
      <div style={{position: "fixed", right: 10, top: 10, padding: "10px", borderRadius: "10px", backgroundColor: "lightGrey"}}>
        <h3 style={{margin: 0}}>{userID.Username}</h3>
        <p onClick={() => setUserID("")} style={{margin: 0}}>Log Out</p>
        </div>}


    </div>
  )
}

export default App;
