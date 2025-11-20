import { useState } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  const [isHidden, setIsHidden] = useState(false);
  const title = "My App";
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <div className="">
        <Navbar
          title={title}
          onSidebarHide={() => {
            setIsHidden(!isHidden);
          }}
          onLogout={() => {
           
          }}
        />
      </div>
      <div className="grid grid-cols-7">
        <div className={isHidden ? "hidden" : "block"}>
          <Sidebar />
        </div>
        <div className="col-span-6">
          <Main />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
