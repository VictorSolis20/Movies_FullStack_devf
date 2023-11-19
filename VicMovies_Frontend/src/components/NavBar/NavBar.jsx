// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import ImagenLogo from '../../../public/logo.png';

export function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.containerlogo} key={78954}>
                <Link to="/" className={styles.linkLogo}>
                    <img className={styles.logo} src={ImagenLogo} alt="logo" />
                </Link>
            </div>
            <h1 className={`${styles.navHeader} ${styles.title}`} key={1}>
                Welcome!
            </h1>
            <div className={`${styles.navHeader} ${styles.searchTitle}`} key={4}>

                <li className='nav-item'>
                    <NavLink
                        className='nav-link active'
                        aria-current='page'
                        to='/login'
                    >
                        Login
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/signup'>
                        Sign up
                    </NavLink>
                </li>
                {/* <Search /> */}
            </div>
        </nav>
    );
}
