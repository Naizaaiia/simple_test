import '../styles/globals.css'
import { Provider } from "react-redux";
import Layout from '../components/Layout'
import configureStore from '../redux/store';
const store = configureStore()

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider >
  )

}

export default MyApp
