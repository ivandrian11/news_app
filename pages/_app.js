import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../states";
import Loading from "../components/Loading";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Loading />
      <Component {...pageProps} />
    </Provider>
  );
}
