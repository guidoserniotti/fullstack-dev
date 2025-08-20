import { useState } from "react";

const Button = ({ text, handleClick }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const BestAnecdote = ({ votes, anecdote }) => {
    /* Se pregunta si los votos aún están vacíos, y no se renderiza ninguna anécdota. 
    Cuando se encuentra al menos un voto, se renderiza la anécdota más votada y su cantidad de votos */
    if (votes == 0) {
        return <p>No votes? :(</p>;
    } else {
        return (
            <div>
                {anecdote}
                <p>Has {votes} votes</p>
            </div>
        );
    }
};

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
        "The only way to go fast, is to go well.",
    ];
    // se define un array plantilla de longitud igual a la cantidad de anécdotas, de todos 0.
    let plantilla = new Uint8Array(anecdotes.length);

    // el estado "selected" es un puntero para referenciar a la anécdota que se está renderizando en un momento.
    const [selected, setSelected] = useState(0);
    // instancio el nuevo estado "votes" basado en la plantilla
    const [votes, setVotes] = useState(plantilla);
    // el estado "mostVoted" es un puntero para referenciar a la anécdota MAS VOTADA.
    const [mostVoted, setMaxVotes] = useState(0);

    /* funcion para crear un número random delimitado por la longitud del array de anécdotas original,
    para luego setear el estado "selected" según la anécdota aleatoria que se genere */
    const randomAnecdote = () => {
        let index = Math.floor(Math.random() * anecdotes.length);

        setSelected(index);
    };

    /* funcion que aumenta el voto de una anécdota, definiendo una variable auxiliar para manejar la asincronía de los estados, 
    utilizando la variable auxiliar como parámetro para actualizar los votos*/
    const voteAnecdote = () => {
        let votosTotales = [...votes];
        votosTotales[selected] += 1;
        setVotes(votosTotales);

        /* se compara la cantidad de votos de las anédotas utilizando la variable auxiliar debido a una posible asincronía de actualización de valores
        luego se actualiza la anécdota que más votos tiene según la cantidad de votos que tenga la anécdota seleccionada en un momento */
        if (votosTotales[selected] > votosTotales[mostVoted]) {
            setMaxVotes(selected);
        }
    };

    return (
        <div>
            <h1>Anecdotas copadas</h1>
            {anecdotes[selected]}
            <p>Has {votes[selected]} votes</p>
            <div>
                <Button text={"next anecdote"} handleClick={randomAnecdote} />
                <Button text={"VOTAR"} handleClick={voteAnecdote} />
            </div>

            <h1>Anecdota MÁS COPADA</h1>
            <BestAnecdote
                votes={votes[mostVoted]}
                anecdote={anecdotes[mostVoted]}
            />
        </div>
    );
};

export default App;
