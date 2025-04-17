import { FC } from 'react'
import TopMenu from '../TopMenu/TopMenu'
import './Header.scss'
import Search from '../Search/Search'
import Image from 'next/image'
import Logo from './Logo'

const Header:FC = () => {
    return (
        <header className="header">
            <div className="header-container">
                <Logo/>
                <Search/>
                <TopMenu/>
           </div>
        </header>
    )
}

export default Header