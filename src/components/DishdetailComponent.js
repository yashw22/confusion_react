import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
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

function RenderComments({ dish }) {
    if (dish != null) {
        const comments = dish.comments.map((comment) => {
            var date = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(comment.Date);
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
function DishDetail(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments dish={props.dish} />
                </div>
            </div>
        </div>
    );
}

export default DishDetail;
