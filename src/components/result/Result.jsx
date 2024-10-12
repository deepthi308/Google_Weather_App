import { Button } from "@mui/material";
import "./result.css";

export default function Result({ weatherData, handleNavigateBack }) {
  return (
    <section className="result-container">
      <section className="result-container-top">
        <h1>Temperature: {weatherData.temperature}</h1>
        <p>Description: {weatherData.description}</p>
        <div className="image-container">
          <img src={weatherData.icon} alt="Weather Icon" />
        </div>
      </section>
      <section className="result-container-bottom">
        <Button
          className="button"
          variant="contained"
          color="primary"
          onClick={handleNavigateBack}
        >
          Back
        </Button>
      </section>
    </section>
  );
}
