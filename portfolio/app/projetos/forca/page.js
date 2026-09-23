 "use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const WORDS = [
  "JAVASCRIPT", "REACT", "NEXTJS", "PYTHON", "ALGORITMO",
  "GITHUB", "PROGRAMACAO", "COMPUTADOR", "SOFTWARE", "HARDWARE",
  "NETWORK", "SERVIDOR", "DATABASE", "INTERFACE", "SISTEMA",
  "DESENVOLVIMENTO", "TECNOLOGIA", "CODIGO", "COMPONENTE", "FRAMEWORK",
  "Raspberry", "LINUX", "TERMINAL", "PROJETO", "ESTRUTURA",
  "GRAFO", "RECURSAO", "MEMORIA", "INTERNET", "SEGURANCA",
  "DEPURACAO", "VARIAVEL", "FUNCAO", "CLASSE", "OBJETO"
].map((word) => word.toUpperCase());

const MAX_ERRORS = 6;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function randomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export default function ForcaPage() {
  const [word, setWord] = useState(randomWord);
  const [used, setUsed] = useState([]);
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState(0);
  const [result, setResult] = useState(null);

  const reset = useCallback(() => {
    setWord(randomWord());
    setUsed([]);
    setInput("");
    setErrors(0);
    setResult(null);
  }, []);

  const submitLetter = useCallback((rawLetter) => {
    if (result) return;

    const letter = rawLetter.trim().toUpperCase();
    if (!/^[A-Z]$/.test(letter) || used.includes(letter)) return;

    const nextUsed = [...used, letter];
    setUsed(nextUsed);
    setInput("");

    const won = [...new Set(word.split(""))].every((char) => nextUsed.includes(char));

    if (won) {
      setResult("win");
      return;
    }

    if (!word.includes(letter)) {
      const nextErrors = errors + 1;
      setErrors(nextErrors);
      if (nextErrors >= MAX_ERRORS) setResult("lose");
    }
  }, [errors, result, used, word]);

  useEffect(() => {
    const handleKey = (event) => {
      if (/^[a-zA-Z]$/.test(event.key)) submitLetter(event.key);
      if (event.key === "Enter") submitLetter(input);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [input, submitLetter]);

  const revealed = word.split("").map((letter) =>
    used.includes(letter) ? letter : "_"
  );

  const correct = used.filter((letter) => word.includes(letter));
  const wrong = used.filter((letter) => !word.includes(letter));

  return (
    <main className="hangman-page">
      <nav className="navbar">
        <Link className="brand" href="/">
          <span>SYSTEM_01</span> // MATEUS.BUILDING
        </Link>
        <Link className="back-link" href="/#projetos">← BACK TO HOME</Link>
        <div className="nav-status"><span className="status-dot" /> GAME_SESSION</div>
      </nav>

      <section className="hangman-shell">
        <div className="hero-topline">
          <span>● PROJECT_01 // INTERACTIVE_MODULE</span>
          <span>STATUS: {result ? "SESSION_ENDED" : "RUNNING"}</span>
        </div>

        <div className="game-heading">
          <div>
            <p className="eyebrow">PERSONAL PROJECT / REACT</p>
            <h1>JOGO DA <span>FORCA.</span></h1>
          </div>
          <div className="game-counter">
            ERRORS<br />
            <strong>{String(errors).padStart(2, "0")} / {String(MAX_ERRORS).padStart(2, "0")}</strong>
          </div>
        </div>

        <div className="game-grid">
          <section className="game-board panel">
            <div className="card-code">WORD_BUFFER // ENCRYPTED</div>
            <div className="word-display" aria-label="Palavra oculta">
              {revealed.map((char, index) => <span key={`${char}-${index}`}>{char}</span>)}
            </div>

            <div className="input-area">
              <label htmlFor="letter">DIGITE A LETRA</label>
              <div className="letter-form">
                <input
                  id="letter"
                  maxLength={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value.replace(/[^a-zA-Z]/g, "").slice(0, 1))}
                  disabled={!!result}
                  autoComplete="off"
                  placeholder="_"
                />
                <button onClick={() => submitLetter(input)} disabled={!!result || !input}>
                  ENVIAR →
                </button>
              </div>
            </div>

            <div className="keyboard">
              {ALPHABET.map((letter) => {
                const isUsed = used.includes(letter);
                const isCorrect = isUsed && word.includes(letter);
                return (
                  <button
                    key={letter}
                    onClick={() => submitLetter(letter)}
                    disabled={isUsed || !!result}
                    className={isCorrect ? "correct" : isUsed ? "wrong" : ""}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </section>

          <aside className="game-sidebar">
            <div className="panel attempts-panel">
              <div className="panel-title">
                <strong>REGISTRO_DE_TENTATIVAS</strong>
                <small>[{String(used.length).padStart(2, "0")}]</small>
              </div>

              <div className="attempt-section">
                <span className="log-label">CORRETAS</span>
                <div className="attempt-chips">
                  {correct.length ? correct.map((l) => <b className="chip correct" key={l}>{l}</b>) : <small>—</small>}
                </div>
              </div>

              <div className="attempt-section">
                <span className="log-label">INCORRETAS</span>
                <div className="attempt-chips">
                  {wrong.length ? wrong.map((l) => <b className="chip wrong" key={l}>{l}</b>) : <small>—</small>}
                </div>
              </div>
            </div>

            <div className={`result-panel panel ${result || ""}`}>
              {!result ? (
                <>
                  <span>MISSION_STATUS</span>
                  <strong>ADIVINHE A PALAVRA</strong>
                  <small>Use o teclado ou digite uma letra.</small>
                </>
              ) : result === "win" ? (
                <>
                  <span>MISSION_STATUS</span>
                  <strong>✓ ACCESS GRANTED</strong>
                  <small>Parabéns! Você descobriu a palavra.</small>
                  <em>{word}</em>
                </>
              ) : (
                <>
                  <span>MISSION_STATUS</span>
                  <strong>× ACCESS DENIED</strong>
                  <small>As tentativas acabaram. A palavra era:</small>
                  <em>{word}</em>
                </>
              )}
            </div>

            <button className="restart-button" onClick={reset}>↻ REINICIAR SISTEMA</button>
          </aside>
        </div>
      </section>
    </main>
  );
}