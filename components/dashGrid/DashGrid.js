import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BoltIcon from '@mui/icons-material/Bolt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RedeemIcon from '@mui/icons-material/Redeem';

const DashGrid = () => {

  return (
    <>
      <div className="main-dash-grid-container">
          <div className="dash-grid-heading" style={{width:"100%", height:"100px", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <h1 style={{fontWeight:'500'}}>Welcome to Hourlyrooms!</h1>
          </div>
          <div className="dash-grid" >
              <div className="dash-grid-row" style={{width:"100%", display:"flex", justifyContent:"space-between", padding:"1rem 2rem"}}>
                  <div className="dash-grid-content" style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#8892d6", color:"white"}} >
                      <div className="dash-grid-text">
                          <p>All BOOKINGS</p>
                          <h2>₹83,259,524</h2>
                          <p>Total revenue</p>
                      </div>
                      <div className="dash-grid-icon-purlple    ">
                          <ShoppingCartOutlinedIcon style={{width:'50px',height:'50px', color:'white'}}/>
                      </div>
                  </div>
                  <div className="dash-grid-content" style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#8892d6", color:"white"}}>
                  <div className="dash-grid-text">
                          <p>ACTUAL REVENUE</p>
                          <h2>₹10,865,623</h2>
                          <p>Total revenue</p>
                      </div>
                      <div className="dash-grid-icon-purlple">
                          <ShoppingCartOutlinedIcon style={{width:'50px',height:'50px', color:'white'}}/>
                      </div>
                  </div>
                  <div className="dash-grid-content" style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#8892d6", color:"white"}} >
                  <div className="dash-grid-text">
                          <p>ACTUAL EARNING</p>
                          <h2>₹2,041,932</h2>
                          <p>Total revenue</p>
                      </div>
                      <div className="dash-grid-icon-purlple">
                          <ShoppingCartOutlinedIcon style={{width:'50px',height:'50px', color:'white'}}/>
                      </div>
                  </div>
                  <div className="dash-grid-content" style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#78c350", color:"white"}} >
                  <div className="dash-grid-text">
                          <p>All SERVICES</p>
                          <h2>6235</h2>
                          <p>Total services</p>
                      </div>
                      <div className="dash-grid-icon-green">
                          <BoltIcon  style={{width:'50px',height:'50px', color:'white'}}/>
                      </div>
                  </div>
              </div>
              <div className="dash-grid-row" style={{width:"100%", display:"flex", justifyContent:"space-between", padding:"1rem 2rem"}}>
                  <div className="dash-grid-content" style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#45bbe0", color:"white"}} >
                  <div className="dash-grid-text">
                          <p>ALL BOOKING LAST MONATH</p>
                          <h2>₹44,669,117</h2>
                          <p>Total Revenue</p>
                      </div>
                      <div className="dash-grid-icon-skyblue">
                          <LocalOfferIcon style={{width:'50px',height:'50px', color:'white'}}/>
                      </div>
                  </div>
                  <div className="dash-grid-content" style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#45bbe0", color:"white"}} >
                  <div className="dash-grid-text">
                          <p>ALL BOOKING LAST MONTH</p>
                          <h2>₹3,618,247</h2>
                          <p>Total Revenue</p>
                      </div>
                      <div className="dash-grid-icon-skyblue">
                          <LocalOfferIcon style={{width:'50px',height:'50px', color:'white'}}/>
                      </div>
                  </div>
                  <div className="dash-grid-content" style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#45bbe0", color:"white"}} >
                  <div className="dash-grid-text">
                          <p>LAST MONTH ACTUAL EARNING</p>
                          <h2>₹603,770</h2>
                          <p>Total Earning</p>
                      </div>
                      <div className="dash-grid-icon-skyblue">
                          <LocalOfferIcon style={{width:'50px',height:'50px', color:'white'}}/>
                      </div>
                  </div>
                  <div className="dash-grid-content" style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#78c350", color:"white"}}>
                  <div className="dash-grid-text">
                          <p>SERVICES</p>
                          <h2>4588</h2>
                          <p>Total Bookable Services</p>
                      </div>
                      <div className="dash-grid-icon-green">
                          <BoltIcon  style={{width:'50px',height:'50px', color:'white'}}/>
                      </div>
                  </div>
              </div>
              <div className="dash-grid-row" style={{width:"100%", display:"flex", justifyContent:"space-between", padding:"1rem 2rem"}}>
                  <div className="dash-grid-content" style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#f06292", color:"white"}} >
                  <div className="dash-grid-text">
                          <p>All BOOKING CURRENT MONTH</p>
                          <h2>₹23,918,226</h2>
                          <p>Total revenue</p>
                      </div>
                      <div className="dash-grid-icon-pink">
                          <RedeemIcon style={{width:'50px',height:'50px', color:'white'}}/>
                      </div>
                  </div>
                  <div className="dash-grid-content" style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#f06292", color:"white"}}>
                  <div className="dash-grid-text">
                          <p>CURRENT MONTH ACTUAL REVENUE</p>
                          <h2>₹1,695,106</h2>
                          <p>Total revenue</p>
                      </div>
                      <div className="dash-grid-icon-pink">
                          <RedeemIcon style={{width:'50px',height:'50px', color:'white'}}/>
                      </div>
                  </div>
                  <div className="dash-grid-content" style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#f06292", color:"white"}}>
                  <div className="dash-grid-text">
                          <p>CURRENT MONTH  ACTUAL EARNING</p>
                          <h2>₹327,537</h2>
                         
                          <p>Total Earning</p>
                      </div>
                      <div className="dash-grid-icon-pink"  >
                          <RedeemIcon style={{width:'50px',height:'50px', color:'white'}}/>
                      </div>
                  </div>
                  <div className="dash-grid-content"  style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#78c350", color:"white"}}>
                  <div className="dash-grid-text" >
                          <p>CURRENY MONTH PUBLISHED SERVICES</p>
                          <h2>215</h2>
                          <p>Total Service</p>
                      </div>
                      <div className="dash-grid-icon-green" >
                          <BoltIcon style={{width:'50px',height:'50px', color:'white'}}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>


<style jsx>


    {`
    .dash-grid-row{
        width:100%;
        height: auto;
    }

    .dash-grid-content{
        width:24%;
        height:150px;
        border-radius: 3px;
        padding:5.5rem 1rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.25), 0 2px 5px rgba(0,0,0,0.22);
    }
    .dash-grid-icon-green{
      
        border-radius: 2rem;
        border:none ;
        background-color:#93cf73;
        padding:.5rem;
      
    }
    .dash-grid-icon-purlple{
      
        border-radius: 2rem;
        border:none ;
        background-color: #a0a8de;
        padding:.5rem;
    }

    .dash-grid-icon-skyblue{
       
        border-radius: 2rem;
        border:none ;
        background-color:#6ac9e6;
        padding:.5rem;
    }
     
    .dash-grid-icon-pink{
       
        border-radius: 2rem;
        border:none ;
        background-color:#f381a8;
        padding:.5rem ;
       
    }   

    `}


</style>


    </>
  )
}

export default DashGrid
