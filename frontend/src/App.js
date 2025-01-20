import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderPage from './screens/OrderScreen';
import EmailInput from './screens/EmailInput';
import OrderList from './screens/OrderList';
import OrderDetail from './screens/OrderDetail';
import OrderModify from './screens/OrderModify';
import MainMenuScreen from './screens/MainMenuScreen';
import OrderListScreen from "./screens/OrderListScreen";
import './App.css';
import LoginPage from "./components/login";
import AddMenuPage from "./screens/addMenu";
import AdminOrderDetail from "./screens/AdminOrderDetail";
import AdminOrderList from './screens/AdminOrderList';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order/email" element={<EmailInput />} />
        <Route path="/order/list" element={<OrderList />} />
        <Route path="/order/detail/:id" element={<OrderDetail />} />
        <Route path="/order/modify/:id" element={<OrderModify />} />
        {/* /login 경로에 LoginPage 컴포넌트를 렌더링 */}
        <Route path="/login" element={<LoginPage />} />
        {/* 기본 경로 설정 */}
        {/* <Route path="/" element={<h1>Welcome to the Home Page</h1>} /> */}
        <Route path="/admin" element={<Login/>} />
        <Route path="/admin/addMenu" element={<AddMenuPage/>}/>
        <Route path="/admin/order/:id" element={<AdminOrderDetail />} />
        <Route path="/admin/orders" element={<AdminOrderList />} />
        <Route path="/" element={<MainMenuScreen />} />
        <Route path="/order_list" element={<OrderListScreen />} />
      </Routes>
    </Router>
  );
}

export default App;