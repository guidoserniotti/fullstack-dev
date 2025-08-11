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

const Content = ({ parts }) => {
    let part1 = parts[0];
    let part2 = parts[1];
    let part3 = parts[2];
    return (
        <div>
            <Part name={part1.name} exercises={part1.exercises} />
            <Part name={part2.name} exercises={part2.exercises} />
            <Part name={part3.name} exercises={part3.exercises} />
        </div>
    );
};

const Total = ({ parts }) => {
    let total = parts[0].exercises + parts[1].exercises + parts[2].exercises;
    return (
        <div>
            <p>Total: {total}</p>
        </div>
    );
};

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ],
    };

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

export default App;
