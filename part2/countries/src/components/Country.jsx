import React from "react";

function Country({ country }) {
    const languageList = Object.values(country.languages);

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>
                Capital: {country.capital} <br />
                Area: {country.area}
            </p>
            <h2>Languages</h2>
            <ul>
                {languageList.map((language, id) => (
                    <li key={id}>{language}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
        </div>
    );
}

export default Country;
