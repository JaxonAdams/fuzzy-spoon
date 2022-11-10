import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='wrapper'>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
