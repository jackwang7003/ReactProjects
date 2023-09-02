import React from 'react';
import {useEffect, useState} from 'react';
import './Posts.css';



export default function Posts() {
    const COHORT_NAME = '2303-acc-ct-web-pt-b';
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`; 
    const [posts, setPosts] = useState([]);

    useEffect(() => { async function getPosts() {

        fetch(`${BASE_URL}/posts`)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setPosts(result.data.posts);
        })
        .catch(console.error);
    }
    getPosts();
    }, []);
 
    return (

        <div>
            <h1>Posts</h1>
            <div className='posts'>
                {posts.map((post) => {
                    return (
                        <div key={post._id} className='post'>
                            <h2>{post.title}</h2>
                            <p>{post.author.username}</p>
                            <p>{post.description}</p>
                            <p>{post.price}</p>
                            <p>{post.location}</p>
                            <p>{post.willDeliver}</p>
                        </div>
                    )
                })};

        </div>
        </div>
    );

}


