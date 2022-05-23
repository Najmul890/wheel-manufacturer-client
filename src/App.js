import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Header from './components/shared/Header/Header';




function App() {
  return (
    <div className='container' >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
