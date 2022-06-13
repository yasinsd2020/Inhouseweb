// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import BulkAction from "../../components/Header/BulkAction";
import Vendor from "../../components/Header/Vendor";
import Booking from "../../components/Header/Booking";
import SearchBystatus from "../../components/Header/SearchBystatus";

export default function Home() {
  return (
    <>
      <div className="header-container">
        <h1>Support</h1>
        <div className="sub-header-container">
          <div className="d-1">
            <BulkAction />
            <button>Apply</button>
          </div>
          <div className="d-2">
            <input
              placeholder="Booking Id"
              style={{ marginRight: "2px" }}
            ></input>
            <Vendor />
          </div>
          <div className="d-3">
            <Booking />
            <SearchBystatus />

            <input
              placeholder="Search By Hotel"
              style={{ width: "160px" }}
            ></input>

            <input
              placeholder="Search By Customer"
              style={{ width: "160px" }}
            ></input>
            <button>Filter</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .sub-header-container {
          display: flex;
          justify-content: space-around;
          background-color: peach;
          margin-bottom: 3rem;
        
        }

        .d-1 {
          display: flex;
          width: 19%;
          justify-content: space-between;
        }

        .d-1 button {
          margin-right: 1rem;
        }

        .d-2 {
          display: flex;
          width: 21%;
          justify-content: space-between;
        }
        .d-3 {
          width: 60%;
          display: flex;
          justify-content: space-evenly;
        }

        button {
          height: 40px;
          width: 80px;
          background-color: #0065ff;
          border: none;
          color: white;
          border-radius: 0.2rem;
          cursor: pointer;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.19),
            0 1px 1px rgba(0, 0, 0, 0.23);
          font-size: 17px;
        }

        input {
          height: 40px;
          width: 120px;
          border: 1px grey solid;
          text-align: center;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
