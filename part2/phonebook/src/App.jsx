import { useState, useEffect } from "react";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personsService from "./services/persons";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filter, setFilter] = useState("");
    const [filteredPersons, setFilteredPersons] = useState([]);

    useEffect(() => {
        personsService.getAll().then((initialPersons) => {
            setPersons(initialPersons);
        });
    }, []);

    const addPerson = (event) => {
        event.preventDefault();
        if (newName === "" || newNumber === "") {
            alert("No se permiten GAYS !");
            return;
        } else if (persons.some((person) => person.name === newName)) {
            if (
                window.confirm(
                    `${newName} ya está en la agenda. Reemplazar número?`
                )
            ) {
                let existingPerson = persons.find(
                    (person) => person.name === newName
                );
                let changedPerson = { ...existingPerson, number: newNumber };
                personsService
                    .update(existingPerson.id, changedPerson)
                    .then(() => {
                        setPersons(
                            persons.map((person) =>
                                person.name !== existingPerson.name
                                    ? person
                                    : changedPerson
                            )
                        );
                    });
            }
            setNewName("");
            setNewNumber("");
            return;
        }
        const newPerson = { name: newName, number: newNumber };
        personsService.create(newPerson).then((returnedPerson) => {
            setPersons(persons.concat(returnedPerson));
            setNewName("");
            setNewNumber("");
            document.getElementById("name_form").focus();
        });
    };

    const handleDeletePerson = (id) => {
        if (window.confirm("Would you like to delete this person?")) {
            personsService
                .deletePerson(id)
                .then(setPersons(persons.filter((n) => n.id !== id)));
        } else {
            alert("Bueno chupala entonces");
        }
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
                <Person
                    key={person.id}
                    id={person.id}
                    number={person}
                    deletePerson={handleDeletePerson}
                />
            ))}
        </div>
    );
};

export default App;
