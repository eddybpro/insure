import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <img src={props.img} alt="" className="Card-Img" />
      <h1 className="Card-Title">{props.title}</h1>
      <p className="Card-Desc">{props.desc}</p>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Card;
