window.EXERCISE_DATA = {
  title: "Simple Past (Regular Verbs)",
  translation: "Pasado simple — verbos regulares (+ed)",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "yesterday", es: "ayer" },
    { en: "last year", es: "el año pasado" },
    { en: "walk", es: "caminar" },
    { en: "clean", es: "limpiar" },
    { en: "watch", es: "ver / mirar" },
    { en: "visit", es: "visitar" },
    { en: "cook", es: "cocinar" },
    { en: "stop", es: "parar / detener" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["walk", "caminar"], ["clean", "limpiar"], ["watch", "ver / mirar"],
          ["visit", "visitar"], ["cook", "cocinar"], ["stop", "parar / detener"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los verbos regulares forman el pasado simple añadiendo <strong>-ed</strong> al verbo base.</p>
    <table>
      <tr><th>Regla</th><th>Ejemplo</th></tr>
      <tr><td>Regla general: +ed</td><td>walk → walked</td></tr>
      <tr><td>Termina en -e: solo +d</td><td>live → lived</td></tr>
      <tr><td>Consonante+y → y cambia a i + ed</td><td>study → studied</td></tr>
      <tr><td>Consonante+vocal+consonante: duplica y +ed</td><td>stop → stopped</td></tr>
    </table>
    <p>El pasado simple es <strong>igual para todos los pronombres</strong> (no cambia con he/she/it).</p>
    <p><strong>Negativo:</strong> didn't + verbo base (sin -ed).<br>
    <strong>Pregunta:</strong> Did + sujeto + verbo base (sin -ed).</p>
    <p>Ejemplo: <strong>I walked to school yesterday.</strong> (Caminé a la escuela ayer.) —
    <strong>She didn't cook dinner.</strong> (Ella no cocinó la cena.) —
    <strong>Did they visit you?</strong> (¿Te visitaron ellos?)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma correcta del pasado.",
      type: "mc",
      questions: [
        { prompt: "I ___ (walk) to school yesterday.", options: ["walk", "walked", "walking"], correct: 1,
          explanation: "Regla general: se añade '-ed'." },
        { prompt: "She ___ (study) all night.", options: ["studyed", "studied", "studies"], correct: 1,
          explanation: "'Study' cambia y→ied (consonante+y)." },
        { prompt: "We ___ (stop) at the light.", options: ["stoped", "stopped", "stopping"], correct: 1,
          explanation: "'Stop' duplica la consonante final: stopped." },
        { prompt: "He ___ not (watch) TV last night.", options: ["do", "did", "does"], correct: 1,
          explanation: "Negación en pasado: 'did not' (didn't) para todos los sujetos." },
        { prompt: "___ you visit your grandma?", options: ["Do", "Did", "Does"], correct: 1,
          explanation: "Pregunta en pasado: 'Did' para todos los sujetos." },
        { prompt: "They ___ (clean) the house.", options: ["clean", "cleaned", "cleaning"], correct: 1,
          explanation: "Regla general: se añade '-ed'." },
        { prompt: "I ___ (live) in Lima for years.", options: ["lived", "liveed", "living"], correct: 0,
          explanation: "'Live' termina en -e, solo se añade '-d'." },
        { prompt: "She ___ (cook) dinner yesterday.", options: ["cook", "cooked", "cooking"], correct: 1,
          explanation: "Regla general: se añade '-ed'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma correcta del pasado.",
      type: "fill",
      questions: [
        { prompt: "I ___ (watch) a movie last night.", correct: ["watched"], explanation: "Regla general: +ed." },
        { prompt: "She ___ (visit) her friends yesterday.", correct: ["visited"], explanation: "Regla general: +ed." },
        { prompt: "We ___ (not/clean) the house.", correct: ["didn't clean"], explanation: "Negación: didn't + verbo base." },
        { prompt: "___ you ___ (cook) dinner?", correct: ["did you cook"], explanation: "Pregunta: Did + sujeto + verbo base." },
        { prompt: "He ___ (stop) the car.", correct: ["stopped"], explanation: "'Stop' duplica la consonante: stopped." },
        { prompt: "They ___ (study) for the exam.", correct: ["studied"], explanation: "'Study' cambia y→ied." },
        { prompt: "I ___ (not/walk) to school today.", correct: ["didn't walk"], explanation: "Negación: didn't + verbo base." },
        { prompt: "She ___ (live) here for two years.", correct: ["lived"], explanation: "'Live' termina en -e, solo +d." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "walked", "to", "school", "yesterday", "."], translation: "Caminé a la escuela ayer.",
          explanation: "Orden: sujeto + verbo-ed + lugar + tiempo." },
        { words: ["She", "studied", "all", "night", "."], translation: "Ella estudió toda la noche.",
          explanation: "Orden: sujeto + verbo-ed + tiempo." },
        { words: ["Did", "they", "visit", "you", "?"], translation: "¿Te visitaron ellos?",
          explanation: "Pregunta: Did + sujeto + verbo base." },
        { words: ["We", "didn't", "watch", "TV", "."], translation: "No vimos televisión.",
          explanation: "Negación: didn't + verbo base." },
        { words: ["He", "cooked", "dinner", "last", "night", "."], translation: "Él cocinó la cena anoche.",
          explanation: "Orden: sujeto + verbo-ed + objeto + tiempo." },
        { words: ["The", "car", "stopped", "suddenly", "."], translation: "El carro se detuvo repentinamente.",
          explanation: "Orden: sujeto + verbo-ed + adverbio." },
        { words: ["I", "lived", "in", "Cusco", "for", "years", "."], translation: "Viví en Cusco durante años.",
          explanation: "Orden: sujeto + verbo-ed + lugar + duración." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada verbo base con su forma correcta en pasado.",
      type: "match",
      questions: [
        { pairs: [
            ["walk", "walked"], ["study", "studied"], ["stop", "stopped"], ["live", "lived"],
            ["clean", "cleaned"], ["visit", "visited"], ["cook", "cooked"],
          ],
          explanation: "Practica las reglas de escritura del pasado con -ed." }
      ]
    }
  ]
};
