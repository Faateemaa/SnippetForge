import { FaLaptopCode, FaLightbulb, FaRobot, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-title">My Snippet Manager</span>
        <span className="footer-text">© 2025 All Rights Reserved</span>
      </div>
      <div className="footer-right">
        <div className="icon-item">
          <FaLaptopCode /> <span>Coder</span>
        </div>
        <div className="icon-item">
          <FaLightbulb /> <span>Creator</span>
        </div>
        <div className="icon-item">
          <FaRobot /> <span>Tech Enthusiast</span>
        </div>
        <a
          href="https://github.com/SRCarlo"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-item github-link"
        >
          <FaGithub /> <span>SRCarlo</span>
        </a>
      </div>
    </footer>
  );
}
