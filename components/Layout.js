import Nav from './Nav'

const Layout = ({children, changeTheme, theme}) => {

  return (
    <>
    <Nav changeTheme={changeTheme} theme={theme} />
    {children}
    </>
  )
}
export default Layout