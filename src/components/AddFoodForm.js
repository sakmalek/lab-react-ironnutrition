import {useState} from "react";
import {Input} from "antd";

function AddFoodForm({addForm}) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)


    const submitHandler = (e) => {
        e.preventDefault();

        const newFoodBox = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        addForm(newFoodBox);
        reset();
    }

    const reset = () => {
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
    }


    return (

        <div className="add-form">
            <form onSubmit={submitHandler}>

                <label htmlFor="name">Name:</label>
                <Input type="text"
                       name="name"
                       value={name}
                       onChange={e => setName(e.target.value)}/>

                <label htmlFor="image">Image:</label>
                <Input type="text"
                       name="image"
                       value={image}
                       onChange={e => setImage(e.target.value)}/>

                <label htmlFor="calories">Calories:</label>
                <Input type="number"
                       name="calories"
                       value={calories}
                       onChange={e => setCalories(e.target.value)}/>

                <label htmlFor="servings">Servings:</label>
                <Input type="number"
                       name="servings"
                       value={servings}
                       onChange={e => setServings(e.target.value)}/>

                <button type="submit">Add Food box</button>
            </form>
        </div>
    )
}

export default AddFoodForm;