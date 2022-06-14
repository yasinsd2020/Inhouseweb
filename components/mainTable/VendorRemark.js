

import React from 'react'

const VendorRemark = () => {
  return (
    <div className="vendor-remark" style={{ width:'200px',}}>
   
              <div className="vendor-remark-1">
              <div style={{width:'150px'}}>
                <p style={{wordWrap: 'break-word'}}>Wahid, dummy date and time
                Kisan 2022-06-14 14:56:07adasjdnasjkdnasjkdnsajkdnsjkdsjldsldsjldbsjkldbslaaaaaaaaaaaa
                qwqjhejifhdjofwdjfbwdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjfbwkfnffnsdfnsdfndofndfndfndfndlorem
                </p>
                </div>
                  <p>Remark 1</p>
                  <textarea name="" id="" cols="20" rows="3" style={{resize:"vertical", padding:".5rem", fontSize:"16px"}}></textarea>
              </div>
              <div className="vendor-remark-2">
                  <p>Remark 2</p>
                  <textarea name="" id="" cols="20" rows="3" style={{resize:"vertical", padding:".5rem", fontSize:"16px"}}></textarea>
              </div>
              <div className="vendor-remark-3">
                  <p>Remark 3</p>
                  <textarea name="" id="" cols="20" rows="3" style={{resize:"vertical", padding:".5rem", fontSize:"16px"}}></textarea>
              </div>
          </div>
  )
}

export default VendorRemark;
