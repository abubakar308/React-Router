import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Post = () => {
    const post = useLoaderData();
   
    return (
        <div className='grid grid-cols-3 gap-3'>
            { 
post.map(p=>
    <div className='text-center border border-green-400 space-y-3 rounded-2xl m-6 p-5 w-10/12 mx-auto'>
    <p>Name : {p.name}</p>
    <p>Email: {p.email}</p>
    <p>body: {p.body}</p>
    
    </div>
)
    }
        </div>
    );
};

export default Post;