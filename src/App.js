import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
    return <div className="App">
        <h1>Food List</h1>
        <div className="foodboxes">
            {foods.map((food, index) => {
                return <div key={index} className="food-wrapper">
                    <FoodBox food={food}/>
                </div>
            })}
        </div>
    </div>;
}

export default App;