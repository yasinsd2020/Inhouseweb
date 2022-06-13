


import React from 'react'

const CustomerRemark = () => {
    return (
        <div className="customer-remark">

            <div className="customer-remark-1">
                <p>Wahid, dummy date and time</p>
                <p>Remark 1</p>
                <textarea name="" id="" cols="20" rows="3" style={{ resize: "vertical", padding: ".5rem", fontSize: "16px" }}></textarea>
            </div>
            <div className="customer-remark-2">
                <p>Remark 2</p>
                <textarea name="" id="" cols="20" rows="3" style={{ resize: "vertical", padding: ".5rem", fontSize: "16px" }}></textarea>
            </div>
            <div className="customer-remark-3">
                <p>Remark 3</p>
                <textarea name="" id="" cols="20" rows="3" style={{ resize: "vertical", padding: ".5rem", fontSize: "16px" }}></textarea>
            </div>
            <div className="submit-btn">
                <button className="btn" style={{ backgroundColor: "#0065FF", border: "none", color: "white", padding: ".5rem 2rem", borderRadius: "3px", fontSize: "15px" }}>Submit</button>
            </div>
        </div>

    )
}

export default CustomerRemark;