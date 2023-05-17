import React from 'react';
import classes from './Topbar.module.css'

const Topbar = () => {
    return (
        <header>
            <nav className={classes.Topbar}>
                <img src="https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png" alt="Amazon Logo"/>
            </nav>
        </header>
    )
}

export default Topbar;