import React from 'react'
import Processing from "./Processing";



const BookingInfo = () => {
 
 return (
    <div className="booking-info-content" style={{display:"flex", flexDirection:"column", width:'200px'}}>
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
    <div className="Created"  style={{width:'200px'}}>
        <h4 style={{ margin:0}}>Created At</h4>
        <p style={{wordWrap: 'break-word'}}>Dummy Date</p>
        <hr />
    </div>
    <div className="checkin-time" style={{width:'200px'}}>
        <h4 style={{ margin:0}}>Check-In Date, Time and<br></br> Duration</h4>
        <p style={{wordWrap: 'break-word'}}>Dummy Date and timeashdjjjjjjjjhasjdddddddddddd</p>
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
