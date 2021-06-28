import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDist: null,
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDist: dish });
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            <div></div>;
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg
                            width="100%"
                            src={dish.image}
                            alt={dish.name}
                        />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">{menu}</div>
                <div className="row">
                    {this.renderDish(this.state.selectedDist)}
                </div>
            </div>
        );
    }
}

export default Menu;
