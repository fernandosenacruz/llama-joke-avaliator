#!/bin/bash
echo "Iniciando Ollama server"

ollama serve &
pid=$!
sleep 5
ollama pull llama3.1:8b

while [ "$(ollama list | grep 'NAME')" == "" ]; do
  echo -e "\nAguardando o modelo carregar..."
  sleep 1
done

wait $pid
