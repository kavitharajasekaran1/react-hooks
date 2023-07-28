import React, {useState, useEffect} from 'react';
import axios from 'axios'

function HooksGetFetch() {
    const [posts, setPosts] = useState([]);
    useEffect (()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=> {
            console.log(res.data)
            setPosts(res.data)})
        .catch(error=> {
            console.log(error)
        })
    },[])
  return (
    <div>
        <ul>
            {posts &&  ( 
            posts.map(post => <li key={post.id}>{post.title}</li>))}
        </ul>
      
    </div>
  );
}

export default HooksGetFetch;
