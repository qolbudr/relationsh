import '../styles/globals.css'
import { AuthProvider, AuthState } from '../utils/context'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AuthState>
        <Component {...pageProps} />
      </AuthState>
    </AuthProvider>
  )
}

export default MyApp
