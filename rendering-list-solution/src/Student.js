import styles from "./Student.module.css";

const Student = ({ id, name, age, country, deleteStudent }) => {
  return (
    <div className={styles.student} key={id}>
      <div className={styles.name}>{name}</div>
      <div className={styles.age}>{age}</div>
      <div className={styles.country}>{country}</div>
      <div className={styles.action}>
        <button className={styles.deleteBtn} onClick={() => deleteStudent(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Student;
