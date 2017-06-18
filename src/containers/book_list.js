import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedBook } from './../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{


    renderList(){
      return (
        this.props.books.map( (book)=>
          <li
          onClick={ ()=>this.props.selectedBook(book)}
          key={book.title}
          className='list-group-item'>{ book.title }
          </li>
        )
      )
    }
    render(){
    return (
      <ul className='list-group col-sm-4'>
      {this.renderList()}

      </ul>
    )
  }
}
//the state inside mapstatetoprops is from the combineReducers which is acting
//like the store 
function mapStateToProps(state){
    //whatever is returned will show up as props inside
    // of BookList
  return {
    books: state.books
  }
}
//anything returned from this function will end up
 // as props in our BookList container
function mapDispatchToProps(dispatch){
  //whenever selectedBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectedBook: selectedBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
