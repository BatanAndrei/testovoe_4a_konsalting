import styles from './checkbox.module.css';

const Checkbox = ({ className }) => {
	return (
		<label className={styles.label}>
			<input type="checkbox" className={styles.checkbox} />
			<span className={styles.fake}></span>
		</label>
	)
}

export default Checkbox;