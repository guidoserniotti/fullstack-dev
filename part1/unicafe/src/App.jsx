import { useState } from "react";

const Title = ({ text }) => {
    return <h1>{text}</h1>;
};

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const Stats = ({ text, value }) => {
    return (
        <li>
            {text} {value}
        </li>
    );
};

const App = () => {
    // guarda los clics de cada botón en su propio estado
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const all = good + neutral + bad;
    const score = good - bad;

    // const setStat = (param) => {     ---> OTRA FORMA DE RENDERIZAR
    //     if (param == "good") {
    //         console.log("g+1");
    //         setGood(good + 1);
    //     } else if (param == "neutral") {
    //         console.log("n+1");
    //         setNeutral(neutral + 1);
    //     } else if (param == "bad") {
    //         console.log("b+1");
    //         setBad(bad + 1);
    //     }
    // };

    return (
        <div>
            <Title text="give feeback" />
            {/* <Button handleClick={() => setStat("good")} text="good" /> ---> OTRA FORMA DE RENDERIZAR
            <Button handleClick={() => setStat("neutral")} text="neutral" />
            <Button handleClick={() => setStat("bad")} text="bad" /> */}
            <Button handleClick={() => setGood(good + 1)} text={"good"} />
            <Button
                handleClick={() => setNeutral(neutral + 1)}
                text={"neutral"}
            />
            <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
            <Title text="statistics" />
            <ul>
                <Stats text="good" value={good} />
                <Stats text="neutral" value={neutral} />
                <Stats text="bad" value={bad} />
                <Stats text="all" value={all} />
                <Stats text="average" value={all == 0 ? 0 : score / all} />
                <Stats
                    text="positive"
                    value={all == 0 ? "0%" : (good / all) * 100 + "%"}
                />
            </ul>
        </div>
    );
};

export default App;
