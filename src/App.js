import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './components/pages/Authentication/Login/Login';
import Register from './components/pages/Authentication/Register/Register';
import Home from './components/pages/Home/Home';
import Header from './components/shared/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './components/pages/NotFound/NotFound';
import RequireAuth from './components/pages/Authentication/RequireAuth/RequireAuth';
import Purchase from './components/pages/Purchase/Purchase';
import Dashboard from './components/pages/Dashboard/Dashboard';
import MyOrders from './components/pages/Dashboard/User/MyOrders/MyOrders';
import AddAReview from './components/pages/Dashboard/User/AddAReview/AddAReview';
import MyProfile from './components/pages/Dashboard/MyProfile/MyProfile';
import ManageAllOrders from './components/pages/Dashboard/Admin/ManageAllOrders/ManageAllOrders';
import AddAProduct from './components/pages/Dashboard/Admin/AddAProduct/AddAProduct';
import MakeAdmin from './components/pages/Dashboard/Admin/MakeAdmin/MakeAdmin';
import ManageProducts from './components/pages/Dashboard/Admin/ManageProducts/ManageProducts';




function App() {
  return (
    <div className='' >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard/></RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addAReview" element={<AddAReview></AddAReview>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="manageOrders" element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path="addAProduct" element={<AddAProduct></AddAProduct>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="manageProducts" element={<ManageProducts></ManageProducts>}></Route>
          
        </Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
