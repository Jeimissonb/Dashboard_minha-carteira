import React from 'react'
import Style from './style.module.scss'
import logoImg from '../../assets/logo.svg'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'


const Aside: React.FC = () => {
    return (
        <div className={Style.Container}>
            <div className={Style.Header}>
                <img className={Style.logoImg} src={logoImg} alt="logo Minha carteira" />
                <span className={Style.Title}>Minha Carteira</span>
            </div>
            <div className={Style.MenuContainer}>
                <a className = {Style.MenuItemLink} href="#">
                    <MdDashboard/>
                    Dashboard
                </a>
                <a className = {Style.MenuItemLink} href="#">
                    <MdArrowUpward/>
                    Entradas
                </a>
                <a className = {Style.MenuItemLink} href="#">
                    <MdArrowDownward/>
                    Saídas
                </a>
                <a className = {Style.MenuItemLink} href="#">
                    <MdExitToApp/>
                    Sair
                </a>
            </div>
        </div>
    )
}

export default Aside;