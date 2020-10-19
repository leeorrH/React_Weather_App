import React from 'react';
import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';

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
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/favorites">favorites</NavLink>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    )
}


