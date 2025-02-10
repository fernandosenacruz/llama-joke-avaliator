# Avavialor de piadas

## Este projeto sobe uma aplicação com containers docker onde um modelo de LLM do Ollama fará análise de uma piada enviada.

# 💻 Rodar a aplicação na sua máquina 💻

### Você vai precisar ter instalado

- [Git](https://git-scm.com/downloads)
- [Docker](https://www.docker.com/get-started/) (Recomendado)

## 🐋 Rodar com Docker 🐋

<details>
<summary>Instruções</summary>

## Clonar o repositório

Primeiramente você vai precisar clonar este repositório para qualquer diretório em sua máquina local.

Para isso você vai executar o seguinte comando no seu terminal:

```console
git clone https://github.com/fernandosenacruz/llama-joke-avaliator.git
```

## Setup

Antes de inicializar o projeto, é importante configurar algumas variáveis de ambiente (.env.example).

### Configurar o ambiente (.env)

- **Raíz do projeto**
  - Crie o arquivo `.env` com as variáveis de ambiente indicadas:
  ```
    OLLAMA_URL=http://ollama:11434/api/generate
    OLLAMA_MODEL=set_ollama_model // example: llama3.1:8b
  ```
  > Apague os comentários indicados `// ...` ao lado do valor da variável

## Comandos docker

- **Subuir aplicação**
  ```
    docker compose up --build
  ```

  **Obs**
  - Atenção!
  - Este é um projeto demanda espaço de armazenamento grande a depender do modelo escolhido.
  - Este projeto demanda um tempo relativamente longo para execução pois será necessário baixar imagens que varia de acordo com a conexão com a internet.
  - Este projeto estará pronto para teste quando o console exibir as seguintes mensagens:
    ```
      backend   | INFO:     Application startup complete.
      frontend  |    ▲ Next.js 15.1.6
      frontend  |    - Local:        http://localhost:3000
      frontend  |    - Network:      http://172.18.0.4:3000
      frontend  |                                                                                                                                        
      frontend  |  ✓ Starting...
      frontend  |  ✓ Ready in 982ms
      ollama    | pulling 0cb05c6e4e02... 100% ▕▏  487 B                         
      ollama    | verifying sha256 digest 
      ollama    | writing manifest 
      ollama    | success 
      ollama    | [GIN] 2025/02/10 - 13:43:30 | 200 |     274.926µs |       127.0.0.1 | HEAD     "/"
      ollama    | [GIN] 2025/02/10 - 13:43:30 | 200 |    1.712817ms |       127.0.0.1 | GET      "/api/tags"
    ```

### Como Testar
  - Acesse no seu navegador ```http://localhost:3000/```
  - Escreva uma piada para ser avaliada e clique no botão 'Analisar'
  - Aguarde a resposta do LLM

  ***Obs**
  - O tempo de resposta do avaliador varia de acordo com a capacidade de processamento de seu computador. Caso não possua uma GPU o tempo de resposta será ainda maiior.

</details>

## Tecnologias Usadas

### Back-end ⚙️

- [Docker](https://www.docker.com/)
- [Pithin](https://www.python.org/)
</details>

