import styled from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
        <header className={styled.header}>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIamn7OLV7LzPEfE9Fd-LYaoSDRLoiUX0xA&usqp=CAU'
              alt="img"/>
            <div className={styled.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
	);
}

export default Header;