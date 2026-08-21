window.EXERCISE_DATA = {
  title: "Simple Present: he / she / it (+s)",
  level: "Nivel 1 · Beginners",
  subtitle: "Con he/she/it, el verbo añade -s o -es.",
  theory: `
    <p>Con <strong>he, she, it</strong>, se añade <strong>-s</strong> al verbo:
    <strong>he works</strong>, <strong>she plays</strong>.</p>
    <p>Si el verbo termina en -s, -sh, -ch, -x, -o, se añade <strong>-es</strong>:
    <strong>she watches</strong>, <strong>he goes</strong>.</p>
    <p>Si termina en consonante + y, la y cambia a i y se añade -es: <strong>study → studies</strong>.</p>
    <p>Negativo: <strong>doesn't</strong> + verbo base. Pregunta: <strong>Does</strong> + sujeto + verbo base.</p>
  `,
  questions: [
    { type: "mc", prompt: "She ___ TV every night.", options: ["watch", "watches", "watching"], correct: 1,
      explanation: "'Watch' termina en -ch, así que se añade '-es': watches." },
    { type: "mc", prompt: "He ___ to school by bus.", options: ["go", "goes", "going"], correct: 1,
      explanation: "'Go' termina en -o, así que se añade '-es': goes." },
    { type: "fill", prompt: "It ___ (rain) a lot here.", correct: ["rains"],
      explanation: "Con 'it' se añade '-s' al verbo base: rains." },
    { type: "fill", prompt: "She ___ (not/like) spicy food.", correct: ["doesn't like"],
      explanation: "La negación con he/she/it se forma con 'doesn't' + verbo base." },
    { type: "match", pairs: [["play","plays"],["study","studies"],["go","goes"],["watch","watches"]],
      explanation: "Reglas: -s regular, -es tras sibilantes, y→ies tras consonante." }
  ]
};
