import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Product = () => {
    const products =  useLoaderData();
    
    return (
       <div>
        <h2 className='text-center text-2xl py-4'>Total Category: {products.length}</h2>
         <div className='grid grid-cols-3 gap-3 w-11/12 mx-auto'>
         {
            products.map(p=>
            <div className='border flex flex-col border-green-300 p-4 space-y-3 rounded-2xl text_center'>
               <h3 className='text-center text-2xl'>Id: {p.id}</h3>
            <p className='text-center text-2xl'>Title : {p.title}</p>
            <p className='flex-grow'>Body: {p.body}</p>
           <div className='flex justify-between'>
           <Link to={`/product/${p.id}`}><button className='bg-orange-400 rounded-2xl p-2'>Details</button></Link>
           <Link className='p-2 rounded-2xl bg-green-400' to={`/post/${p.userId}`}>Posts</Link>
           </div>
            </div>)
         }
        </div>
       </div>
    );
};

export default Product;