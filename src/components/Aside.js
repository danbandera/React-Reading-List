import { useContext, useState } from "react"
import { BooksContext } from "../context/BooksContext"

const Aside = () => {
    const { books, handleSearch } = useContext(BooksContext)
    const [range, setRange] = useState(0)

    const filteredGenres = [...new Set(books.map(({ book }) => book.genre))]
    const filteredAuthors = [...new Set(books.map(({ book }) => book.author.name))]
    // const filteredYears = [...new Set(books.map(({ book }) => book.year))]
    const filteredPages = [...new Set(books.map(({ book }) => book.pages))]
    const maxPages = Math.max(...filteredPages)
    let percentage = Number((range * 100) / maxPages)

    const rangeChange = (e) => {
        setRange(e.target.value)
    }

    const style = {
        bubble: {
            left: `calc(${percentage}% + (${8 - percentage * 0.20}px))`
        }
    }

    const handleChange = (e) => {
        // const data = e.target.form.elements
        // const { pageRange, genre, author, year } = data
        // const genresChecked = [...genre].filter(genre => genre.checked).map(genre => genre.value)
        // const authorsChecked = [...author].filter(author => author.checked).map(author => author.value)
        // const yearsChecked = [...year].filter(year => year.checked).map(year => year.value)
        // // console.log('data', pageRange.value, genresChecked, authorsChecked, yearsChecked);
        const data = e.target.form.elements
        const { genres, authors, pageRange } = data
        handleSearch(genres.value, authors.value, '', pageRange.value)
        // handleSearchAside(pageRange.value, genresChecked, authorsChecked, yearsChecked)
    }


    return (
        <aside className="filters">
            <form onChange={handleChange}>
                <h1>Browse</h1>
                {/* <input
                    className="search-aside" 
                    name="name"
                    type="text"
                    placeholder="Search"
                    autoComplete="off"
                /> */}
                <div className="containerPageNumber">
                    <label htmlFor="pagesRange">Page number</label>
                    <div className="range-wrap">
                        <input className="pageRange" name="pageRange" type="range" min={0} max={maxPages} onChange={rangeChange} />
                        <span htmlFor="pagesRange" className="bubble" style={style.bubble}>{range}</span>
                    </div>
                </div>
                <div className="containerGenres">
                    <p>Genre</p>
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
                </div>
                {/* <ul>
                    {
                        filteredGenres.map(genre => (
                            <li key={genre}><input type="checkbox" name="genre" id={genre} value={genre} /><label htmlFor={genre}>{genre}</label></li>
                        ))
                    }
                </ul> */}
                <div className="containerAuthors">
                    <p>Author</p>
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
                </div>
                {/* <ul>
                    {
                        filteredAuthors.map(author => (
                            <li key={author}><input type="checkbox" name="author" id={author} value={author} /><label htmlFor={author}>{author}</label></li>
                        ))
                    }
                </ul> */}
                {/* <p>Year</p>
                <select
                    className="years"
                    name="years"
                >
                    <option value="">Year</option>
                    {
                        filteredYears.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))
                    }
                </select> */}
                {/* <ul>
                    {
                        filteredYears.map(year => (
                            <li key={year}><input type="checkbox" name="year" id={year} value={year} /><label htmlFor={year}>{year}</label></li>
                        ))
                    }
                </ul> */}
            </form>

        </aside>
    )
}

export default Aside