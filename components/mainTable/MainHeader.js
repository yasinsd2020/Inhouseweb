
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
                <h4>ID</h4>
                <h4>ID</h4>
                <h4>ID</h4>
                <h4>ID</h4>
                <h4>ID</h4>
            </div>


<style jsx>


{`
.main-table-header{
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
}
`}


</style>



        </>
  )
}

export default MainHeader