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
    const parts = [
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
    ];

    return (
        <div>
            <Header course={course} />
            <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
            <Total
                total={
                    parts[0].exercises + parts[1].exercises + parts[2].exercises
                }
            />
        </div>
    );
};

export default App;
