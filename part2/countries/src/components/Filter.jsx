const Filter = ({ filter, handle }) => {
    return (
        <div>
            filter: <input value={filter} onChange={handle} />
        </div>
    );
};

export default Filter;
