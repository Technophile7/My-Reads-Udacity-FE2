import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    oneditShelf: PropTypes.func.isRequired
   // author: PropTypes.array,
   // shelf: PropTypes.string.isRequired,
   // onShelfChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <li>
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 130, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
          <select 
            onChange={(e) => {
              this.props.oneditShelf(this.props.book, e.target.value) 
            }}
            value={this.props.book.shelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors && this.props.book.authors.map(author => author).filter(authors => authors.length > 1)}</div>
        </div>
      </li>
    )
  }
}

