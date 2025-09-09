const ShowButton = ({ selectedCountry, onClick }) => {
    console.log("button", selectedCountry);

    return (
        <div>
            <button onClick={() => onClick(selectedCountry)}>Show</button>
        </div>
    );
};

export default ShowButton;
