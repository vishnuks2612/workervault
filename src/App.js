import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import ViewNews from './Components/ViewNews';
import Home from './Components/Home';
import AddNearNews from './Components/AddNearNews';
import AdminHome from './Components/AdminHome';
import AdminViewUsers from './Components/AdminViewUsers';
import ContactUs from './Components/ContactUs';
import AdminViewQueries from './Components/AdminViewQueries';
import ViewNearNews from './Components/ViewNearNews';
import AdminAddServices from './Components/AdminAddServices';
import AdminViewServiceList from './Components/AdminViewServiceList';

function App() {
  return (
    <BrowserRouter>

    <Routes>

      <Route path='' element={<Login/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='home' element={<Home/>}></Route>
      <Route path='viewnews' element={<ViewNews/>}></Route>
      <Route path='addnews' element={<AddNearNews/>}></Route>
      <Route path='adminhome' element={<AdminHome/>}></Route>
      <Route path='adminviewusers' element={<AdminViewUsers/>}></Route>
      <Route path='contactus' element={<ContactUs/>}></Route>
      <Route path='adminviewqueries' element={<AdminViewQueries/>}></Route>
      <Route path='viewnearnews' element={<ViewNearNews/>}></Route>
      <Route path='adminaddservices' element={<AdminAddServices/>}></Route>
      <Route path='adminviewservices' element={<AdminViewServiceList/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
