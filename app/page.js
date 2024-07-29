import Dashboard from "./component/Dashboard";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

export default function Home() {
  return (
    <>
      {/* <div className="flex">
        <Sidebar/>
        <div className="flex-1 overflow-x-auto">
          <Header/> */}
          <Dashboard/>
        {/* </div>
      </div> */}
    </>
  );
}
