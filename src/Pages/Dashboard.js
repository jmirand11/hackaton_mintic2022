import React from "react";
import "../styles/Dashboard/dashboard.scss";
import Alert from "../Components/Dashboard/Alert";
import Map from "../Components/Dashboard/Map";
import WeatherReportCard from "../Components/Dashboard/WeatherReportCard";
import Header from "../Components/Main/Header";
import Footer from "../Components/Main/Footer";

export default function Dashboard() {
  return (
    <section>
      <Header />
      <h1>Dashboard</h1>
      <div className="tablero-principal">
        <Map className="mapa" />
        <article>
          <Alert className="alerta" />
          <WeatherReportCard />
        </article>
      </div>
      <Footer />
    </section>
  );
}
