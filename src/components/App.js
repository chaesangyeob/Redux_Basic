// import React, { Component } from 'react';
// import BookList from '../containers/BookList';


// class app extends Component {
//     render() {
//         return (
//             <div>
//                 <BookList />
//             </div>
//         );
//     }
// }

// export default app;

// import React, { Component } from 'react';
// import BookList from '../containers/BookList';
// import SelectedBook from '../containers/SelectedBook';


// export default class App extends Component {
//   render() {
//     return (
//       <div>
//           <BookList />
//           <SelectedBook />
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import BookList from '../containers/BookList';
import SelectedBook from '../containers/SelectedBook';


class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <SelectedBook />
      </div>
    );
  }
}

export default App;