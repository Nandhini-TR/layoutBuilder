import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <nav className="nav-bg-container">
          <h1 className="nav-heading">Layout</h1>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={onToggleShowContent}
            />
            <label htmlFor="content" className="label-content">
              content
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="leftNavbar"
              checked={showLeftNavbar}
              onChange={onToggleShowLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="label-content">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="rightNavbar"
              checked={showRightNavbar}
              onChange={onToggleShowRightNavbar}
            />
            <label htmlFor="rightNavbar" className="label-content">
              Right Navbar
            </label>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
