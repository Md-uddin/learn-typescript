import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {UserContextProvider} from '../components/useContext'

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <UserContextProvider >
    <Component {...pageProps} />
    </UserContextProvider>)
}

export default MyApp
