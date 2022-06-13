import React from "react";

const Services = () => {
  return (
    <div className="service-content"  >

        <div className="service-content-1" style={{width:'250px'}}>
            <a href="" style={{color:"#0065FF",wordWrap: 'break-word'}}>Hotel Honeymoon by Wahid</a>
            <p>Contact no:123456789</p>
            <p style={{ wordWrap: 'break-word'}}>Addressdkasnasjkndskdnskdnskdsjkskdbdbskdbskdbskdbskdbskdbskdbkdb</p>
            <hr />
        </div>
        <div className="service-content-2" style={{width:'250px'}}>
            <h4>Customer Detail</h4>
            <p>Name: Yasin Shaikh</p>
            <p  style={{ wordWrap: 'break-word'}}>Email: YasinShaikh69@gmail.comadasdhasdasbkdbask</p>
            <p>Phone: 1234567890</p>
            <p>Guests: 2</p>
            <hr />
        </div>
        <div className="service-content-3">
            <h4>Payment Information</h4>
            <p>Total: ₹1000</p>
            <p>Paid: ₹100</p>
            <p>Remaining: ₹900</p>
        </div>
    </div>

    // <table>
    //   <tbody>
    //     <tr style={{display:'flex' , flexDirection:'column'}}>
    //       <tc style={{display:'flex' , flexDirection:'column'}}>
    //       <td>
    //         <a href="" style={{ color: "#0065FF" }}>
    //           Hotel Honeymoon by Wahid
    //         </a>
    //       </td>
    //       <td>Contact no.</td>
    //       <td> Address</td>
    //       <hr />
    //       </tc>
    //       <tc  style={{display:'flex' , flexDirection:'column'}}>
    //       <td>
    //         <h4>Customer Detail</h4>
    //       </td>
    //       <td>Name: Yasin Shaikh</td>
    //       <td>Email: YasinShaikh69@gmail.com</td>
    //       <td>Phone: 1234567890</td>
    //       <td>Guests: 2</td>
    //       </tc>
    //       <tc  style={{display:'flex' , flexDirection:'column'}}>
    //       <td>
    //         <h4>Payment Information</h4>
    //       </td>
    //       <td>Total: ₹1000</td>
    //       <td>Paid: ₹100</td>
    //       <td>Remaining: ₹900</td>
    //       </tc>
    //     </tr>
    //   </tbody>
    // </table>
  );
};

export default Services;
