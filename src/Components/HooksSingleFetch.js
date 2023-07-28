import React, {useState, useEffect} from 'react';
import axios from 'axios'

function HooksSingleFetch() {
    const [posts, setPosts] = useState({});
    const [id, SetId] = useState(1);
    const [buttonFetch, setButtonFetch] = useState(1)
    useEffect (()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=> {
            console.log(res.data)
            setPosts(res.data)})
        .catch(error=> {
            console.log(error)
        })
    },[buttonFetch])

    const handleChange =() =>{
        setButtonFetch(id)
    }
  return (
    <div>
      <input type="text" value={id} onChange={(e)=>{SetId(e.target.value)}}/>
      <button onClick={handleChange}>Fetch Data</button>
      {/* <ul>
        {
            posts.map(post => <li key={post.id}> {post.title}</li>)
        }
      </ul> */}
      <ul>
        <li key={posts.id}>{posts.title}</li>
      </ul>
    </div>
  );
}

export default HooksSingleFetch;
