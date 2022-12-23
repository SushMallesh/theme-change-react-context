import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const darkThemeLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

const lightThemeLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
const darkThemeImageUrl =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
const lightThemeImageUrl =
  'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickThemeImage = () => {
        toggleTheme()
      }

      const navbarContainerClassName = isDarkTheme
        ? 'dark-theme-container navbar-container'
        : 'navbar-container'

      const themeLogoUrl = isDarkTheme ? darkThemeLogoUrl : lightThemeLogoUrl
      const navItemClassName = isDarkTheme
        ? 'nav-item dark-theme-nav-item'
        : 'nav-item'

      const themeImageUrl = isDarkTheme ? darkThemeImageUrl : lightThemeImageUrl
      return (
        <nav className={navbarContainerClassName}>
          <img className="website-logo" src={themeLogoUrl} alt="website logo" />
          <ul className="nav-items">
            <Link className="link-item" to="/">
              <li className={navItemClassName}>Home</li>
            </Link>
            <Link className="link-item" to="/about">
              <li className={navItemClassName}>About</li>
            </Link>
          </ul>
          <button
            testid="theme"
            onClick={onClickThemeImage}
            className="theme-button"
            type="button"
          >
            <img className="theme-image" src={themeImageUrl} alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
