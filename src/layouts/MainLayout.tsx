import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import FooterContact from '../components/layout/FooterContact'

function MainLayout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="layout">
      <Sidebar isHomePage={isHomePage} />
      <div className="layout__content">
        <Outlet />
        <FooterContact />
      </div>
    </div>
  )
}

export default MainLayout
