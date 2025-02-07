#!/bin/bash
echo "inciando ollama server"

ollama serve &
pid=$!
sleep 5
ollama pull llama3.1:8b

while [ "$(ollama list | grep 'NAME')" == "" ]; do
  echo -e "\n"
  sleep 1
done

wait $pid