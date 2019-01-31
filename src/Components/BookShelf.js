import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

export default class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    oneditShelf: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter(book => book.shelf === this.props.shelf).map((book, index) => (<Book book={book} key={index} oneditShelf={this.props.oneditShelf}/>))}
          </ol>
        </div>
      </div>
    )
  }
}

 