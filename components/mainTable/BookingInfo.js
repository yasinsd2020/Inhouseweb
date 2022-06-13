import React from 'react'
import Processing from "./Processing";



const BookingInfo = () => {
 
 return (
    <div className="booking-info-content" style={{display:"flex", flexDirection:"column",}}>
    <div className="payment-method">
        <h4 style={{ margin:0}}>Payment Method</h4>
        <p>Offline Payment</p>
        <hr />
    </div>
    <div className="status">
        <h4 style={{ margin:0}}>Status</h4>
        
        <p><Processing/></p>
        <hr />
    </div>
    <div className="Created">
        <h4 style={{ margin:0}}>Created At</h4>
        <p>Dummy Date</p>
        <hr />
    </div>
    <div className="checkin-time" style={{width:'250px'}}>
        <h4 style={{ margin:0}}>Check-In Date, Time and<br></br> Duration</h4>
        <p>Dummy Date and time</p>
        <hr />
    </div>
    <div className="booking-via-app" >
        <h4 style={{ margin:0}}>Booking via app</h4>
        <p>Yes</p>    
    </div>
</div>
)
}

export default BookingInfo
