const PersonForm = ({
    addPerson,
    handleNameOnChange,
    handleNumberOnChange,
    newName,
    newNumber,
}) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                name:
                <input value={newName} onChange={handleNameOnChange} />
            </div>
            <div>
                number:
                <input value={newNumber} onChange={handleNumberOnChange} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default PersonForm;
