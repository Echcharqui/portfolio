import Sidebar from '../components/layout/Sidebar'
import MainContent from '../components/layout/MainContent'

function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default MainLayout
