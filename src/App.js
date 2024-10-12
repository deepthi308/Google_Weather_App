import { useState } from "react";
import "./app.css";
import InputBox from "./components/inputBox/InputBox";
import axios from "axios";
import Result from "./components/result/Result";
import { API_KEY, IMAGE_BASE_URL, UNIT } from "./constants/constants";

function App() {
  // Creating State Variables:
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    temperature: "",
    description: "",
    icon: "",
  });

  // This function will be triggered on click of search button
  const handleGetWeatherDetails = async () => {
    setIsLoading(true);
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${UNIT}`;
    let response = await axios.get(URL);
    setWeatherData((prevWeatherData) => {
      setIsLoading(false);
      return {
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        icon: `${IMAGE_BASE_URL}${response.data.weather[0].icon}@2x.png`,
      };
    });
  };

  // This function will be triggered on click of back button
  const handleNavigateBack = () => {
    setIsLoading(false);
    setCity("");
    setWeatherData({});
  };

  return (
    <>
      {!weatherData.temperature ? (
        <InputBox
          isLoading={isLoading}
          city={city}
          setCity={setCity}
          setWeatherData={setWeatherData}
          handleGetWeatherDetails={handleGetWeatherDetails}
        />
      ) : (
        <Result
          weatherData={weatherData}
          handleNavigateBack={handleNavigateBack}
        />
      )}
    </>
  );
}

export default App;
