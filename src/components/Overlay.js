import { useContext } from 'react'
import { BooksContext } from "../context/BooksContext";

const Overlay = ({ children }) => {
    const { showing, setShowing } = useContext(BooksContext)

    const handleShow = () => {
        setShowing(!showing)
        document.body.style.overflow = showing ? 'visible' : 'hidden'
    }

    return (
        <div className={showing ? "overlay" : "overlay hidden"} onClick={handleShow}>
            {children}
        </div>
    )
}

export default Overlay