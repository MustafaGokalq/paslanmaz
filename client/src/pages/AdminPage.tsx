import React from "react";
import Header from "../components/Admin/Header";
import Sidebar from "../components/Admin/Sidebar";
import MainContent from "../components/Admin/MainContent";

const AdminPage = () => {
  return (
    <div>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
