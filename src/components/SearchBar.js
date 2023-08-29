import { BooksContext } from "../context/BooksContext";
import { useContext } from 'react'

const SearchBar = () => {

    const { books, handleSearch } = useContext(BooksContext)
    const filteredGenres = [...new Set(books.map(({ book }) => book.genre))]
    const filteredAuthors = [...new Set(books.map(({ book }) => book.author.name))]

    const handleChange = (e) => {
        const data = e.target.form.elements
        const { genres, authors, name } = data
        handleSearch(genres.value, authors.value, name.value)
    }

    return (
        <div className="search-bar">
            <h3>Explore books</h3>
                <form
                    onChange={handleChange}
                >
                    <select 
                        className="genres" 
                        name="genres" 
                    >
                        <option value="">Genre</option>
                        {
                            filteredGenres.map((genre) => (
                                <option key={genre} value={genre}>{genre}</option>
                            ))
                        }
                    </select>
                    <select
                        className="authors" 
                        name="authors" 
                    >
                        <option value="">Authors</option>
                        {
                            filteredAuthors.map((author) => (
                                <option key={author} value={author}>{author}</option>
                            ))
                        }
                    </select>
                    <input
                        className="search-input" 
                        name="name" 
                        type="text" 
                        placeholder="Search"
                        autoComplete="off"
                    />
                </form>
        </div>
    );
}

export default SearchBar