import {Card, Col, Button} from "antd";

function FoodBox(props) {

    const {name, calories, image, servings} = props.food;
    const id = props.id;
    const deleteById = props.deleteByKey;
    return (
        <Col>
            <Card
                title={name}
                style={{width: 230, height: 300, margin: 10}}
            >
                <img src={image} height={60}/>
                <p>Calories: {calories}</p>
                <p>Servings: {servings}</p>
                <p>
                    <b>Total Calories: {calories * servings}</b> kcal
                </p>
                <Button type="primary"
                        onClick={() => deleteById(id)}
                > Delete </Button>
            </Card>
        </Col>
    );
}

export default FoodBox;