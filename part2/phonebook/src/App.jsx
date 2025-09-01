import { useState, useEffect } from "react";
import axios from "axios";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filter, setFilter] = useState("");
    const [filteredPersons, setFilteredPersons] = useState([]);

    const hook = () => {
        axios.get("http://localhost:3001/persons").then((response) => {
            setPersons(response.data);
        });
    };

    useEffect(hook, []);

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
        axios
            .post("http://localhost:3001/persons", newPerson)
            .then((response) => {
                setPersons(persons.concat(response.data));
                setNewName("");
                setNewNumber("");
                document.querySelector("input").focus();
            });
    };

    const handleNameOnChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberOnChange = (event) => {
        setNewNumber(event.target.value);
    };

    const handleFilterOnChange = (event) => {
        const actualFilter = event.target.value;
        setFilter(actualFilter);

        if (actualFilter === "") {
            setFilteredPersons([]);
        } else {
            const filtered = persons.filter((person) =>
                person.name.toLowerCase().includes(actualFilter.toLowerCase())
            );
            setFilteredPersons(filtered);
        }
    };

    return (
        <div>
            <Filter filter={filter} handle={handleFilterOnChange} />
            <h2>Phonebook</h2>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                newNumber={newNumber}
                handleNameOnChange={handleNameOnChange}
                handleNumberOnChange={handleNumberOnChange}
            />
            <h2>Numbers</h2>
            {(filter === "" ? persons : filteredPersons).map((person) => (
                <Person key={person.id} number={person} />
            ))}
        </div>
    );
};

export default App;
