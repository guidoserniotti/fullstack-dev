import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Country from "./components/Country";

const App = () => {
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [countryList, setCountryList] = useState({});
    const [countryFilter, setCountryFilter] = useState("");

    useEffect(() => {
        // console.log("effect run, countryFilter is now", countryFilter);
        axios
            .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
            .then((response) => {
                setCountryList(response.data);
            });
    }, []);

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

    return (
        <div>
            <Filter filter={countryFilter} handle={handleChange} />
            {filteredCountries.length < 11 && filteredCountries.length > 1
                ? filteredCountries.map((country) => (
                      <li key={country.name.common}>{country.name.common}</li>
                  ))
                : filteredCountries.length === 1 && (
                      <Country country={filteredCountries[0]} />
                  )}
        </div>
    );
};

export default App;
