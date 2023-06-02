import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import "flowbite";
import Main from "./components/Main";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Kanban from "./components/Kanban";
import Inbox from "./components/Inbox";
import Products from "./components/Products";
import Users from "./components/Users";
import Setting from "./components/Setting";
import Earning from "./components/Earning";
import Temp from "./components/Temp";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="header" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="kanban" element={<Kanban />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
          <Route path="setting" element={<Setting />} />
          <Route path="earning" element={<Earning />} />
        </Route>
        <Route path="temp" element={<Temp />} />
      </Routes>
    </div>
  );
}

export default App;
