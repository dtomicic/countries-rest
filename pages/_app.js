import styles from '../styles/globals.css'
import Layout from '../components/Layout'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(theme => !theme);
  }
  return (
    <Layout changeTheme={changeTheme} theme={theme}>
      <style jsx global>
        {`
          body{background-color: ${theme ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};}
        `}
      </style>
      <Component {...pageProps} changeTheme={changeTheme} theme={theme} className={styles.app} />
    </Layout>
  )
}

export default MyApp
