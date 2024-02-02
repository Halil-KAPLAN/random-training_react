import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Training = ({ title, content, price, changeTraining }) => {
  return (
    <div className="trainingMain">
      <h2>Trainings</h2>
      <button
        className="cardRandomBtn"
        onClick={() => {
          changeTraining("random");
        }}
      >
        Get Random Training
      </button>
      <div className="cardContainer">
        <button
          onClick={() => {
            changeTraining("prev");
          }}
        >
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2>{title}</h2>
            <h4>{price}₺</h4>
            <p>{content}</p>
          </div>
        </div>
        <button
          onClick={() => {
            changeTraining("next");
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

Training.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  price: PropTypes.number,
  changeTraining: PropTypes.func,
};

export default Training;
