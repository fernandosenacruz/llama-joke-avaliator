FROM python:3.10 AS base
WORKDIR /app
RUN apt-get update && apt-get install -y curl
COPY . /app
EXPOSE 8000

FROM base AS dependencies
RUN pip install --no-cache-dir -r requirements.txt
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]