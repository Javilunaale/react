import React from 'react'
import Cartwidget from './Cartwidget'

const NavBar = () => {
    return (
     
        <nav className="navbar bg-body-tertiary">
            <form className="container-fluid justify-content-start">
            <img src="https://rediredi.com/wp-content/uploads/elementor/thumbs/logo_pet-qoub2ynqqhmn6xvicicm9ybwz0khlgpghspjqcvlz4.webp" alt="logo" />
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