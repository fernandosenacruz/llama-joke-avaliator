from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import requests
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

OLLAMA_URL = os.getenv("OLLAMA_URL", "http://ollama:11434/api/generate")

print(OLLAMA_URL)

class PromptRequest(BaseModel):
    joke: str

@app.get("/")
def read_root():
    return {"message": "API está rodando!"}

@app.post("/analyze_joke")
def analyze_joke(request: PromptRequest):

    system_prompt = (
        "Você é um especialista em análise de piadas. Seu único propósito é avaliar piadas enviadas pelos usuários.\n"
        "Se o usuário perguntar algo que não seja uma piada, responda apenas: "
        "'Eu sou um especialista em análise de piadas. Me envie uma piada para avaliação!'.\n\n"
        "📝 **Regras para Avaliação**:\n"
        "1️⃣ **Estrutura**: A piada tem um setup e punchline bem construídos?\n"
        "2️⃣ **Sensibilidade**: Existe algum grupo que pode se sentir ofendido?\n"
        "3️⃣ **Comediante**: Qual humorista poderia contar essa piada?\n\n"
        "Sempre responda no formato:\n\n"
        "🔍 **Análise da Piada**\n"
        "📝 **Estrutura**: (Avaliação da construção da piada)\n"
        "🎭 **Possível Ofensa**: (Grupos que podem se sentir incomodados)\n"
        "🎤 **Comediante que poderia contar**: (Sugestão de humorista)\n\n"
        "Agora, avalie a seguinte piada:\n\n"
    )

    payload = {
        "model": "llama3.1:8b",
        "prompt": f"{system_prompt}{request.joke}\nResposta:",
        "stream": True
    }

    response = requests.post(OLLAMA_URL, json=payload)
    print(response.json())

    if response.status_code == 200:
        return {"response": response.json().get("response", "Erro ao obter resposta.")}
    else:
        return {"error": "Erro ao conectar ao Ollama"}
