import PropTypes from "prop-types";
import { useState } from "react";
import Training from "./Training";

const Trainings = ({ trainings }) => {
  const [index, setIndex] = useState(0);

  const getRandomIndex = (i) => {
    const randomIndex = Math.floor(Math.random() * trainings.length);
    return randomIndex === i ? getRandomIndex(i) : randomIndex;
  };

  const changeTraining = (action) => {
    setIndex((i) => {
      switch (action) {
        case "next":
          return i >= trainings.length - 1 ? 0 : i + 1;
        case "prev":
          return i <= 0 ? trainings.length - 1 : i - 1;
        case "random":
          return getRandomIndex(i);
      }
    });
  };

  return <Training {...trainings[index]} changeTraining={changeTraining} />;
};

Trainings.propTypes = {
  trainings: PropTypes.array,
};

export default Trainings;
