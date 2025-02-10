#!/bin/bash
echo "Iniciando Ollama server"

if [ -f /app/.env ]; then
  export $(grep -v '^#' /app/.env | xargs)
fi

ollama serve &
pid=$!
sleep 5
ollama pull ${OLLAMA_MODEL}

while [ "$(ollama list | grep 'NAME')" == "" ]; do
  echo -e "\nAguardando o modelo carregar..."
  sleep 1
done

wait $pid
