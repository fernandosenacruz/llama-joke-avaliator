'use client'
import {useState} from "react";
import {Send} from 'lucide-react';
import {analyzeJoke} from "../api";
import styles from "./chat.module.css"

export default function Chat() {
  const [joke, setJoke] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  let hasResponse = response.trim().length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!joke.trim()) return;

    setLoading(true);
    setResponse('');
    try {
      const result = await analyzeJoke(joke);
      setResponse(result);
      setTimeout(() => setJoke(''), 500);
    } catch (error) {
      console.log(error);
      setResponse("Ocorreu um erro ao processar sua solicitação.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}
         style={{justifyContent: hasResponse ? 'space-around' : 'center'}}
    >
      <div className={`${hasResponse ? styles.response_box : styles.greeting}`}>
        {response || 'Olá! Conte-me uma piada.'}
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          value={joke}
          onChange={(e) => setJoke(e.target.value)}
          placeholder="Digite sua piada aqui..."
          className={styles.textarea}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={joke.trim().length === 0 || loading}
          className={`${styles.submit_button} ${loading ? 'disabled' : 'enabled'}`}
        >
          {loading ? (
            <div className={styles.loader}></div>
          ) : (
            <Send size={20}/>
          )}
        </button>
      </form>
    </div>
  );
};
