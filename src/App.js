import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Listings from './Components/Listings'
import Search from './Components/Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.theBooks();
  }

  theBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  editShelf = (book, shelf) =>  {
    BooksAPI.update(book, shelf).then(() => {
      this.theBooks();
    });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Listings books={books} oneditShelf={this.editShelf}/>
        )}/>
        <Route path="/search" render={( {history} ) => (
          <Search 
            books={books}
            oneditShelf={(book,shelf) => {
              this.editShelf(book,shelf);
             
            }}
          />
        )}/>
      </div>
    )
  }
}
export default BooksApp
