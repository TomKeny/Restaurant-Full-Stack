import './App.css';
import {useState, useEffect} from 'react'
import {Basket} from './components/Basket'
import Login from './components/Login';

function App() {

  const [basket, setBasket] = useState('item one')
  const [calories, setCalories] = useState([""])
  const [ingredient, setIngredient] = useState('brisket')

  // const API_KEY = process.env.REACT_APP_API_KEY
  
  const fetchCalories = async (ingredient) => {
    let url = "https://api.api-ninjas.com/v1/nutrition?query=" + ingredient
    console.log(url)
    const response = await fetch(url , {
      headers: {
        "X-Api-Key": "I1ag09jAflT2yzafLPY2rg==uQsRfm7qfrirU7eq"
      }
    })
    const data = await response.json()
    setCalories(data)
  }

  // useEffect( function () {
  //   fetchCalories(ingredient)
  // }, [])
  

  return (
    <div className="App">
      <Basket 
        basket = {basket}
      />
      <p>{`${ingredient} calories: ${calories[0].calories}`}</p>

      <Login />
    </div>
  )
}

export default App;
