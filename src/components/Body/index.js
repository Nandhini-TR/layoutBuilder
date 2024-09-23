import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-container">
              <h1 className="body-heading">Left Navbar Menu</h1>
              <ul className="ul-list">
                <li className="li-item">Item 1</li>
                <li className="li-item">Item 2</li>
                <li className="li-item">Item 3</li>
                <li className="li-item">Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="content-container">
              <h1 className="body-heading">Content</h1>
              <p>
                Lorem ipsum dolor sit amet, conectetur adipiscing, sed to
                elusmod tempor oikjvn kldvhlvh lhvjfdvb
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right-navbar-container">
              <h1 className="body-heading">Right Navbar</h1>
              <div>
                <p className="right-li-item">Ad 1</p>
                <p className="right-li-item">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
