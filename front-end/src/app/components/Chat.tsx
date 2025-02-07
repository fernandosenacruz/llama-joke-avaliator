'use client'
import { useState } from "react";
import { analyzeJoke } from "../api";

export default function Chat () {
    const [joke, setJoke] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await analyzeJoke(joke);
        setResponse(result);
    };

    return (
        <div>
            <h1>Joke Evaluator</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={joke}
                    onChange={(e) => setJoke(e.target.value)}
                    placeholder="Digite uma piada..."
                />
                <button type="submit">Analisar</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    );
};
