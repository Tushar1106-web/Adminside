import { useEffect } from "react";
import { selectUser } from "../features/userSlice";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import Header from "./Header";

function Main() {
  const user = useSelector(selectUser);

  const navigate = useNavigate();
  //   const currenttime = localStorage.getItem('currenttime');
  const expiretime = localStorage.getItem("Expiretime");
  const data = localStorage.getItem("name");

  // useEffect(() => {
  //   setInterval(() => {
  //     let navigator =
  //       new Date() < new Date() ? "/header" : "/login";
  //     navigate(navigator);
  //   }, 20000);
    
  // }, []);

  return (
    <div className="App">
      {new Date() < new Date(expiretime) ? <Header ><Outlet/></Header> : <Login />}
      {/* <Dashboard/> */}
    </div>
  );
}

export default Main;
