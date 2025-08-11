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
            <p>{props.name}</p>
        </div>
    );
};

const Content = (props) => {
    return (
        <div>
            <Part name={props.part1} />
            <Part name={props.part2} />
            <Part name={props.part3} />
        </div>
    );
};

const Total = (props) => {
    return (
        <div>
            <ul>
                <li>{props.exercises1}</li>
                <li>{props.exercises2}</li>
                <li>{props.exercises3}</li>
            </ul>
        </div>
    );
};

const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} />
            <Total
                exercises1={exercises1}
                exercises2={exercises2}
                exercises3={exercises3}
            />
        </div>
    );
};

export default App;
