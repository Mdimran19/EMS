
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import { Table } from './Pages/Table'
import {AboutPage} from './Pages/AboutPage'
import { ErrorPage } from './Pages/ErrorPage'
import FooterPage from './Pages/FooterPage'
import { SignUp } from './Pages/SignUp'
import  {LoginPage} from './Pages/LoginPage'
import { CreatePage } from './Pages/CreatePage'
import { EditPage } from './Pages/EditPage'
import { Search } from './Pages/Search'




function App() {


  return (
    <>
  
 
    <NavBar/>
   
    <Routes>
      <Route path='/' element={<Table/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
     
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/create' element={<CreatePage/>}></Route>
      <Route path='/edit/:id' element={<EditPage/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/*' element={<ErrorPage/>}></Route>
    </Routes>
  
    <FooterPage/>
    </>
  )
}

export default App
