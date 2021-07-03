import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderMenuItem({ dish, onDishClick }) {
    return (
        <Card onClick={() => onDishClick(dish.id)}>
            <CardImg src={dish.image} alt={dish.name} width="100%" />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Menu(props) {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onDishClick={props.onDishClick} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">{menu}</div>
        </div>
    );
}

export default Menu;
