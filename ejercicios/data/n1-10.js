window.EXERCISE_DATA = {
  title: "This / That / These / Those",
  level: "Nivel 1 · Beginners",
  subtitle: "Demostrativos: cerca/lejos, singular/plural.",
  theory: `
    <table>
      <tr><th></th><th>Cerca</th><th>Lejos</th></tr>
      <tr><td>Singular</td><td><strong>this</strong> (este/esta)</td><td><strong>that</strong> (ese/aquel)</td></tr>
      <tr><td>Plural</td><td><strong>these</strong> (estos/estas)</td><td><strong>those</strong> (esos/aquellos)</td></tr>
    </table>
    <p>Ejemplo: <strong>This is my book</strong> (aquí). <strong>That is your car</strong> (allá).
    <strong>These are my shoes</strong>. <strong>Those are your keys</strong>.</p>
  `,
  questions: [
    { type: "mc", prompt: "___ is my pencil (aquí, cerca).", options: ["This", "That", "These"], correct: 0,
      explanation: "'This' se usa para algo singular y cercano." },
    { type: "mc", prompt: "___ are my friends (allá, lejos, plural).", options: ["This", "That", "Those"], correct: 2,
      explanation: "'Those' se usa para algo plural y lejano." },
    { type: "fill", prompt: "___ shoes are new (estos, cerca, plural).", correct: ["these"],
      explanation: "'These' se usa para plural y cercano." },
    { type: "fill", prompt: "___ car over there is red (ese, lejos, singular).", correct: ["that"],
      explanation: "'That' se usa para singular y lejano." },
    { type: "match", pairs: [["this","este (cerca, singular)"],["that","ese (lejos, singular)"],["these","estos (cerca, plural)"],["those","esos (lejos, plural)"]],
      explanation: "Los cuatro demostrativos combinan distancia (cerca/lejos) y número (singular/plural)." }
  ]
};
