import navStyles from '../styles/Nav.module.css'
import { BsMoon, BsMoonFill } from 'react-icons/bs'
import Link from 'next/link'
const Nav = ({changeTheme, theme}) => {
  return (
    <nav className={`${navStyles["navigation"]} ${theme ? navStyles["navDark"] : navStyles["navLight"]}`}>
        <Link href='/'>
          <a>
            <h3 className={navStyles.navigationHeader}>Where in the world?</h3>
          </a>
        </Link>
        <div className={navStyles.navigationTheme} onClick={changeTheme}>
            {theme ? <BsMoonFill className={navStyles.navigationThemeIconDark}/> : <BsMoon className={navStyles.navigationThemeIconLight} />}
            <h3 className={navStyles.navigationThemeText}>Dark Mode</h3>
        </div>
    </nav>
  )
}
export default Nav