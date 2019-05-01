import React from "react";
import PropTypes from "prop-types";

const Validation = props => {
  const { input } = props;

  let validationMessage = "Text long enough";
  if (input.length < 5) {
    validationMessage = "Text too short";
  }

  return <div>{input ? validationMessage : null}</div>;
};

Validation.propTypes = {
  input: PropTypes.string.isRequired
};

export default Validation;
