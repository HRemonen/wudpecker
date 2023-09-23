import { Outlet } from 'react-router-dom'
import Sidebar from './components/menu/Sidebar'

const App = () => (
  <section>
    <Sidebar />
    <section className='mt-12 ml-64'>
      <Outlet />
    </section>
  </section>
)

export default App
