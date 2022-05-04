import styles from "../../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    //when clicking button state is updated to false
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Add New Movie
    </div>
  );
};

export default AddButton;
