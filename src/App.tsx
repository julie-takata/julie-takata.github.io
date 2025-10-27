import "./App.css";
import { useState } from "react";
import AboutMe from "./assets/components/AboutMe";
import Contact from "./assets/components/Contact";
import Resume from "./assets/components/Resume";
import Projects from "./assets/components/Projects";
export default function App() {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tab:string) => {
    setActiveTab(tab);
  }
  return (
    <div className="page-bg d-flex justify-content-center align-items-center">
      <div className="main-card shadow-lg rounded-3 px-4 py-4 py-md-5">
        <div className="d-flex justify-content-center mb-4">
          <ul className="nav custom-pill-nav gap-2 flex-wrap px-3 py-2 rounded-pill mb-3">
            {["about", "projects", "contact", "resume"].map((tab) => (
              <li key={tab} className="nav-item">
                <button
                  className={`nav-link custom-pill-link fw-semibold ${
                    activeTab === tab ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="row justify-content-center align-items-center gx-4 gy-4 hero-row">
          {activeTab == "about" && (<AboutMe/>)}    
          {activeTab == "projects" && (<Projects/>)}   
          {activeTab == "contact" && (<Contact/>)}   
          {activeTab == "resume" && (<Resume/>)}           
        </div>
      </div>
    </div>
  )
}
