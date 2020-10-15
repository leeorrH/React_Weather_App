import React from 'react';
import classes from './Header.module.scss';

export const Header = () => {
    return (
        <div className={classes.NavBar}>
            <div className={classes.NavBarContent}>
                <div>
                    Hello Weather Task
                </div>
                <div>
                    <ul>
                        <li>
                            <a href={"/"}>Home</a>
                        </li>
                        <li>
                            <a href={"/"}>Favorites</a>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    )
}


