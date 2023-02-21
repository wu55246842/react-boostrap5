import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MainLayout from "../layouts/MainLayout";
import DashboardIframe from "../components/DashboardIframe"
import AdminDashboard from "../components/AdminDashboard"

const Home = () => {
  return (
    <MainLayout>
      <div className="el-container">
        <Tabs defaultActiveKey="dashboard" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="dashboard" title="Dashboard">
            <DashboardIframe/>
          </Tab>
          <Tab eventKey="admin" title="Admin">
            <AdminDashboard/>
          </Tab>
        </Tabs>

      </div>
    </MainLayout>
  );
};

export default Home;
