FROM ollama/ollama AS ollama

EXPOSE 11434

COPY .env /app/.env
COPY ./entrypoint.sh /entrypoint.sh

RUN sed -i 's/\r$//' entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]