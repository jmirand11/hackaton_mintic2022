import React from "react";
import "../../styles/Main/header.scss";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import Ejemplo from "@mui/icons-material/People";

const Header = () => {
  return (
    <section>
      <header>
        <div class="logo">
          <a class="logolink" href="#">
            <img id="landing_logo" src="logo.png" alt="Logo" />
          </a>
        </div>
      </header>
      <nav className="sidebar">
        <Link to="/dashboard" className="">
          <HomeIcon />
          <span>Inicio</span>
        </Link>
        <Link to="/metrics" className="">
          <InsertChartIcon />
          <span>Métricas</span>
        </Link>
        <Link to="/partners" className="">
          <Ejemplo />
          <span>Aliados</span>
        </Link>
      </nav>
    </section>
  );
};

export default Header;
