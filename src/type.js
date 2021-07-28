import PropTypes from "prop-types";

export const Item = {
  content: PropTypes.string.isRequired,
  isComplete: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired
};
