const Header = (props) => {
    return (
        <div>
            <h2>{props.course}</h2>
        </div>
    );
};

const Part = (props) => {
    return (
        <div>
            <p>
                {props.name} {props.exercises}
            </p>
        </div>
    );
};

const Content = ({ part1, part2, part3 }) => {
    return (
        <div>
            <Part name={part1.name} exercises={part1.exercises} />
            <Part name={part2.name} exercises={part2.exercises} />
            <Part name={part3.name} exercises={part3.exercises} />
        </div>
    );
};

const Total = (props) => {
    return (
        <div>
            <p>Total: {props.total}</p>
        </div>
    );
};

const App = () => {
    const course = "Half Stack application development";
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10,
    };
    const part2 = {
        name: "Using props to pass data",
        exercises: 7,
    };
    const part3 = {
        name: "State of a component",
        exercises: 14,
    };

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} />
            <Total
                total={part1.exercises + part2.exercises + part3.exercises}
                // exercises1={part1.exercises}
                // exercises2={part2.exercises}
                // exercises3={part3.exercises}  --> Esto también funciona
            />
        </div>
    );
};

export default App;
