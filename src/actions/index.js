export function selectedBook(book){
  //selectedBook is an action creator: it needs to return an action:
  //(an object with a type property)
  return {
    type: 'SELECTED_BOOK',
    payload: book
  }
}
