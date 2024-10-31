import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='text-center mt-10'>
                <Link className='mr-5' to="/">Home</Link>
                <Link className='mr-5' to="/about">About</Link>
                <Link className='mr-5' to="/contact">Contact</Link>
                <Link className='mr-5' to="/product">Product</Link>
            </nav>
        </div>
    );
};

export default Header;