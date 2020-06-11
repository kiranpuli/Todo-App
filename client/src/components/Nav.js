import React from 'react'
import { NavLink,Link } from 'react-router-dom'


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" to="/"><h1 className="text-primary">Todo App</h1></Link>
                <ul className="nav navbar-nav navbar-right ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link btn btn-sm btn-outline-primary" to="/new">Add Todo</NavLink>
                </li>
                <li className="nav-item ml-5">
                    <a className="nav-link text-info" href="https://github.com/kiranpuli/Todo-App" target="_blank">Github Repo</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
