'use client'
import Link from "next/link"
import st from "./NavMenu.module.css"
import { usePathname } from "next/navigation"


const NavMenu = () => {
    const pathname = usePathname()
  return (
    <div className={st.nav}>
      <Link href='/rackets' className={pathname === '/rackets' ? st.active : ''}>Ракетки</Link>
      <Link href='/' className={pathname === '/' ? st.active : ''}>Главная</Link>
    </div>
  )
}

export default NavMenu
