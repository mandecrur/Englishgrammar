window.EXERCISE_DATA = {
  title: "Verb TO HAVE (have / has)",
  level: "Nivel 1 · Beginners",
  subtitle: "El verbo 'tener' en presente.",
  theory: `
    <p><strong>Have</strong> se usa con I, you, we, they. <strong>Has</strong> se usa con he, she, it.</p>
    <table>
      <tr><th>Pronombre</th><th>Forma</th><th>Ejemplo</th></tr>
      <tr><td>I / You / We / They</td><td>have</td><td>I have a car.</td></tr>
      <tr><td>He / She / It</td><td>has</td><td>He has a car.</td></tr>
    </table>
    <p>Negativo: <strong>don't have</strong> / <strong>doesn't have</strong>.
    Pregunta: <strong>Do you have...?</strong> / <strong>Does she have...?</strong></p>
  `,
  questions: [
    { type: "mc", prompt: "He ___ a new phone.", options: ["have", "has", "having"], correct: 1,
      explanation: "Con 'he' se usa 'has'." },
    { type: "mc", prompt: "I ___ two brothers.", options: ["has", "have", "is"], correct: 1,
      explanation: "Con 'I' se usa 'have'." },
    { type: "fill", prompt: "They ___ a big house.", correct: ["have"],
      explanation: "Con 'they' se usa 'have'." },
    { type: "fill", prompt: "My sister ___ a cat.", correct: ["has"],
      explanation: "'My sister' equivale a 'she', por lo tanto usamos 'has'." },
    { type: "match", pairs: [["I","have"],["She","has"],["We","have"],["It","has"]],
      explanation: "Have con I/you/we/they. Has con he/she/it." }
  ]
};
