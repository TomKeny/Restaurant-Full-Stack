import './App.css';
import {useState, useEffect} from 'react'
import {Basket} from './components/Basket'

function App() {

  const [basket, setBasket] = useState('item one')
  const [calories, setCalories] = useState([])
  const [ingredient, setIngredient] = useState('brisket')

  // const API_KEY = process.env.REACT_APP_API_KEY
  
  const fetchCalories = async (ingredient) => {
    const response = await fetch('http://localhost:4000/nutrition')
    const data = await response.json()
    setCalories(data)
    

    // let url = "https://api.api-ninjas.com/v1/nutrition?query=" + ingredient
    // console.log(url)
    // const response = await fetch(url , {
    //   headers: {
    //     "X-Api-Key": "I1ag09jAflT2yzafLPY2rg==uQsRfm7qfrirU7eq"
    //   }
    // })
    // const data = await response.json()
  }
  useEffect(() => {
    fetchCalories(ingredient)
  }, [])

  if(!calories || !basket) return (
    <div>
      <h1>loading...</h1>
    </div>
  )
  return (
    <div className="App">
      <Basket 
        basket = {basket}
      />
      <p>{`${calories[0].name} calories: ${calories[0].calories}`}</p>
    </div>
  )
}

export default App;
