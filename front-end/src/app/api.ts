export const analyzeJoke = async (joke: string) => {
    const response = await fetch("http://localhost:8000/analyze_joke", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ joke }),
    });

    const data = await response.json();
    return data.response;
};
