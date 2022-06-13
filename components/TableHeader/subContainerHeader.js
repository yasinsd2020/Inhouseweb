import Button from '@mui/material/Button';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

const subContainerHeader = () => {
  return (
    <>

    <div className="main-container">
        <div className="sub-container-header">
        <Button style={{backgroundColor: "#0165ff",}} variant="contained">Updated</Button>
        <Button style={{backgroundColor: "#0165ff",}} variant="contained">As per booking ID</Button>
        <Button style={{backgroundColor: "#0165ff",}} variant="contained">Paid</Button>
        <Button style={{backgroundColor: "#0165ff",}} variant="contained">Partial Payment</Button>
        <Button style={{backgroundColor: "#0165ff",}} variant="contained">Pay at Hotel</Button>
        <Button style={{backgroundColor: "#0165ff",}} variant="contained">Next 100 Check-Ins</Button>
        <Button style={{backgroundColor: "white", color:"black", border:"1px solid black"}} variant="outlined" startIcon={<SystemUpdateAltIcon />}>
        Export to excel
      </Button>
      </div>
    </div>

      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
          }

          .main-container{
            width:100%;
            height:auto;
            display: flex;
            justify-content: center;
            align-items:center;
          }

          .sub-container-header{
            width:80%;
            margin:1rem 0;
            display:flex;
            justify-content:space-evenly;
            align-items:center;
          }



        `}
      </style>
    </>
  );
};

export default subContainerHeader;
