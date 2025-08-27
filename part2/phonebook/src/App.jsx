import { useState } from "react";
import Number from "./components/Number";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Guido" }]);
    const [newName, setNewName] = useState("");

    const addPerson = (event) => {
        event.preventDefault();
        if (newName === "") {
            alert("No se permiten GAYS !");
        } else if (persons.some((person) => person.name === newName)) {
            alert(`${newName} ya está en la agenda`);
            setNewName("");
            document.querySelector("input").focus();
            return;
        }

        const newPerson = { name: newName };
        setPersons(persons.concat(newPerson));
        setNewName("");
        document.querySelector("input").focus();
    };

    const handleNameOnChange = (event) => {
        setNewName(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    Name:{" "}
                    <input value={newName} onChange={handleNameOnChange} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <Number key={person.name} number={person} />
            ))}
        </div>
    );
};

export default App;
