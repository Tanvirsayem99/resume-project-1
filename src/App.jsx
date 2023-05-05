
import './App.css'
import Navigation from './components/Navigation.jsx/Navigation'
import { Outlet} from 'react-router-dom'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
