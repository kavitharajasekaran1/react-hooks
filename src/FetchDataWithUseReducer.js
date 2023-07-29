import React, {useEffect, useReducer} from 'react';
import axios from 'axios'


const initialState = {
    loading: true,
    error: '',
    posts : {}
}
const reducer = (state, action) =>{
    switch(action.type) {
            case 'FETCH_SUCCESS' :
                return {
                    loading: false,
                    error: '',
                    posts:action.payload
                }
            case 'FETCH_FAILURE' : 
                return {
                    loading: false,
                    error:'Something Went Wrong!',
                    posts : {}
            
        }
            default:
                return state;
               
    }
    
}

function FetchDataWithUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)

    
    useEffect (()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=> {
            // console.log(res.data)
            // setLoading(false)
            // setPosts(res.data)
            // setError('')
            dispatch ({
                type: 'FETCH_SUCCESS',
                payload: res.data,
            })
        })
        .catch(error=> {
            console.log(error)
            // setLoading(false)
            // setPosts({})
            // setError('Somthing went wrong')
            dispatch ({
                type: 'FETCH_FAILURE',
            })
        })

    },[])
  return (
    <div>
        {state.loading ? 'Loading' : state.posts.title}
        {state.error ? state.error : null}      
    </div>
  );
}

export default FetchDataWithUseReducer;
