import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Login.module.css";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  // after login
  const router = useRouter();

  //post request, if username and password is correct, admin is forwarded to dashboard page with router push. Wrong credentials gives error.
  //will be called when pressing button
  /*  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  }; */
  const handleClick = async () => {
    try {
      await axios.post("https://schlockbuster.vercel.app/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin dashboard</h1>
        <input
          className={styles.input}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={handleClick}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
