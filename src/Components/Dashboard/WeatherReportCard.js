import React from "react";
import "../../styles/Dashboard/weatherCard.scss";
import Card from "@mui/material/Card";

const WeatherReportCard = () => {
  return (
    <section className="clima-general">
      <Card>
        <Card className="clima-card">
          <img src="https://cdn-icons-png.flaticon.com/512/979/979585.png" />
          <h4>Soleado</h4>
        </Card>
        <Card className="clima-card">
          <img src="https://cdn-icons.flaticon.com/png/512/5370/premium/5370273.png?token=exp=1639537559~hmac=698059bbeca99c78f49a6e58b92de922" />
          <h4>Nublado</h4>
        </Card>
        <Card className="clima-card">
          <img src="https://cdn-icons-png.flaticon.com/512/3217/3217172.png" />
          <h4>Lluvioso</h4>
        </Card>
      </Card>
    </section>
  );
};

export default WeatherReportCard;
