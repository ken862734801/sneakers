import "../../styles/review-card.css";

interface Review {
    name: string;
    occupation: string;
    review: string;
    image: string;   
}

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
                <div className="review-card-text">{props.review}</div>
            </div>
        </div>
    )
};