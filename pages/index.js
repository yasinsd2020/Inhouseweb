import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import SubContainerHeader from "../components/TableHeader/subContainerHeader";
import MainTable from "../components/mainTable/mainTable";
import PaginationComp from "../components/Paginations/PaginationComp";


import AdminDash from "../components/adminDashboard/AdminDash";

export default function Home() {
  return (
    <>
      <div className="container" >
      <Navbar />
        <div className="sub-container" style={{backgroundColor:'#ecf7fc'}}>
          {/* <Header />
          <SubContainerHeader />
          <MainTable />
          <PaginationComp/> */}
         
          <AdminDash/>

        </div>
      </div>
    </>
  );
}
