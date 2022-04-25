import Layout from "../components/Layout";
import store from "../redux/store";
import { Provider } from "react-redux";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    //wrapping application with redux provider component to make the store available for all child components
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
