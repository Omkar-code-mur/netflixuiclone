import React from 'react'
import {Link} from "react-router-dom"
import {ImSearch} from "react-icons/im"

const Header = () => {
  return (
    <nav className="header">
        <img src="./logo.png" alt="Netflix logo" />
        
        <div>
            <Link to="/">Home</Link>
            <Link to="/tvShows">Tv Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recentlyAdded">Recently added</Link>
            {/* <Link to="/My_List">My List</Link>   */}
        </div>
        <ImSearch/>
    </nav>
  )
}

export default Header
