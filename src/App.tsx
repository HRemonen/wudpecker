import { Outlet } from 'react-router-dom'
import Sidebar from './components/menu/Sidebar'

const App = () => (
  <section>
    <Sidebar />
    <section className='ml-60'>
      <Outlet />
    </section>
  </section>
)

export default App
