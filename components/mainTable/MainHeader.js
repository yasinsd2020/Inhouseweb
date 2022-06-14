
import React from 'react'

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

            <div className='main-table-header'>
              <h4>Id</h4>
                <h4>Service</h4>
                <h4>Booking Information</h4>
                <h4>Vendor Remark	</h4>
                <h4>Customer Remark	</h4>
                <h4>Actions</h4>
            </div>


<style jsx>


{`
.main-table-header{
  width:100vw;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
}
`}


</style>



        </>
  )
}

export default MainHeader