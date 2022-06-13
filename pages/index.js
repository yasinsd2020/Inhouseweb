import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import SubContainerHeader from "../components/TableHeader/subContainerHeader";
import MainTable from "../components/mainTable/mainTable";
import PaginationComp from "../components/Paginations/PaginationComp";
import DashGrid from "../components/dashGrid/DashGrid";
import RecentBooking from "../components/ChartBar/RecentBooking"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container" >
        <div className="sub-container" style={{}}>
          <Header />
          <SubContainerHeader />
          <MainTable />
          <PaginationComp/>
          <DashGrid/>
          <RecentBooking/>
        </div>
      </div>
    </>
  );
}
