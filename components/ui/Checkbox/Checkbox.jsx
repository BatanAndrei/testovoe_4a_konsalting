import styles from './checkbox.module.css';
import classNames from 'classnames';

const Checkbox = ({ handleChange, validationCheckbox }) => {
  return (
    <label
      className={classNames(styles.label, {
        [styles.error]: !validationCheckbox,
      })}
    >
      <input
        type="checkbox"
        onChange={handleChange}
        className={styles.checkbox}
      />
      <span className={styles.fake}></span>
    </label>
  );
};

export default Checkbox;
