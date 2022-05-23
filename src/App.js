import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Authentication/Login/Login';
import Home from './components/pages/Home/Home';
import Header from './components/shared/Header/Header';




function App() {
  return (
    <div className='' >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
