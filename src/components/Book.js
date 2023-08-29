import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'


const Book = ({ book }) => {
    const { readingList, setReadingList } = useContext(BooksContext)

    const handleClick = (event) => {
        console.log(readingList)
        const bookId = event.target.closest('article').getAttribute('data-id')
        if (!readingList.includes(bookId) && bookId !== null) {
            setReadingList(arr => [...arr, bookId])
        }
    }

    const handleRemove = (event) => {
        const bookId = event.target.closest('article').getAttribute('data-id')
        setReadingList(readingList.filter((id => id !== bookId)))
    }

    return (
        <article className="book" onClick={handleClick} data-id={book.ISBN}>
            <img src={book.cover} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.synopsis}</p>
            <span className='close' onClick={handleRemove}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg></span>
        </article>
    )
}

export default Book