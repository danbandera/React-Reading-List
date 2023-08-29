import './App.css'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import SearchBar from './components/SearchBar'
import Aside from './components/Aside'
import Books from './components/Books'
import ReadingList from './components/ReadingList'
import Overlay from './components/Overlay'
import { BooksContextProvider } from './context/BooksContext'

function App() {

  return (
    <div className='mainContainer'>
      <BooksContextProvider>
        <Overlay />
        <Navbar />
        <SearchBar/>
        <Layout >
          <Aside />
          <Books />
        </Layout>
        <ReadingList />
      </BooksContextProvider>
    </div>
  )
}

export default App;
