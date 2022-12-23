import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const notFoundContainerClassName = isDarkTheme
          ? 'not-found-container dark-theme-not-found-container'
          : 'not-found-container'

        const notFoundHeadingClassName = isDarkTheme
          ? 'not-found-heading dark-theme-not-found-heading'
          : 'not-found-heading'

        const notFoundContentClassName = isDarkTheme
          ? 'dark-theme-not-found-content not-found-content'
          : 'not-found-content'

        return (
          <div className={notFoundContainerClassName}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-image"
              alt="not found"
            />
            <h1 className={notFoundHeadingClassName}>Lost Your Way?</h1>
            <p className={notFoundContentClassName}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default NotFound
