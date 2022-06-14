import BookingInfo from "./BookingInfo";
import VendorRemark from "./VendorRemark";
import CustomerRemark from "./CustomerRemark";
import Action from "./Action"
import Services from "./Services";
import { padding } from "@mui/system";
import MainHeader from "./MainHeader";

const MainTable = () => {
  return (
    <>
      <div className="main-container">
        <div className="table-headers">
          <MainHeader/>
        
        </div>
        <div
          className="content" >
        
            <td style={{borderRight:'1px solid black', paddingRight:'1rem'}}>
          <div
            className="booking-id"
            
          >
            <p>Dummy Id</p>
          </div>
        </td> 
          <Services />
          <td style={{borderRight:'1px solid black', paddingRight:'1.5rem'} }>
          <BookingInfo />
          </td>
          <td style={{borderRight:'1px solid black' , paddingRight:'2.5rem'}}>
          <VendorRemark />
          </td>
          <td style={{paddingRight:'1rem'}}>
          <CustomerRemark />
          </td>
          <td style={{borderLeft:'1px solid black' , paddingLeft:'1rem'}}>
          <Action />
          </td>
            

     
      
        </div>


        <div
          className="content" >
        
            <td style={{borderRight:'1px solid black', paddingRight:'1rem'}}>
          <div
            className="booking-id"
            
          >
            <p>Dummy Id</p>
          </div>
        </td> 
          <Services />
          <td style={{borderRight:'1px solid black', paddingRight:'1.5rem'} }>
          <BookingInfo />
          </td>
          <td style={{borderRight:'1px solid black' , paddingRight:'2.5rem'}}>
          <VendorRemark />
          </td>
          <td style={{paddingRight:'1rem'}}>
          <CustomerRemark />
          </td>
          <td style={{borderLeft:'1px solid black' , paddingLeft:'1rem'}}>
          <Action />
          </td>
            

     
      
        </div>
        <div
          className="content" >
        
            <td style={{borderRight:'1px solid black', paddingRight:'1rem'}}>
          <div
            className="booking-id"
            
          >
            <p>Dummy Id</p>
          </div>
        </td> 
          <Services />
          <td style={{borderRight:'1px solid black', paddingRight:'1.5rem'} }>
          <BookingInfo />
          </td>
          <td style={{borderRight:'1px solid black' , paddingRight:'2.5rem'}}>
          <VendorRemark />
          </td>
          <td style={{paddingRight:'1rem'}}>
          <CustomerRemark />
          </td>
          <td style={{borderLeft:'1px solid black' , paddingLeft:'1rem'}}>
          <Action />
          </td>
            

     
      
        </div>
        <div
          className="content" >
        
            <td style={{borderRight:'1px solid black', paddingRight:'1rem'}}>
          <div
            className="booking-id"
            
          >
            <p>Dummy Id</p>
          </div>
        </td> 
          <Services />
          <td style={{borderRight:'1px solid black', paddingRight:'1.5rem'} }>
          <BookingInfo />
          </td>
          <td style={{borderRight:'1px solid black' , paddingRight:'2.5rem'}}>
          <VendorRemark />
          </td>
          <td style={{paddingRight:'1rem'}}>
          <CustomerRemark />
          </td>
          <td style={{borderLeft:'1px solid black' , paddingLeft:'1rem'}}>
          <Action />
          </td>
            

     
      
        </div>
        <div
          className="content" >
        
            <td style={{borderRight:'1px solid black', paddingRight:'1rem'}}>
          <div
            className="booking-id"
            
          >
            <p>Dummy Id</p>
          </div>
        </td> 
          <Services />
          <td style={{borderRight:'1px solid black', paddingRight:'1.5rem'} }>
          <BookingInfo />
          </td>
          <td style={{borderRight:'1px solid black' , paddingRight:'2.5rem'}}>
          <VendorRemark />
          </td>
          <td style={{paddingRight:'1rem'}}>
          <CustomerRemark />
          </td>
          <td style={{borderLeft:'1px solid black' , paddingLeft:'1rem'}}>
          <Action />
          </td>
            

     
      
        </div>
        <div
          className="content" >
        
            <td style={{borderRight:'1px solid black', paddingRight:'1rem'}}>
          <div
            className="booking-id"
            
          >
            <p>Dummy Id</p>
          </div>
        </td> 
          <Services />
          <td style={{borderRight:'1px solid black', paddingRight:'1.5rem'} }>
          <BookingInfo />
          </td>
          <td style={{borderRight:'1px solid black' , paddingRight:'2.5rem'}}>
          <VendorRemark />
          </td>
          <td style={{paddingRight:'1rem'}}>
          <CustomerRemark />
          </td>
          <td style={{borderLeft:'1px solid black' , paddingLeft:'1rem'}}>
          <Action />
          </td>
            

     
      
        </div>
      </div>

      <style jsx>
        {`
          .main-container {
        
           width:100%;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
      
       
          }

          .content{
            display:flex;
            width:90%;
            justify-content:space-between;
            
            background-color: #f5f5f5;
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
            padding:2rem;
          }
        
          .submit-btn {
            margin-top: 0.5rem;
          }
          .btn {
            box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75);
          }
        `}
      </style>
    </>
  );
};

export default MainTable;
