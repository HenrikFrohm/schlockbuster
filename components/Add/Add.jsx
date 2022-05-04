import styles from "../../styles/Add.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [genre, setGenre] = useState(null);
  const [description, setDescription] = useState(null);
  const [prices, setPrices] = useState([]);
  //  const [platform, setPlatform] = useState([]);

  // find current prices, change it's value and set prices after that
  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  //creating async function to enable file uploading, first creating const for new FormData and adding file with data.append.
  //try statement, declaring const uploadRes with Axios post request allow admin to add new resource/data to database by uploading image to cloudinary.
  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dti1uw1xe/image/upload",
        data
      );

      //declaring uploadRes prop the uploadRes data. AFter uploading image
      const { url } = uploadRes.data;
      const newProduct = {
        title,
        date,
        genre,
        description,
        prices,
        img: url,
      };

      //when new product is created using api post request, call the setClose function to close the modal
      await axios.post("http://localhost:3000/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/*using setClose prop, so when clicking button state is updated to true and modal will close */}
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Add a new Pizza</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          {/* onChange event when value of element is changed, here when a image file is picked. e.target.file[0] to choose first file, which limits the option to choose files to only 1. */}
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Date</label>
          <input
            className={styles.input}
            type="number"
            onChange={(e) => setDate(e.target.value)}
          />
          <div className={styles.item}>
            <label className={styles.label}>Genre</label>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Description</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.priceContainer}>
            {/* change price when platform is chosen with changePrice function, sending event and index number */}
            <input
              className={`${styles.input} ${styles.inputPlatform}`}
              type="number"
              placeholder="VHS"
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              className={`${styles.input} ${styles.inputPlatform}`}
              type="number"
              placeholder="DVD"
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              className={`${styles.input} ${styles.inputPlatform}`}
              type="number"
              placeholder="BLURAY"
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>
        {/* when clicking button, handleCreate function is called to create new product in database*/}
        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Add;
