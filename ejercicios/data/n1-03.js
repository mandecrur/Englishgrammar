window.EXERCISE_DATA = {
  title: "Basic Greetings and Introductions",
  level: "Nivel 1 · Beginners",
  subtitle: "Saludos y presentaciones básicas.",
  theory: `
    <p>Frases comunes para saludar y presentarse:</p>
    <table>
      <tr><td>Hello / Hi</td><td>Hola</td></tr>
      <tr><td>Good morning / afternoon / evening</td><td>Buenos días / tardes / noches</td></tr>
      <tr><td>What's your name?</td><td>¿Cómo te llamas?</td></tr>
      <tr><td>My name is...</td><td>Me llamo...</td></tr>
      <tr><td>Nice to meet you</td><td>Mucho gusto</td></tr>
      <tr><td>How are you?</td><td>¿Cómo estás?</td></tr>
    </table>
  `,
  questions: [
    { type: "mc", prompt: "___ your name?", options: ["What's", "Who's", "Where's"], correct: 0,
      explanation: "'What's your name?' pregunta por el nombre de alguien." },
    { type: "mc", prompt: "Nice to ___ you.", options: ["meet", "know", "see"], correct: 0,
      explanation: "'Nice to meet you' es la frase estándar al conocer a alguien." },
    { type: "fill", prompt: "My name ___ Carlos.", correct: ["is"],
      explanation: "Se usa 'is' porque 'name' funciona como 'it/he/she'." },
    { type: "fill", prompt: "Good ___, everyone! (por la mañana)", correct: ["morning"],
      explanation: "'Good morning' se usa por la mañana." },
    { type: "match", pairs: [["Hi","Hola"],["How are you?","¿Cómo estás?"],["Nice to meet you","Mucho gusto"],["Goodbye","Adiós"]],
      explanation: "Estas son expresiones fijas que conviene memorizar tal cual." }
  ]
};
