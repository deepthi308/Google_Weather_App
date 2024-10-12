import { Button } from "@mui/material";
import "./inputBox.css";
import TextField from "@mui/material/TextField";
import GoogleLogo from "../../assets/GoogleLogo";
import Loading from "../loading/Loading";

export default function InputBox({
  isLoading,
  city,
  setCity,
  handleGetWeatherDetails,
}) {
  return (
    <section className="input-container">
      <section className="input-container-top">
        <h1>Google Weather App</h1>
        <p>Powered by</p>
        <GoogleLogo className="logo" />
      </section>
      <form className="input-container-bottom">
        {!isLoading ? (
          <>
            <TextField
              className="input"
              id="standard-basic"
              label="Enter the city name"
              variant="standard"
              value={city}
              onChange={({ target }) => setCity(target.value)}
              autoComplete="off"
            />
            <Button
              className="button"
              variant="contained"
              color="primary"
              onClick={handleGetWeatherDetails}
            >
              Search
            </Button>
          </>
        ) : (
          <Loading />
        )}
      </form>
    </section>
  );
}
