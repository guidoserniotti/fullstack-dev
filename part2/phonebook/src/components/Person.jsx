import DeleteButton from "./DeleteButton";

const Person = ({ id, number, deletePerson }) => {
    return (
        <li>
            {number.name} {number.number}{" "}
            <DeleteButton handleDelete={deletePerson} id={id} />
        </li>
    );
};

export default Person;
