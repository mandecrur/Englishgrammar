window.EXERCISE_DATA = {
  title: "Simple Adjectives (big, small, happy, sad)",
  level: "Nivel 1 · Beginners",
  subtitle: "Adjetivos básicos para describir personas y cosas.",
  theory: `
    <p>Los adjetivos describen sustantivos y en inglés <strong>no cambian</strong> según género o número
    (a diferencia del español). Van antes del sustantivo o después del verbo 'to be'.</p>
    <table>
      <tr><td>happy</td><td>feliz</td></tr>
      <tr><td>sad</td><td>triste</td></tr>
      <tr><td>big</td><td>grande</td></tr>
      <tr><td>small</td><td>pequeño</td></tr>
      <tr><td>old</td><td>viejo</td></tr>
      <tr><td>new</td><td>nuevo</td></tr>
    </table>
    <p>Ejemplo: <strong>She is happy.</strong> / <strong>They are happy.</strong> (el adjetivo no cambia)</p>
  `,
  questions: [
    { type: "mc", prompt: "The children are ___.", options: ["happys", "happy", "happies"], correct: 1,
      explanation: "Los adjetivos en inglés no llevan 's' en plural: 'happy' se queda igual." },
    { type: "mc", prompt: "This house is very ___.", options: ["old", "olds", "olded"], correct: 0,
      explanation: "El adjetivo 'old' no cambia de forma." },
    { type: "fill", prompt: "I am ___ (triste) today.", correct: ["sad"],
      explanation: "'Sad' significa 'triste'." },
    { type: "fill", prompt: "My phone is ___ (nuevo).", correct: ["new"],
      explanation: "'New' significa 'nuevo'." },
    { type: "match", pairs: [["big","grande"],["small","pequeño"],["old","viejo"],["new","nuevo"]],
      explanation: "Adjetivos opuestos comunes: big/small, old/new." }
  ]
};
