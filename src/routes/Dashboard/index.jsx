import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Teachers,
  Students,
  Billing,
  SettingsAndProfile,
  Exams,
  Features,
} from "../../pages/Dashboard";
import Navbar from "../../components/Navbar";
import AddTeacher from "../../pages/Dashboard/TeacherAdd";

function DashboardPage() {
  return (
    <div className="flex">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/teachers" element={<Teachers />}/>
          <Route path="/add-teacher" element={<AddTeacher/>}/>
          <Route path="/students" element={<Students />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/settings-and-profile" element={<SettingsAndProfile />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashboardPage;
