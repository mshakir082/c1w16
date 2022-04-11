
import logo from './logo.svg';
import './App.css';
import GroceryDetails from './components/Grocerydetails';
import CartButton from "./components/CartButton"

function App() {
  return (
    <div className="App">
     <GroceryDetails CartButton={CartButton} />
     
    </div>
  );
}

export default App;
