// import React, { Component } from 'react';

// class BookListDetail extends Component {
//     handleClick = () => {
//         const {data} = this.props;
//         const {selectBook} = this.props;
//         selectBook(data)
        
//     }
    
//     render() {
//         const {data} = this.props;
       
//         return (
//             <div>
//                 <li className='list-group-item' onClick={this.handleClick}>
//                     <div>{data.title}</div>
//                 </li>
//             </div>
//         );
//     }
// }

// export default BookListDetail;

import React, { Component } from 'react';

class BookListDetail extends Component {
    handleClick = () => {
        const {selectBook} = this.props;
        const {bookList} = this.props;
        console.log(bookList,'bookList임당')
        selectBook(bookList)
 
    }

    render() {
        const {bookList} = this.props;
        

        return (
            <div>
                <li className='list-group-item' onClick={this.handleClick}>
                   {bookList.title}
                </li>
              
            </div>
        );
    }
}


export default BookListDetail;      