import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return <div></div>;
        }
    }
    renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments.map((comment) => {
                var date = new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                }).format(comment.Date);
                return (
                    <li className="my-4">
                        <div key={comment.id}>{comment.comment}</div>
                        <div key={comment.id}>
                            -- {comment.author}, {date}
                        </div>
                    </li>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">{comments}</ul>
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;
