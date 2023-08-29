import Book from './Book'
import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'

const Books = () => {
    const { books, search, readingList } = useContext(BooksContext)

    const filteredBooks = search.length > 0 ? search : books

    return (
        <main className="books">
            {filteredBooks.map((book) => (
                readingList.includes(book.book.ISBN) ? null : <Book key={book.book.ISBN} {...book} />
            ))}
        </main>
    )
}

export default Books