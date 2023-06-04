import { useState } from 'react';
import './style.css'
import Route from '../route';

function Navbar() {

    const [component, setComponent] = useState('')
    console.log(component);
    const handleClick = (e) => {
        setComponent(e.target.innerText);

    };



    return (
        <>
            <div className='container'>
                <nav className="navbar">
                    <h2 className='sadik'>SADIK</h2>
                    <ul className="navbar-nav">
                        <li className={`nav-item `}>
                            <a
                                className="nav-link"
                                href="#"
                                onClick={handleClick}
                            >
                                Home
                            </a>
                        </li>
                        <li className={`nav-item`}>
                            <a
                                className="nav-link"
                                href="#"
                                onClick={handleClick}
                            >
                                About
                            </a>
                        </li>
                        <li className={`nav-item`}>
                            <a
                                className="nav-link"
                                href="#"
                                onClick={handleClick}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
            <Route component={component} />

            <header>
                <h1>Shibly Sadik</h1>
                <p>Front-end Developer</p>
            </header>
        </>
    )


}

export default Navbar;
