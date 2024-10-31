import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const product = useLoaderData();
 
const {name,email,body,postId,id} = product[0]

    return (
<div>
    { 
        <div className='text-center border border-green-400 space-y-3 rounded-2xl m-6 p-5 w-10/12 mx-auto'>
        <div className='text-2xl flex justify-center gap-3'>
        <h3>Productid: {postId}</h3>
        <h2>Id: {id}</h2>
        </div>
        <p>Name : {name}</p>
        <p>Email: {email}</p>
        <p>body: {body}</p>
        </div>
    }
</div>
    );
};

export default Details;