import React from 'react'
import logo from '../../assets/img/icon/Logowhite.svg'
import '../../assets/scss/section/_section.scss'

const Header = () => {
    return (
        <header className="header">
        <img src={logo} alt="성신여자대학교 로고" className="header-logo" />
        </header>
    )
}

export default Header