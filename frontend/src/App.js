import './App.css';
import { useState, useEffect } from 'react'
import { Basket } from './components/Basket'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MenuPage } from './pages/MenuPage'
import { MenuItemPage } from './pages/MenuItemPage';
import { CheckoutPage } from './pages/CheckoutPage';

function App() {

  const [basket, setBasket] = useState('item one')
  const [calories, setCalories] = useState([])
  const [ingredient, setIngredient] = useState('brisket')

  // const API_KEY = process.env.REACT_APP_API_KEY

  const fetchCalories = async (ingredient) => {
    let url = "https://api.api-ninjas.com/v1/nutrition?query=" + ingredient
    console.log(url)
    const response = await fetch(url, {
      headers: {
        "X-Api-Key": "I1ag09jAflT2yzafLPY2rg==uQsRfm7qfrirU7eq"
      }
    })
    const data = await response.json()
    setCalories(data)
  }
  useEffect(() => {
    fetchCalories(ingredient)
  }, [])

  if (!calories || !basket) return (
    <div>
      <h1>loading...</h1>
    </div>
  )
  return (
    <div className="App">
      <Basket
        basket={basket}
      />
      <p>{`${ingredient} calories: ${calories[0].calories}`}</p>
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
    </div>
  )
}

export default App;
