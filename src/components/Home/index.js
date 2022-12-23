import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const darkThemeHomeImageUrl =
  'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
const lightThemeHomeImageUrl =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

const Home = () => (
  <>
    <Navbar />

    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const homeImageUrl = isDarkTheme
          ? darkThemeHomeImageUrl
          : lightThemeHomeImageUrl
        const homeContainerClassName = isDarkTheme
          ? 'home-container dark-theme-home-container'
          : 'home-container'

        const homeHeadingClassName = isDarkTheme
          ? 'dark-theme-home-heading home-heading'
          : 'home-heading'

        return (
          <div className={homeContainerClassName}>
            <img className="home-image" src={homeImageUrl} alt="home" />
            <h1 className={homeHeadingClassName}>Home</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default Home
