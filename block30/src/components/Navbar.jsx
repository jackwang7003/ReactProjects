import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <label className='logo'>Stranger's Things</label>
            <ul>
                <li><Link className={"link-styles"} to ='/'>Home</Link></li>
                <li><Link className={"link-styles"} to='/posts'>Posts</Link></li>
                <li><Link className={"link-styles"} to='/login' href='Navbar.css'>Login</Link></li>
                

            </ul>
        
        </nav>
    )
    }

    export default Navbar