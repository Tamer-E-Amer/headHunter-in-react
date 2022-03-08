import React from "react";
//css
import './app.css';
// Pages
import { HomePage, Login, Register,ContactAlpsEast, Messages, CompanyProfile,PostJob, JobList, JobDetails, CandidateProfile} from "./pages";
// react router dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const App = () => {
  return (
    // setting the page routers
        <Router>
          <Routes>
            {/* Home page */}
            <Route path="/" element={<HomePage/>}/>
            {/* login */}
            <Route path="/login" element={<Login/>}/>
            {/* register */}
            <Route path="/register" element={<Register/>}/>
            {/* Contact alps east */}
            <Route path="/contactAlpsEast" element={<ContactAlpsEast/>}/>
            {/* Messages */}
            <Route path="/messages" element={<Messages/>}/>
            {/* company profile */}
            <Route path="/companyProfile" element={<CompanyProfile/>}/>
            {/* post a job */}
            <Route path="/postJob" element={<PostJob/>}/>
            {/* job list */}
            <Route path="/jobList/:categoryId" element={<JobList/>}/>
            {/* job details */}
            <Route path="/jobDetails/:jobId" element={<JobDetails/>}/>
            {/* candidateProfile */}
            <Route path="/candidateProfile/:candidateId" element={<CandidateProfile/>}/>
          </Routes>
        </Router>
    
  );
};

export default App;
