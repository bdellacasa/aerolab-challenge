import { Provider } from 'react-redux';
import { useStore } from '../redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout/Layout';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}