import React from "react";

const MainHeader = () => {
  return (
    <>
      {/* <table class="table table-hover" style={{width:'100%'}}>
            <thead >
              <tr style={{display:'flex' ,justifyContent:'space-between',  }}>
                <th>Id</th>
               
                <th >	Service</th>
                <th >Booking Information</th>
                <th >Vendor Remark</th>
                <th >Customer Remark</th>
              
              </tr>
            </thead>
            </table> */}
      <div className="main-table-header">
        <p>Id</p>
        <p>Service</p>
        <p style={{ marginLeft: "5rem" }}>Booking Information</p>
        <p>Vendor Remark </p>
        <p>Customer Remark </p>
        <p>Actions</p>
      </div>

      <style jsx>
        {`
          .main-table-header {
            width: 1350px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            background-color: #f5f5f5;
            height: 50px;
            font-weight: bold;
            font-size: 17px;
            border: 1px solid grey;
          }
        `}
      </style>
    </>
  );
};

export default MainHeader;
