// import axios from "axios";

// const ROOT_URL ='http://reduxblog.herokuapp.com/api'
// const API_KEY = '?key=PAPERCLIP1234';

// export const FETCH_POSTS =  'fetch_posts'
// export const FETCH_POST = 'fetch_post'
// export const CREATE_POST ='create_post'
// export const DELETE_POST ='delete_post'

// export function fetchPosts() {
//     const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
//     return {
//         type:FETCH_POSTS,
//         payload: request
//     };
// }
// //action 폴더 안에 action creator
// export function createPost (values, callback) {
//     const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
//     .then(()=>callback());

//     return {
//         type:CREATE_POST,
//         payload:request
//     };

// }

// //PostShow component에서 사용할 action creator임
// export function fetchPost(id) {
//     const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    
//     return {
//         type: FETCH_POST,
//         payload: request
//     }
// }

// export function deletePost(id, callback) {
//     const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
//         .then(() => callback())

//     return {
//         type: DELETE_POST,
//         payload: id
//     }
// }

// export function selectBook(data) {
//     console.log(data)
//     return {
//         type:'BOOK_SELECTED',
//         payload:data
//     }
// }

export default function selectBook(data) {
    
    const BOOK_SELECTED = 'BOOK_SELECTED'
    return {
        type:BOOK_SELECTED,
        payload:data
    }
}