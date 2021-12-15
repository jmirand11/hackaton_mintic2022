import React from "react";
import "../../styles/Dashboard/alert.scss";
import Card from "@mui/material/Card";

const AidListCard = () => {
  return (
    <section className="ayudas-card-general">
      <Card className="ayudas-card">
        <h4>Emergencia:</h4>
        <span></span>
        <h4>Región:</h4>
        <span></span>
        <h4>Nivel:</h4>
        <span></span>
        <h4>Población afectada:</h4>
        <span></span>
        <h4>Necesidades por atender:</h4>
        <span></span>
      </Card>
    </section>
  );
};

export default AidListCard;
