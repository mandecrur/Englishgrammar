window.EXERCISE_DATA = {
  title: "Present Perfect with For / Since",
  translation: "Presente perfecto — duración con for/since",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "for", es: "durante / por (duración)" },
    { en: "since", es: "desde (punto de inicio)" },
    { en: "how long", es: "cuánto tiempo" },
    { en: "years", es: "años" },
    { en: "married", es: "casado/a" },
    { en: "know each other", es: "conocerse (mutuamente)" },
    { en: "childhood", es: "infancia" },
    { en: "still", es: "todavía" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["for", "durante / por"], ["since", "desde"], ["how long", "cuánto tiempo"],
          ["married", "casado/a"], ["childhood", "infancia"], ["still", "todavía"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>For</strong> y <strong>since</strong> se usan con presente perfecto para expresar
    duración de una acción que empezó en el pasado y <strong>continúa hasta ahora</strong>.</p>
    <table>
      <tr><th>Palabra</th><th>Uso</th><th>Ejemplo</th></tr>
      <tr><td><strong>for</strong></td><td>duración (cuánto tiempo)</td><td>for three years, for a long time</td></tr>
      <tr><td><strong>since</strong></td><td>punto de inicio (desde cuándo)</td><td>since 2020, since Monday</td></tr>
    </table>
    <p>Ejemplos: <strong>I have lived here for five years.</strong> (He vivido aquí durante cinco años.)<br>
    <strong>She has worked here since 2019.</strong> (Ella ha trabajado aquí desde 2019.)</p>
    <p>Para preguntar sobre duración se usa <strong>How long...?</strong>:
    <strong>How long have you known him?</strong> (¿Cuánto tiempo hace que lo conoces?)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige entre for o since.",
      type: "mc",
      questions: [
        { prompt: "I have lived here ___ five years.", options: ["for", "since"], correct: 0,
          explanation: "'For' se usa con periodos de duración: cinco años." },
        { prompt: "She has worked here ___ 2019.", options: ["for", "since"], correct: 1,
          explanation: "'Since' se usa con un punto de inicio específico: 2019." },
        { prompt: "We have been friends ___ childhood.", options: ["for", "since"], correct: 1,
          explanation: "'Since' se usa con un punto de inicio: la infancia." },
        { prompt: "They have been married ___ ten years.", options: ["for", "since"], correct: 0,
          explanation: "'For' se usa con periodos de duración: diez años." },
        { prompt: "I haven't seen him ___ Monday.", options: ["for", "since"], correct: 1,
          explanation: "'Since' se usa con un punto de inicio: el lunes." },
        { prompt: "He has studied English ___ two years.", options: ["for", "since"], correct: 0,
          explanation: "'For' se usa con periodos de duración." },
        { prompt: "___ long have you known her?", options: ["How", "What", "When"], correct: 0,
          explanation: "'How long' pregunta por duración." },
        { prompt: "She has lived abroad ___ a long time.", options: ["for", "since"], correct: 0,
          explanation: "'For' se usa con periodos de duración." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con for o since.",
      type: "fill",
      questions: [
        { prompt: "I have known him ___ 2015.", correct: ["since"], explanation: "Punto de inicio: se usa 'since'." },
        { prompt: "We have lived here ___ ten years.", correct: ["for"], explanation: "Duración: se usa 'for'." },
        { prompt: "She has worked there ___ last year.", correct: ["since"], explanation: "Punto de inicio: se usa 'since'." },
        { prompt: "They have been married ___ a long time.", correct: ["for"], explanation: "Duración: se usa 'for'." },
        { prompt: "I haven't traveled ___ the pandemic.", correct: ["since"], explanation: "Punto de inicio: se usa 'since'." },
        { prompt: "He has studied here ___ three months.", correct: ["for"], explanation: "Duración: se usa 'for'." },
        { prompt: "We have been friends ___ high school.", correct: ["since"], explanation: "Punto de inicio: se usa 'since'." },
        { prompt: "She has lived abroad ___ many years.", correct: ["for"], explanation: "Duración: se usa 'for'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "have", "lived", "here", "for", "five", "years", "."], translation: "He vivido aquí durante cinco años.",
          explanation: "Orden: sujeto + have + participio + lugar + for + duración." },
        { words: ["She", "has", "worked", "here", "since", "2019", "."], translation: "Ella ha trabajado aquí desde 2019.",
          explanation: "Orden: sujeto + has + participio + lugar + since + año." },
        { words: ["How", "long", "have", "you", "known", "him", "?"], translation: "¿Cuánto tiempo hace que lo conoces?",
          explanation: "Pregunta: How long + have + sujeto + participio." },
        { words: ["We", "have", "been", "friends", "since", "childhood", "."], translation: "Hemos sido amigos desde la infancia.",
          explanation: "Orden: sujeto + have been + sustantivo + since + tiempo." },
        { words: ["They", "have", "been", "married", "for", "ten", "years", "."], translation: "Ellos han estado casados durante diez años.",
          explanation: "Orden: sujeto + have been + adjetivo + for + duración." },
        { words: ["I", "haven't", "seen", "him", "since", "Monday", "."], translation: "No lo he visto desde el lunes.",
          explanation: "Negación con 'since' + punto de inicio." },
        { words: ["He", "has", "studied", "English", "for", "two", "years", "."], translation: "Él ha estudiado inglés durante dos años.",
          explanation: "Orden: sujeto + has + participio + objeto + for + duración." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada expresión con for o since según corresponda.",
      type: "match",
      questions: [
        { pairs: [
            ["five years", "for"], ["2020", "since"], ["a long time", "for"], ["Monday", "since"],
            ["childhood", "since"], ["three months", "for"], ["last year", "since"],
          ],
          explanation: "'For' con duración, 'since' con punto de inicio." }
      ]
    }
  ]
};
