import "./App.css";
import foods from "./foods.json";

function App() {
    return <div className="App">
        <h1>Food List</h1>
        {foods.map((food, index) => {
            return <div key={index} className="food-wrapper">
                <p> {food.name} </p>
                <img src={food.image} style={{height: '5rem'}}/>
            </div>
        })}
    </div>;
}

export default App;