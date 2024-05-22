import React, { Component } from 'react'
import './App.css'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import About from './Components/About'
import Service from './Components/Service'
import Contact from './Components/Contact'
// import Login from './Components/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import SignUp from './Components/SignUp'
import History from './Components/History'
import Experience from './Components/Experience'
import Commitments from './Components/Commitments'
import Testing from './Components/Testing'
import SystemTesting from './Components/SystemTesting'
import WebTesting from './Components/WebTesting'
import NetworkTesting from './Components/NetworkTesting'
import AndroidTesting from './Components/AndroidTesting'
import Loader from './Components/Loader'
import Bootcamp from './Components/Bootcamp'
import Terms from './Components/Terms'
import Privacy from './Components/Privacy'
import Refund from './Components/Refund'
// import UC from './Components/UC'

export default class App extends Component {
  render() {
    return (
      <>
        <div className='body-trans'>
          <Router>
          <Header/>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/home' element={<Home/>}/>
              <Route exact path='/about' element={<About/>} />
              <Route exact path='/terms' element={<Terms/>} />
              <Route exact path='/privacy' element={<Privacy/>} />
              <Route exact path='/refundPolicy' element={<Refund/>} />
              <Route exact path='/about/history' element={<History/>} />
              <Route exact path='/about/experience' element={<Experience/>} />
              <Route exact path='/about/commitments' element={<Commitments/>} />
              <Route exact path='/service' element={<Service/>}/>
              <Route exact path='/service/testing' element={<Testing/>}/>
              <Route exact path='/service/testing/webtesting' element={<WebTesting/>}/>
              <Route exact path='/service/testing/systemtesting' element={<SystemTesting/>}/>
              <Route exact path='/service/testing/networktesting' element={<NetworkTesting/>}/>
              <Route exact path='/service/testing/androidtesting' element={<AndroidTesting/>}/>
              <Route exact path='/service/bootcamp' element={<Bootcamp/>}/>
              <Route exact path='/contact' element={<Contact/>}/>
              {/* <Route exact path='/login' element={<Login/>}/> */}
              {/* <Route exact path='/signup' element={<SignUp/>}/> */}
            </Routes>
            <Footer />
            <Loader/>
          </Router>
        </div>
      </>
    )
  }
}
