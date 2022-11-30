import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "./Review.scss";

interface Review {
  img: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  driver: string;
}
export default function Review({
  img,
  name,
  date,
  rating,
  text,
  driver,
}: Review) {
  return (
    <article className="review">
      <div className="review__header">
        <img src={img} className="review__img" alt="" />
        <div className="flex flex-wrap">
          <p className="review__name">{name}</p>
          <span className="review__date">{date}</span>
        </div>
        <span className="review__rate">Рейтинг: {rating}/5</span>
      </div>
      <Rating allowFraction initialValue={rating} className="my-3" size={25} />
      <h5 className="review__title">Отзыв:</h5>
      <p className="review__text">{text}</p>
      <h5 className="review__title">Водитель:</h5>
      <Link to="" className="review__link">
        {driver}
      </Link>
    </article>
  );
}
