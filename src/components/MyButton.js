import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Component.module.css";

export default class MyButton extends Component {
  render() {
    const { buttonText } = this.props;

    return (
      <button className={styles.loginButton}>
            {buttonText}
      </button>
    );
  }
}

MyButton.propTypes = {
//   id: PropTypes.number.isRequired,
  buttonText: PropTypes.string,
};

MyButton.defaultProps = {
  buttonText: "Login",
}
