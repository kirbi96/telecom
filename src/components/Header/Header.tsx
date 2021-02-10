import {NavLink} from "react-router-dom";
import React from "react";
import "./Header.css"

const Header = () =>{
    return(
        <header>
            <nav className="d-flex justify-content-center">
                <NavLink className="nav_link" exact to="/" activeClassName="nav_link-active">Главная</NavLink>
                <NavLink className="nav_link" exact to="/users" activeClassName="nav_link-active">Пользователи</NavLink>
                <NavLink className="nav_link" exact to="/posts" activeClassName="nav_link-active">Посты</NavLink>
                <NavLink className="nav_link" exact to="/albums" activeClassName="nav_link-active">Альбомы</NavLink>
            </nav>
        </header>
    )
}

export default Header
