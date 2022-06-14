
import DashGrid from './dashGrid/DashGrid'
import ChartComp from './chartComp/ChartComp'
import RecentBooking from './chartComp/RecentBooking'
import { useEffect, useState } from 'react'



const AdminDash = () => {


  return (
  <>
     <DashGrid/>   
      <div className='admin' style={{display:'flex', justifyContent:'center', marginBottom:'2rem'}}>
        {/* <ChartComp/> */}
        <RecentBooking/>
      
        </div>  
  
  
  </>
  )
}

export default AdminDash