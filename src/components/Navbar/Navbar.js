import styled from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styled.nav}>
            <div className={styled.item}>
                <NavLink to="/profile" activeClassName={styled.activeLink}>Profile</NavLink>
            </div>
            <div className={styled.item}>
                <NavLink to="/dialogs" activeClassName={styled.activeLink}>Messages</NavLink>
            </div>
            <div className={styled.item}>
                <NavLink to="/users" activeClassName={styled.activeLink}>Users</NavLink>
            </div>
            <div className={styled.item}>
                <NavLink to='/news' activeClassName={styled.activeLink}>News</NavLink>
            </div>
            <div className={styled.item}>
                <NavLink to='/music' activeClassName={styled.activeLink}>Music</NavLink>
            </div>
            <div className={styled.item}>
                <NavLink to='/settings' activeClassName={styled.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;