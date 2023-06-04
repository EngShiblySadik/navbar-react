import React from 'react';
import './style.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: 'home'
        };
    }

    handleClick(link) {
        this.setState({ activeLink: link });
    }

    render() {
        const { activeLink } = this.state;

        return (
            <div className='container'>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}>
                        <a
                            className="nav-link"
                            href="../home/index.jsx"
                            onClick={() => this.handleClick('home')}
                        >
                            Home
                        </a>
                    </li>
                    <li className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}>
                        <a
                            className="nav-link"
                            href="../about/index.jsx"
                            onClick={() => this.handleClick('about')}
                        >
                            About
                        </a>
                    </li>
                    <li className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}>
                        <a
                            className="nav-link"
                            href="../contact/index.jsx"
                            onClick={() => this.handleClick('contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
        );
    }
}

export default Navbar;
