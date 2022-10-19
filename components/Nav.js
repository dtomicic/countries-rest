import navStyles from '../styles/Nav.module.css'
import { BsMoon, BsMoonFill } from 'react-icons/bs'
const Nav = ({changeTheme, theme}) => {
  return (
    <nav className={`${navStyles["navigation"]} ${theme ? navStyles["navDark"] : navStyles["navLight"]}`}>
        <h3 className={navStyles.navigationHeader}>Where in the world?</h3>
        <div className={navStyles.navigationTheme} onClick={changeTheme}>
            {theme ? <BsMoonFill className={navStyles.navigationThemeIconDark}/> : <BsMoon className={navStyles.navigationThemeIconLight} />}
            <h3 className={navStyles.navigationThemeText}>Dark Mode</h3>
        </div>
    </nav>
  )
}
export default Nav