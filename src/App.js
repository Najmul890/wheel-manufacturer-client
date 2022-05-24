import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './components/pages/Authentication/Login/Login';
import Register from './components/pages/Authentication/Register/Register';
import Home from './components/pages/Home/Home';
import Header from './components/shared/Header/Header';




function App() {
  return (
    <div className='' >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
