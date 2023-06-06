import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import {AiOutlineSearch, AiFillCloseCircle} from 'react-icons/ai'
import {MdMenuOpen} from 'react-icons/md'

class Header extends Component {
  state = {showMenu: false}

  onClickMenuIcon = () => {
    this.setState({showMenu: true})
  }

  onClickCloseIcon = () => {
    this.setState({showMenu: false})
  }

  render() {
    const {showMenu} = this.state

    return (
      <nav className="navbar">
        <div>
          <div className="website-logo-container">
            <img
              src="https://res.cloudinary.com/dpnwub4a7/image/upload/v1685708402/Group_7399_e15e6r.png"
              alt="website logo"
              className="website-logo"
            />
            <Link to="/" className="home-navigation">
              <p>Home</p>
            </Link>
            <Link to="/popular" className="popular-navigation">
              <p>Popular</p>
            </Link>
          </div>
          <div className="profile-container">
            <button
              data-testid="searchButton"
              className="search-icon-button"
              type="button"
            >
              <AiOutlineSearch className="search-icon" size={25} />
            </button>

            <img
              src="https://res.cloudinary.com/dpnwub4a7/image/upload/v1685776617/Avatar_ujpdgq.png"
              alt="profile"
              className="profile"
            />
            <MdMenuOpen
              size={25}
              className="menu-icon"
              onClick={this.onClickMenuIcon}
            />
          </div>
        </div>
        {showMenu && (
          <ul className="menu-list-container">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/popular">
              <li>Popular</li>
            </Link>
            <Link to="/account">
              <li>Account</li>
            </Link>
            <li>
              <AiFillCloseCircle onClick={this.onClickCloseIcon} />
            </li>
          </ul>
        )}
      </nav>
    )
  }
}
export default Header
