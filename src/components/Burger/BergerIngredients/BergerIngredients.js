import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BergerIngredients.css";

class BurgerIngredients extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className="BreadBottom"></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        );
        break;
      case "tikki":
        ingredient = <div className="Tikki"></div>;
        break;
      case "cheese":
        ingredient = <div className="Cheese"></div>;
        break;
      case "salad":
        ingredient = <div className="Salad"></div>;
        break;
      case "chutney":
        ingredient = <div className="Chutney"></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredients;
