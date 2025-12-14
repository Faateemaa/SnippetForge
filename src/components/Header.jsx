import { FaCode, FaFolderOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-left">
        <FaCode size={28} className="header-icon" />
        <h1
          className="header-title"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          Code Snippet Manager
        </h1>
      </div>

      <div className="header-right">
        <FaFolderOpen size={22} className="header-icon" />
      </div>
    </header>
  );
}
