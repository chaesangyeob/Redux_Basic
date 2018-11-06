// import { combineReducers } from 'redux';
// import PostReducer from './reducer_posts'
// import { reducer as formReducer } from 'redux-form'

// const rootReducer = combineReducers({
//   posts:PostReducer,
//   form: formReducer
// });

// export default rootReducer;d


// import {combineReducers} from 'redux';
// import BookReducer from './Reducer_book';
// import ActiveBook from './ActiveBook';


// const rootReducer = combineReducers({
//   books:BookReducer,
//   activeBook:ActiveBook
// });

// export default rootReducer;

import { combineReducers } from 'redux';
import BookReducer from './Reducer_book';
import ActiveBook from './ActiveBook';


const rootReducer = combineReducers({
  books: BookReducer,
  activeBook:ActiveBook
})

export default rootReducer;
