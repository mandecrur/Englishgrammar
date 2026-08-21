window.EXERCISE_DATA = {
  title: "Question Words (what, who, where, how many)",
  level: "Nivel 1 · Beginners",
  subtitle: "Palabras para hacer preguntas.",
  theory: `
    <table>
      <tr><td><strong>what</strong></td><td>qué</td></tr>
      <tr><td><strong>who</strong></td><td>quién</td></tr>
      <tr><td><strong>where</strong></td><td>dónde</td></tr>
      <tr><td><strong>when</strong></td><td>cuándo</td></tr>
      <tr><td><strong>why</strong></td><td>por qué</td></tr>
      <tr><td><strong>how many</strong></td><td>cuántos (contables)</td></tr>
    </table>
    <p>Estas palabras van al inicio de la pregunta: <strong>Where is my phone?</strong></p>
  `,
  questions: [
    { type: "mc", prompt: "___ is your teacher? (persona)", options: ["What", "Who", "Where"], correct: 1,
      explanation: "'Who' se usa para preguntar por personas." },
    { type: "mc", prompt: "___ do you live? (lugar)", options: ["When", "Where", "Why"], correct: 1,
      explanation: "'Where' se usa para preguntar por lugares." },
    { type: "fill", prompt: "___ is your name? (qué)", correct: ["what"],
      explanation: "'What' se usa para pedir información general, como el nombre." },
    { type: "fill", prompt: "___ books do you have? (cuántos)", correct: ["how many"],
      explanation: "'How many' se usa con sustantivos contables en plural." },
    { type: "match", pairs: [["what","qué"],["who","quién"],["where","dónde"],["why","por qué"]],
      explanation: "Palabras interrogativas básicas del inglés." }
  ]
};
