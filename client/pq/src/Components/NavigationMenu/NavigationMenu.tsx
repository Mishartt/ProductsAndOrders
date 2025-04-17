'use client'
import Image from 'next/image'
import './NavigationMenu.scss'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { resetAll } from '@/services/ordersService'

const NavigationMenu = () => {
    const pathname = usePathname();
    const router = useRouter()

    const reset = async () => {
        if(window.confirm('Are you sure you want to reset orders and products?')){
            await resetAll()
            router.refresh()
        }
    }

    return(
        <div className="sidebar">
            <div className="sidebar-user">
                <Image className='sidebar-user__icon' src="/assets/img/sidebar/user1.jpg" alt="User icon" width={150} height={150}/>
                <div onClick={() => alert("This feature isn't part of the technical assignment")} className="sidebar-user__settings-btn"><Image src="/assets/img/sidebar/settings.png" alt="Settings icon" width={50} height={50}/></div>
            </div>
            <nav className='sidebar-navigation'>
                <ul className='sidebar-navigation__list'>
                    <li className='sidebar-navigation__list-item'>
                        <Link id={pathname == '/' ? 'nav-item_active' : ''} href="/">ПРИХОД</Link>
                    </li>
                    <li id={pathname == '/groups' ? 'nav-item_active' : ''}className='sidebar-navigation__list-item'>
                        <Link onClick={() => alert("This page isn't part of the technical assignment")} href="#">ГРУППЫ</Link>
                    </li>
                    <li  className='sidebar-navigation__list-item'>
                        <Link id={pathname == '/products' ? 'nav-item_active' : ''} href="products">ПРОДУКТЫ</Link>
                    </li>
                    <li className='sidebar-navigation__list-item'>
                        <Link  onClick={() => alert("This page isn't part of the technical assignment")} href="#">ПОЛЬЗОВАТЕЛИ</Link>
                    </li>
                    <li  className='sidebar-navigation__list-item'>
                        <Link  onClick={() => alert("This page isn't part of the technical assignment")} href="#">НАСТРОЙКИ</Link>
                    </li>
                </ul>
            </nav>
            <div onClick={() => reset()} className="sidebar__reset">RESET </div>
        </div>
    )
}

export default NavigationMenu