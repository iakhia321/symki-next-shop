import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import 'smoothscroll-polyfill';
import './global.css'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  ) 
}