window.EXERCISE_DATA = {
  title: "Simple Present: I / you / we / they",
  level: "Nivel 1 · Beginners",
  subtitle: "Presente simple con estos pronombres (el verbo no cambia).",
  theory: `
    <p>Con <strong>I, you, we, they</strong>, el verbo en presente simple se usa en su forma base
    (sin cambios): <strong>I work</strong>, <strong>you play</strong>, <strong>we live</strong>,
    <strong>they study</strong>.</p>
    <p>Negativo: <strong>don't</strong> + verbo base. Ejemplo: <strong>I don't work</strong>.</p>
    <p>Pregunta: <strong>Do</strong> + sujeto + verbo base. Ejemplo: <strong>Do you work?</strong></p>
  `,
  questions: [
    { type: "mc", prompt: "I ___ English every day.", options: ["study", "studies", "studying"], correct: 0,
      explanation: "Con 'I' se usa el verbo en su forma base: 'study'." },
    { type: "mc", prompt: "They ___ in Lima.", options: ["lives", "live", "living"], correct: 1,
      explanation: "Con 'they' se usa la forma base del verbo: 'live'." },
    { type: "fill", prompt: "We ___ (not/like) coffee.", correct: ["don't like"],
      explanation: "La negación se forma con 'don't' + verbo base." },
    { type: "fill", prompt: "___ you speak English? (pregunta)", correct: ["do"],
      explanation: "Las preguntas en presente simple con estos pronombres inician con 'Do'." },
    { type: "match", pairs: [["I work","Yo trabajo"],["You play","Tú juegas"],["We live","Nosotros vivimos"],["They study","Ellos estudian"]],
      explanation: "Con estos pronombres, el verbo se mantiene en su forma base." }
  ]
};
