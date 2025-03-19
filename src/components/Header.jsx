import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav className="flex items-center justify-between h-28 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-b-xl px-4">
            <h1 className="text-2xl font-bold text-white tracking-wider">Online Book Library</h1>
                <ul className="flex items-center justify-between">
                    <li className="p-2 text-white font-semibold text-lg hover:text-red-200"><Link to="/">Home</Link></li>
                    <li className="p-2 text-white font-semibold text-lg hover:text-red-200"><Link to="/book">Browse Books</Link></li>
                    <li className="p-2 text-white font-semibold text-lg hover:text-red-200"><Link to="/book/add">Add Book</Link></li>
                </ul>
        </nav>
    )
}

export default Header;