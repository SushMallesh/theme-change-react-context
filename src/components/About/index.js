import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const darkThemeAboutImageUrl =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
const lightThemeAboutImageUrl =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

const About = () => (
  <>
    <Navbar />

    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const aboutImageUrl = isDarkTheme
          ? darkThemeAboutImageUrl
          : lightThemeAboutImageUrl
        const aboutContainerClassName = isDarkTheme
          ? 'about-container dark-theme-about-container'
          : 'about-container'

        const aboutHeadingClassName = isDarkTheme
          ? 'dark-theme-about-heading about-heading'
          : 'about-heading'

        return (
          <div className={aboutContainerClassName}>
            <img className="about-image" src={aboutImageUrl} alt="about" />
            <h1 className={aboutHeadingClassName}>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default About
