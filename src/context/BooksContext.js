import { createContext, useState, useEffect } from 'react'

export const BooksContext = createContext()

export const BooksContextProvider = ({ children }) => {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState([])
    const [showing, setShowing] = useState(false)
    const [readingList, setReadingList] = useState([])

    useEffect(() => {
        const getBooks = () => {
            fetch('../../books.json')
                .then(response => response.json())
                .then(data => setBooks(data.library))
        }
        getBooks()
    }, []);

    const handleSearch = (genre, author, name, pageRange) => {
        const filteredBooks = books.filter(({book}) => {
            console.log(book);
            if (genre && author && pageRange && name) {
                return (
                    book.genre === genre &&
                    book.author.name === author &&
                    book.pages <= pageRange &&
                    book.title.toLowerCase().includes(name.toLowerCase())
                )
            } else if (genre && author && name) {
                return (
                    book.genre === genre &&
                    book.author.name === author &&
                    book.title.toLowerCase().includes(name.toLowerCase())
                )
            } else if (genre && author && pageRange) {
                return (
                    book.genre === genre &&
                    book.author.name === author &&
                    book.pages <= pageRange
                )
            } else if (genre && name && pageRange) {
                return (
                    book.genre === genre &&
                    book.title.toLowerCase().includes(name.toLowerCase()) &&
                    book.pages <= pageRange
                )
            } else if (author && name && pageRange) {
                return (
                    book.author.name === author &&
                    book.title.toLowerCase().includes(name.toLowerCase()) &&
                    book.pages <= pageRange
                )
            } else if (genre && author) {
                return (
                    book.genre === genre &&
                    book.author.name === author
                )
            } else if (genre && name) {
                return (
                    book.genre === genre &&
                    book.title.toLowerCase().includes(name.toLowerCase())
                )
            } else if (genre && pageRange) {
                return (
                    book.genre === genre &&
                    book.pages <= pageRange
                )
            } else if (author && name) {
                return (
                    book.author.name === author &&
                    book.title.toLowerCase().includes(name.toLowerCase())
                )
            } else if (author && pageRange) {
                return (
                    book.author.name === author &&
                    book.pages <= pageRange
                )
            } else if (name && pageRange) {
                return (
                    book.title.toLowerCase().includes(name.toLowerCase()) &&
                    book.pages <= pageRange
                )
            } else if (genre) {
                return (
                    book.genre === genre
                )
            } else if (author) {
                return (
                    book.author.name === author
                )
            } else if (name) {
                return (
                    book.title.toLowerCase().includes(name.toLowerCase())
                )
            } else if (pageRange) {
                return (
                    book.pages <= pageRange
                )
            } else {
                return book
            }

        })
        setSearch(filteredBooks)
    }
    
    return (
        <BooksContext.Provider value={{ books, search, handleSearch, showing, setShowing, readingList, setReadingList }}>
            {children}
        </BooksContext.Provider>
    )
}