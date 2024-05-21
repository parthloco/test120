import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Component.module.css";

export default class ClassEnumTypes extends Component {
  render() {
    const { id, name, rating, specialisations } = this.props;

    return (
      <div id={id} className={styles.imageHolder}>
        <img className={styles.imageIcon} alt="" src={"/image@2x.png"} />
        <div className={styles.details}>
          <div className={styles.content}>
            <div className={styles.name}>
              <div className={styles.madisonFroning}>{name}</div>
              <div className={styles.star}>
                <img className={styles.starIcon} alt="" src="/star.svg" />
                <div className={styles.div}>/{rating}</div>
              </div>
            </div>
            <div className={styles.line} />
            <div className={styles.content1}>
              <div className={styles.specilitis}>
                <div className={styles.crossfitExpoortNutrition}>
                  {specialisations}
                </div>
                <b className={styles.specialisations}>Specialisations :</b>
              </div>
              <div className={styles.socialIcon}>
                <img className={styles.instaIcon} alt="" src="/insta.svg" />
                <img className={styles.fbIcon} alt="" src="/fb.svg" />
                <img className={styles.twiterIcon} alt="" src="/twiter.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ClassEnumTypes.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  rating: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  specialisations: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

ClassEnumTypes.defaultProps = {
  name: "Madison Froning",
  rating: 5,
  specialisations: "Crossfit Expoort, Nutrition & Rehab",
};
