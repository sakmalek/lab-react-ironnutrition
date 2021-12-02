import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import {useState} from "react";
import Search from "./components/Search";

function App() {
    const [foodBoxes, setFoodBoxes] = useState(foods);
    const [filteredFoodBoxes, setFilteredFoodBoxes] = useState(foodBoxes);

    const addForm = (o) => {
        setFoodBoxes(foodBoxes => [o, ...foodBoxes]);
    }

    const search = (query) => {
        const filtered = (query) &&
            foodBoxes.filter((food) => food.name.toLowerCase().includes(query.toLowerCase()))
            || foodBoxes
        setFilteredFoodBoxes(filtered)
    }
    const deleteByKey = (key) => {

        const updatedFoods = foodBoxes.filter((food, index) => index !== key)
        setFoodBoxes(updatedFoods)
        setFilteredFoodBoxes(updatedFoods)
    }


    return <div className="App">
        <h1>Food List</h1>
        <AddFoodForm addForm={addForm}/>
        <Search search={search}/>
        <div className="foodboxes">
            {filteredFoodBoxes.map((food, index) => {
                return <div key={index} className="food-wrapper">
                    <FoodBox food={food} id={index} deleteByKey={deleteByKey}/>
                </div>
            })}
        </div>
    </div>;
}

export default App;