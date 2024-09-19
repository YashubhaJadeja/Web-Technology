
import './App.css';
import  AboutUs from './Components/AboutUs'
import  ContactUs from './Components/ContactUs'
import { Link, Outlet } from 'react-router-dom';
import Student from './Components/Student';
import Faculty from './Components/Faculty';
import Home from './Components/Home';

function App() {
  return (
    <>

    {/* <Link className='btn btn-primary' to={'/about'} element={<AboutUs/>}> AboutUs</Link><br/>
    <Link className='btn btn-danger' to={'/contact'} element={<ContactUs/>}> ContactUs</Link><br/>
    <Link className='btn btn-warning' to={'/Student'} element={<Student/>}> Student</Link>
    <br/>
    <Link className='btn btn-primary' to={'/Faculty'} element={<Faculty/>}>Faculty</Link>
    <br/>
    <Link className='btn btn-secondary' to={'/Home'} element={<Home/>}>Home</Link> */}

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className='btn btn-outline-secondary' to={'/Home'} element={<Home/>}>Home</Link>
        </li>
        <li class="nav-item">
        <Link className='btn btn-outline-warning' to={'/Student'} element={<Student/>}> Student</Link>
        </li>
        <li class="nav-item">
        <Link className='btn btn-outline-primary' to={'/Faculty'} element={<Faculty/>}>Faculty</Link>
        </li>
        <li class="nav-item">
        <Link className='btn btn-outline-danger' to={'/contact'} element={<ContactUs/>}> ContactUs</Link>
        </li>
        <li class="nav-item">
        <Link className='btn btn-outline-success' to={'/about'} element={<AboutUs/>}> AboutUs</Link>
        </li>
      </ul>
    </div>

  </div>
</nav>
<Outlet/>
    </>


  );
}

export default App;
