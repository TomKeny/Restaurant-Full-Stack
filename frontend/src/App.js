import './App.css';
import {useState, useEffect} from 'react'
import {Basket} from './components/Basket'

function App() {

  const [basket, setBasket] = useState('item one')
  return (
    <div className="App">
      <Basket 
        basket = {basket}
      />
    </div>
  );
}

export default App;
