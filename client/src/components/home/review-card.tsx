import "../../styles/review-card.css";
import { Review } from "../common/types";

export default function ReviewCard (props: Review){
    return(
        <div className="review-card">
            <div className="review-card-header">
                <div className="review-card-image-container">
                    <img src={props.image} className="review-card-image"></img>
                </div>
                <div className="review-card-information-container">
                    <p className="review-card-name">{props.name}</p>
                    <p className="review-card-occupation">{props.occupation}</p>
                </div>
            </div>
            <div className="review-card-body">
                <p className="review-card-text">{props.review}</p>
            </div>
        </div>
    )
};