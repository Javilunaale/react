import React from 'react'
import Cartwidget from './Cartwidget'

const NavBar = () => {
    return (
        /*<nav className="">
            <button type="button" className="btn btn-outline-primary">Pet Shop "LOLI Y PANCHA"</button>
            <button type="button" className="btn btn-outline-primary">Perros</button>
            <button type="button" className="btn btn-outline-primary">Gatos</button>
            <button type="button" className="btn btn-outline-primary">Accesorios</button>
            <button type="button" className="btn btn-outline-primary">Salud</button>
            </nav>*/
        <nav className="navbar bg-body-tertiary">
            <form className="container-fluid justify-content-start">
                <button className="btn btn-outline-success me-2" type="button">Pet Shop "LOLI Y PANCHA"</button>
                <button className="btn btn-sm btn-outline-secondary" type="button">Perros</button>
                <button className="btn btn-sm btn-outline-secondary" type="button">Gatos</button>
                <button className="btn btn-sm btn-outline-secondary" type="button">Accesorios</button>
                <button className="btn btn-sm btn-outline-secondary" type="button">Salud</button>
                <Cartwidget />
            </form>
        </nav>

    )

}

export default NavBar