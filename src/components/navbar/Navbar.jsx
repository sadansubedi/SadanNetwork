import React, { useEffect, useState } from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";
 import HomeIcon from "@mui/icons-material/Home";
 import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
 import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
 import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
 import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
 import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
 import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import WbSunnyOutlined from "@mui/icons-material/WbSunnyOutlined";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// import Register from "../../pages/register/register"
const Navbar = () => {
  const [theme,settheme]=useState("light-theme");
  const [icon, setIcon] = useState("sun");

  console.log(theme);

const toggletheme=()=>{
    if(theme === "light-theme"){
    settheme('dark-theme');
    setIcon("moon");
  } else{
    settheme('light-theme');
    setIcon("sun");

  }
}
useEffect(()=>{
  document.body.className=theme;// here we access to index.html of public folder
  console.log("useeefect rendered")
},[theme])
  return (
    <>
      <div className="navbar">
        <div className="navbarleft">
          <NavLink to="/" style={{ textDecoration: "None" }}>
            <span>Sadan Network</span>
          </NavLink>
         <NavLink to="/"> <HomeIcon/></NavLink>
          {/* {moon?<DarkModeOutlinedIcon className="halfmoon" onClick={()=>toggletheme()}/>:<WbSunnyOutlinedIcon className="full-moon" onClick={()=>toggletheme()}/>}  how i try to toggle first but not work later i reaserach and make it toggle in dark and light mode*/}
          {/* <DarkModeOutlinedIcon className="halfmoon" onClick={()=>toggletheme()}/> */}
          {/* {theme ? <WbSunnyOutlined  onClick={()=>toggletheme()}/>: <DarkModeOutlinedIcon  onClick={()=>toggletheme()}/>} */}
          {icon === 'sun' ? (
        <WbSunnyOutlinedIcon onClick={()=>toggletheme()} />
      ) : (
        <DarkModeOutlinedIcon onClick={()=>toggletheme()} />
      )}
          <GridViewOutlinedIcon/>
          <div className="navbarsearch">
            <SearchOutlinedIcon/>
            <input type="text" placeholder="search..." />
          </div>
        </div>
        <div className="navbarright">
            <PersonOutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsOutlinedIcon/>
            <div className="user">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span >Jhon Lenon</span>
            </div>
            <NavLink to="/register" style={{display:"flex",textDecoration:"none",flexDirection:"column",alignItems:"center",color:"darkred",fontSize:"15px"}}><AppRegistrationIcon/> Register Here</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
