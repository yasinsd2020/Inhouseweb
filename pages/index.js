import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import SubContainerHeader from "../components/TableHeader/subContainerHeader";
import MainTable from "../components/mainTable/mainTable";
import PaginationComp from "../components/Paginations/PaginationComp";
import DashGrid from "../components/dashGrid/DashGrid";
import RecentBooking from "../components/ChartBar/RecentBooking"
import ChartComp from "../../inhouseweb/components/chartComp/ChartComp";

export default function Home() {
  return (
    <>
      <div className="container" >
      <Navbar />
        <div className="sub-container" style={{}}>
          <Header />
          <SubContainerHeader />
          <MainTable />
          <PaginationComp/>
          <DashGrid/>
          <div className="bar-recent-booking" style={{width:"100%", display:"flex", justifyContent:"space-around"}}>
          <ChartComp />
          <RecentBooking />
          </div>
        </div>
      </div>
    </>
  );
}
