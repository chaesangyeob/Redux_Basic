// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { selectBook } from '../actions';
// import { bindActionCreators } from 'redux';


// class BookList extends Component {
     

    
//     render() {
   
//         const {books} = this.props;
//         const renderList = books.map((book) => {
//             return (
                
//                 <li
//                  className='list-group-item' 
//                 //  onClick={this.handleClick}
//                 onClick={()=>this.props.selectBook(book)}
//                  key={book.title}>
//                  {book.title}
//                  </li>
//             )
//         })

//         return (
//             <div>
//                 <ul className='list-group col-sm-6'>
//                     
//                     {renderList}
//                 </ul>
//             </div>
//         );
//     }
// }

// function mapStateToProps (state) {
    

//     //state contain Array of book and active book
//     return {
//         books: state.books
//     };
// }

// function mapDispatchToProps (dispatch) {
   
//     return bindActionCreators({
//         selectBook:selectBook
//     },dispatch)
// }

// export default connect(mapStateToProps,mapDispatchToProps)(BookList)

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { selectBook } from '../actions';
// import { bindActionCreators } from 'redux';
// import BookListDetail from './BookListDetail';



// class BookList extends Component {
//     render() {
//         const {books} = this.props;
//         const {selectBook} = this.props;
//         const renderList = books.map((book) => {
//             return (
//                 <BookListDetail 
//                     key={book.title}
//                     data={book}
//                     selectBook={selectBook}
//                 />
//             )
//         })

//         return (
//             <div>
//                 <ul className='list-group col-sm-6'>
//                     {renderList}
//                 </ul>
//             </div>
//         );
//     }
// }

// function mapStateToProps (state) {
    

//     //state contain Array of book and active book
//     return {
//         books: state.books
//     };
// }

// function mapDispatchToProps (dispatch) {
   
//     return bindActionCreators({
//         selectBook:selectBook
//     },dispatch)
// }

// export default connect(mapStateToProps,mapDispatchToProps)(BookList)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import BookListDetail from './BookListDetail';
import selectBook from '../actions';



class BookList extends Component {
    
    render() {
        const {books} = this.props;
        const {selectBook} = this.props;
        const render = books.map(book => {
            return <BookListDetail 
                bookList={book} 
                key = {book.title}
                selectBook = {selectBook}
                />
        })
        return (
            <div>
                <ul className='list-group'>
                    {render}
                </ul>

            </div>
        );
    }
}

function mapStateToProps(state) {
  
    return {
        books:state.books
    }
}

function mapDispatchToProps(dispatch) {
   
    return bindActionCreators({
        selectBook:selectBook
    },dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(BookList)

