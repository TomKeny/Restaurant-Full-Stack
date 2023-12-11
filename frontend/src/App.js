import './App.css';
import {useState, useEffect} from 'react'
import {Basket} from './components/Basket'

function App() {

  const [basket, setBasket] = useState('item one')
  const [calories, setCalories] = useState([])
  const [ingredient, setIngredient] = useState('brisket')
  
  const fetchCalories = async (ingredient) => {
    const response = await fetch('http://localhost:4000/nutrition')
    const data = await response.json()
    setCalories(data)
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
