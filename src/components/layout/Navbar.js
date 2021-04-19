import React, {useContext, useState} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import NasaContext from '../context/nasa/nasaContext'

const Navbar = ({icon, title}) => {

    const nasaContext = useContext(NasaContext);
    const {links} = nasaContext
    const [isActive, setisActive] = useState(false);
    return (
        <nav className="navbar is-black" role={"navigation"} aria-label="main navigation">

            <div className="navbar-brand">
                <Link to='/' className={'navbar-item'}>
                    <h1 className={'has-text-centered is-flex is-align-items-center'}><i
                        className={`fa-3x ${icon}`}/> {title} </h1>
                </Link>
                <Link  role='button' className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu"
                      aria-expanded="false" data-target="navbarNasa" onClick={() => {
                    setisActive(!isActive)
                }}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>


            <div id={'navbarNasa'} className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <Link to={'/'} className={'navbar-item'}>Home</Link>

                <div className="navbar-item has-dropdown is-hoverable">
                    <Link className="navbar-link" >
                        All API
                    </Link>
                    <div className="navbar-dropdown">
                        {links.map((link, key) =>
                            <Link to={link.link} className={'navbar-item'}
                                  key={key}>{link.text}</Link>
                        )}

                    </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                    <Link className="navbar-link">
                        More
                    </Link>
                    <div className="navbar-dropdown">
                        <Link to={'/about'} className={'navbar-item'}>About</Link>
                        <Link to={'/contact'} className={'navbar-item'}>Contact Me</Link>
                    </div>
                </div>
            </div>

            <div className={'navbar-end'}>
                <div className="navbar-item">
                    <div className="buttons is-justify-content-space-around">
                        <a href="#!" className="button is-white">
                            Support Me
                        </a>
                        <a href="https://github.com/burakcanaygun/nasaapis"
                           className={'button is-white'}><i className={'fas fa-code-branch'}/> Fork
                                                                                               me</a>
                    </div>
                </div>

            </div>
        </nav>)}





Navbar.defaultProps = {
    title: 'Nasa APIs',
    icon: 'fas fa-user-astronaut'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
