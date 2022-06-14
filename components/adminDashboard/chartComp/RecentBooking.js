import { Link } from "@mui/material";
import React from "react";

const RecentBooking = () => {
  return (
    <>
      <div
        className="MainContainer"
        style={{ width: "750px", height: "auto", background: "#ffffff" , justifyContent:'flex-end' , alignItems:'center', marginBottom:'4rem' ,marginLeft:'2rem' , padding:'1rem 0',
        boxShadow:' 0 2px 5px rgba(0,0,0,0.25), 0 2px 5px rgba(0,0,0,0.22)'}}
      >
        <div
          className="div-1"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid grey",
            padding: "0 1rem",
            marginBottom:'2rem'
          }}
        >
          <div className="Title">
            <h2 style={{fontWeight:'600',fontSize:'17px'}}>Recent Booking</h2>
          </div>
          <div className="Linktag" style={{cursor:'pointer'}}>
            <Link>More {">"}</Link>
          </div>
        </div>
        <div
          className="div-2"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "0 1rem",
          }}
        >
          <table class="table table-hover">
            <thead  >
              <tr  style={{fontSize:'20px'}}>
                <th width="60px">#</th>
                <th>Item</th>
                <th width="100px">Total</th>
                <th width="100px">Paid</th>
                <th width="100px">Status</th>
                <th width="100px">Created At</th>
              </tr>
                <hr style={{width:'1000%'}}></hr>
            </thead>
            <tbody>
              <tr style={{textAlign:'center' ,fontSize:'20px'}}>
                <td>#73238</td>
                <div style={{width:'150px',wordWrap: 'break-word' ,marginLeft:'2rem'}} >
                  <a
                    href="https://www.bookings.hourlyrooms.co.in/hotel/hotel-prince-palace?start=2022-06-11&amp;end=2022-06-12&amp;duration=6&amp;isgroup=0"
                    target="_blank"
                   style={{color:'#0065ff' ,wordWrap: 'break-word'}}>
                    HOTEL PRINCE PALACE 
                    palace
                  </a>
                </div>
                <td >₹1,089</td>
                <td >₹0</td>
              <td  >
                  <span style={{backgroundColor:'#0065ff',color:'white',padding:'5px',borderRadius:'.5rem' ,fontSize:'15px'}} >Processing</span>
                </td>
                <td>06/11/2022 13:51</td>
              </tr>
              <hr style={{width:'1000%'}}></hr>
              <tr style={{textAlign:'center' ,fontSize:'20px'}}>
                <td>#73238</td>
                <div style={{width:'150px',wordWrap: 'break-word' ,marginLeft:'2rem'}} >
                  <a
                    href="https://www.bookings.hourlyrooms.co.in/hotel/hotel-prince-palace?start=2022-06-11&amp;end=2022-06-12&amp;duration=6&amp;isgroup=0"
                    target="_blank"
                   style={{color:'#0065ff' ,wordWrap: 'break-word'}}>
                    HOTEL PRINCE PALACE 
                    palace
                  </a>
                </div>
                <td >₹1,089</td>
                <td >₹0</td>
              <td  >
                  <span style={{backgroundColor:'#0065ff',color:'white',padding:'5px',borderRadius:'.5rem' ,fontSize:'15px'}} >Processing</span>
                </td>
                <td>06/11/2022 13:51</td>
              </tr>
              <hr style={{width:'1000%'}}></hr>
              <tr style={{textAlign:'center' ,fontSize:'20px'}}>
                <td>#73238</td>
                <div style={{width:'150px',wordWrap: 'break-word' ,marginLeft:'2rem'}} >
                  <a
                    href="https://www.bookings.hourlyrooms.co.in/hotel/hotel-prince-palace?start=2022-06-11&amp;end=2022-06-12&amp;duration=6&amp;isgroup=0"
                    target="_blank"
                   style={{color:'#0065ff' ,wordWrap: 'break-word'}}>
                    HOTEL PRINCE PALACE 
                    palace
                  </a>
                </div>
                <td >₹1,089</td>
                <td >₹0</td>
              <td  >
                  <span style={{backgroundColor:'#0065ff',color:'white',padding:'5px',borderRadius:'.5rem' ,fontSize:'15px'}} >Processing</span>
                </td>
                <td>06/11/2022 13:51</td>
              </tr>
              <hr style={{width:'1000%'}}></hr>
              <tr style={{textAlign:'center' ,fontSize:'20px'}}>
                <td>#73238</td>
                <div style={{width:'150px',wordWrap: 'break-word' ,marginLeft:'2rem'}} >
                  <a
                    href="https://www.bookings.hourlyrooms.co.in/hotel/hotel-prince-palace?start=2022-06-11&amp;end=2022-06-12&amp;duration=6&amp;isgroup=0"
                    target="_blank"
                   style={{color:'#0065ff' ,wordWrap: 'break-word'}}>
                    HOTEL PRINCE PALACE 
                    palace
                  </a>
                </div>
                <td >₹1,089</td>
                <td >₹0</td>
              <td  >
                  <span style={{backgroundColor:'#0065ff',color:'white',padding:'5px',borderRadius:'.5rem' ,fontSize:'15px'}} >Processing</span>
                </td>
                <td>06/11/2022 13:51</td>
              </tr>
              <hr style={{width:'1000%'}}></hr>
              <tr style={{textAlign:'center' ,fontSize:'20px'}}>
                <td>#73238</td>
                <div style={{width:'150px',wordWrap: 'break-word' ,marginLeft:'2rem'}} >
                  <a
                    href="https://www.bookings.hourlyrooms.co.in/hotel/hotel-prince-palace?start=2022-06-11&amp;end=2022-06-12&amp;duration=6&amp;isgroup=0"
                    target="_blank"
                   style={{color:'#0065ff' ,wordWrap: 'break-word'}}>
                    HOTEL PRINCE PALACE 
                    palace
                  </a>
                </div>
                <td >₹1,089</td>
                <td >₹0</td>
              <td  >
                  <span style={{backgroundColor:'#0065ff',color:'white',padding:'5px',borderRadius:'.5rem' ,fontSize:'15px'}} >Processing</span>
                </td>
                <td>06/11/2022 13:51</td>
              </tr>
              <hr style={{width:'1000%'}}></hr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RecentBooking;
