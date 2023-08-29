import Logo from "./Logo"
import Menu from "./Menu"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Logo />
                <Menu />
            </div>
        </nav>
    )
}

export default Navbar