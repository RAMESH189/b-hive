
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from './shared/Header/Header'
import DashBoard from './shared/Dashboard/DashBoard'
import Footer from './shared/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <DashBoard />
      <Footer />
  </div>
  )
}

export default App
