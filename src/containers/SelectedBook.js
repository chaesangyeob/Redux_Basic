// import React, { Component } from 'react';
// import { connect } from 'react-redux'

// class SelectedBook extends Component {
//     render() {
//         const {book} = this.props;
//         if(!book) {
//             return <div><h2>click the book list</h2></div>
//         }
//         return (
//             <div>
//                 <h3>Selected Book</h3>
//                 {book.title}
//             </div>
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//         //여기 activeBook은 reduer의 인덱스인  아래 코드에서 key값이다. combine으로 묵였으니
//         //books와 acitiveBook은 글로벌 state가 되었다. 여기서 인자로 받은 state가 바로 combineReducer
//         //의 인자인 객체의 값이다.
//         // const rootReducer = combineReducers({
//         //     books:BookReducer,
//         //     activeBook:ActiveBook
//         //   });
//         book:state.activeBook
//     };
// }

// export default connect(mapStateToProps)(SelectedBook);

import React, { Component } from 'react';
import {connect} from 'react-redux'

class SelectedBook extends Component {
    render() {
        const {book} = this.props;
        console.log(book,'sss')
        if(book ==null) {
            return `click To Detail`
        }
        
        return (
            <div>
                <h2>Detail for :</h2>
                <p>{book.title}</p>        
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
         book:state.activeBook
    }
}

export default connect(mapStateToProps)(SelectedBook);