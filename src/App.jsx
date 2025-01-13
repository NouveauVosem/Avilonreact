import './styles/styles.css'
import './styles/product.css'
import './styles/gallery.css'
import './styles/contacts.css'
import { Outlet } from 'react-router'
function App() {

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
