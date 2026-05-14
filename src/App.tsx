import { NavLink, Route, Routes } from 'react-router-dom'
import s from './App.module.css'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { HomePage } from './pages/HomePage/HomePage'

function App() {
  return (
    <>
      <nav className={s.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.active}` : s.navLink
          }
          to="/"
        >
          Главная
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.active}` : s.navLink
          }
          to="/about"
        >
          О приложении
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
