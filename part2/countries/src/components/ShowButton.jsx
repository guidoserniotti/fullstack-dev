const ShowButton = ({ selectedCountry, onClick }) => {
    return (
        <div>
            <button onClick={() => onClick(selectedCountry)}>Show</button>
        </div>
    );
};

export default ShowButton;
