import React ,{ useState } from 'react'
import Homepage from './Homepage'
import { Route,Routes } from 'react-router-dom'
import SignIn from './signIn Component/SignIn'
import Started from './components/Started'
import Courses from './Courses/Courses'

function App() {

  const [menu,setMenu] = useState(false)

  return (
      <Routes>
      <Route path='/' element={<Homepage menu={menu} setMenu={setMenu}/>}/>
      <Route path='/signIn' element={<SignIn />}/>
      <Route path='/start' element={<Started menu={menu} setMenu={setMenu}/>}/>
      <Route path='/course' element={<Courses menu={menu} setMenu={setMenu}/>}/>
      </Routes>
  )
}

export default App
