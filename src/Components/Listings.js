import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

export default class Listings extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    oneditShelf: PropTypes.func.isRequired
  }

  render() {
    const shelves = {
      currentlyReading: ['Currently Reading', 'currentlyReading'],
      wantToRead: ['Want to Read', 'wantToRead'],
      read: ['Read', 'read'],
    }
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {Object.keys(shelves).map((shelf) => 
            <BookShelf 
              key={shelf}
              books={this.props.books} 
              oneditShelf={this.props.oneditShelf} 
              title={shelves[shelf][0]} 
              shelf={shelves[shelf][1]}
            />
          )}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

 