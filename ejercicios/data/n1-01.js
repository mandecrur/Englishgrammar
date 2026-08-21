window.EXERCISE_DATA = {
  title: "Verb TO BE (am / is / are)",
  level: "Nivel 1 · Beginners",
  subtitle: "El verbo más importante del inglés: significa 'ser' o 'estar'.",
  theory: `
    <p>El verbo <strong>to be</strong> cambia según la persona:</p>
    <table>
      <tr><th>Pronombre</th><th>Forma</th><th>Ejemplo</th></tr>
      <tr><td>I</td><td>am</td><td>I am happy.</td></tr>
      <tr><td>You / We / They</td><td>are</td><td>They are students.</td></tr>
      <tr><td>He / She / It</td><td>is</td><td>She is tall.</td></tr>
    </table>
    <p>En forma negativa se añade <strong>not</strong>: <em>is not (isn't)</em>, <em>are not (aren't)</em>.
    En preguntas, el verbo va antes del sujeto: <strong>Is she happy?</strong></p>
  `,
  questions: [
    { type: "mc", prompt: "She ___ a doctor.", options: ["am", "is", "are"], correct: 1,
      explanation: "Con 'she' (él/ella) siempre usamos 'is'." },
    { type: "mc", prompt: "We ___ from Peru.", options: ["is", "am", "are"], correct: 2,
      explanation: "Con 'we' (nosotros) usamos 'are'." },
    { type: "fill", prompt: "I ___ a teacher.", correct: ["am"],
      explanation: "Con 'I' (yo) siempre se usa 'am'." },
    { type: "fill", prompt: "They ___ happy today.", correct: ["are"],
      explanation: "Con 'they' (ellos) usamos 'are'." },
    { type: "match", pairs: [["I","am"],["He","is"],["You","are"],["It","is"]],
      explanation: "Recuerda: I→am, He/She/It→is, You/We/They→are." }
  ]
};
