import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Country from "./components/Country";
import ShowButton from "./components/ShowButton";
const api_key = import.meta.env.VITE_SOME_KEY;

const App = () => {
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [countryList, setCountryList] = useState({});
    const [countryFilter, setCountryFilter] = useState("");
    const [weather, setWeather] = useState({});

    useEffect(() => {
        axios
            .get("https://studies.cs.helsinki.fi/restcountries/api/all")
            .then((response) => {
                setCountryList(response.data);
            });
    }, []);

    const weatherCall = (country) => {
        if (countryFilter != "") {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${api_key}&units=metric`
                )
                .then((response) => {
                    setWeather(response.data);
                });
        }
    };

    const handleChange = (event) => {
        const actualFilter = event.target.value;
        setCountryFilter(actualFilter);

        if (actualFilter === "") {
            setCountryFilter([]);
        } else {
            const filtered = countryList.filter((country) =>
                country.name.common
                    .toLowerCase()
                    .includes(actualFilter.toLowerCase())
            );
            setFilteredCountries(filtered);
        }
    };

    const handleOnShow = (selectedCountry) => {
        const filtered = countryList.filter((country) =>
            country.name.common
                .toLowerCase()
                .includes(selectedCountry.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    return (
        <div>
            <Filter filter={countryFilter} handle={handleChange} />
            {filteredCountries.length < 11 && filteredCountries.length > 1
                ? filteredCountries.map((country) => (
                      <li key={country.name.common + "-item"}>
                          {country.name.common}
                          <ShowButton
                              key={country.name.common + "-button"}
                              selectedCountry={country.name.common}
                              onClick={handleOnShow}
                          />
                      </li>
                  ))
                : filteredCountries.length === 1 && (
                      <Country
                          country={filteredCountries[0]}
                          weatherCall={weatherCall}
                          weatherState={weather}
                      />
                  )}
            {filteredCountries.length > 11 && countryFilter != "" && (
                <p>Especifica más la búsqueda. Muchos países para mostrar.</p>
            )}
        </div>
    );
};

export default App;
