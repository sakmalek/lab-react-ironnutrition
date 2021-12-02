import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import {useState} from "react";

function App() {
    const [foodBoxes, setFoodBoxes] = useState(foods);
    const addForm = (o) => {
        console.log(o)
        const updatedAllFoods = [o, ...foodBoxes]
        setFoodBoxes(updatedAllFoods);
    }


    return <div className="App">
        <h1>Food List</h1>
        <AddFoodForm addForm={addForm}></AddFoodForm>

        <div className="foodboxes">
            {foodBoxes.map((food, index) => {
                return <div key={index} className="food-wrapper">
                    <FoodBox food={food}/>
                </div>
            })}
        </div>
    </div>;
}

export default App;