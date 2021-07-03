import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";

import { DISHES } from "../shared/dishes";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDist: null,
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDist: dishId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onDishClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDist)[0]} />
            </div>
        );
    }
}

export default Main;
