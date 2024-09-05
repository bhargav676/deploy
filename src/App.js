import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About'
import Home from './Home'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Home/>
     <Routes>
      <Route path='about' element={<About/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
