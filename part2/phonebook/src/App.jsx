import { useState } from "react";
import Number from "./components/Number";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Guido", number: "3536942069" },
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const addPerson = (event) => {
        event.preventDefault();
        if (newName === "" || newNumber === "") {
            alert("No se permiten GAYS !");
        } else if (persons.some((person) => person.name === newName)) {
            alert(`${newName} ya está en la agenda`);
            setNewName("");
            setNewNumber("");
            document.querySelector("input").focus();
            return;
        }

        const newPerson = { name: newName, number: newNumber };
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
        document.querySelector("input").focus();
    };

    const handleNameOnChange = (event) => {
        setNewName(event.target.value);
    };

    const handleLETSGETITTARTEDOnChange = (event) => {
        setNewNumber(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name:
                    <input value={newName} onChange={handleNameOnChange} />
                </div>
                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={handleLETSGETITTARTEDOnChange}
                    />
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
