import { NavLink, Outlet } from 'react-router'

export function HomeLayout() {
  return (
    <>
      <header>
        <h1>Felipe's Blog</h1>
        <nav className='nav-container'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/entries'>Entries</NavLink>
          <NavLink to='/about'>About</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Felipe's Blog</p>
        <p>All rights reserved © 2025</p>
      </footer>
    </>
  )
}
