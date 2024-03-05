/*import reactLogo from './assets/react.svg'*/
import './App.css'
import Header from './components/AppBar'

function App() {

  return (
    <>
      <Header />
      <div className='home'>
        <div className='homeContainer'>
          <img src="./src/assets/logo.png" className='homeLogo'/>
          <h1 className='homeTitle'>Digital Marketing Agency</h1>
          <h2>SLOGAN</h2>
        </div>
      </div>
    </>
  )
}

export default App
