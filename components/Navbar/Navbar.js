import Logodropdown from "../Navbar/Logodropdown";

import HomeIcon from "@mui/icons-material/Home";

function Navbar() {


  return (
    <>
      <div
        className="nav-container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems:"center",
          height: "70px",
          width: "100%",
          backgroundColor: "white",
          boxShadow:' 0 2px 5px rgba(0,0,0,0.25), 0 2px 5px rgba(0,0,0,0.22)',
          padding:'0 1rem'
        }}
      >
        <div className="div-1" style={{display: "flex", justifyContent:"space-evenly", alignItems:"center", width:"10%" }}>
          <div className="home-icon">
            <HomeIcon />
          </div>
            <div
              clasName="h"
              style={{
                color: "#0065ff",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                borderBottom: ".5px solid black",
              }}
            >
              Home
            </div>
        </div>
        <div className="div-2" style={{ display: "flex" }}>
          <div className="Notification">
          </div>
          <div className="Logo">
            <Logodropdown />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
