
import { useNavigate } from "react-router-dom";
import "./App.css";
import AboutUs from "./AboutUs";

const AppContent = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/products");
  };

  return (
    <div className="app-container">
      <div className="landing-page">
        <div className="background-image"></div>
        <div className="app_content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button
              className="get-started-button"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppContent;
