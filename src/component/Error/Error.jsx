import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const eror = useRouteError()
    return (
        <div className='text-center'>
           <h2>Opps</h2>
           <p>Not found this page</p> 
           <Link to={'/'}>home</Link>
        </div>
    );
};

export default Error;