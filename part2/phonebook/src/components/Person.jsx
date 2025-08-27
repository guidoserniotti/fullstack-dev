const Person = ({ number }) => {
    return (
        <li>
            {number.name} {number.number}
        </li>
    );
};

export default Person;
