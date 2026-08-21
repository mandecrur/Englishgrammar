window.EXERCISE_DATA = {
  title: "Future Progressive",
  translation: "Futuro continuo — acciones en curso en el futuro",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "at this time tomorrow", es: "a esta hora mañana" },
    { en: "this time next week", es: "esta hora la próxima semana" },
    { en: "meanwhile", es: "mientras tanto" },
    { en: "in the meantime", es: "mientras tanto" },
    { en: "at that point", es: "en ese momento" },
    { en: "still", es: "todavía" },
    { en: "flight", es: "vuelo" },
    { en: "landing", es: "aterrizaje" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["at this time tomorrow", "a esta hora mañana"], ["meanwhile", "mientras tanto"],
          ["still", "todavía"], ["flight", "vuelo"], ["landing", "aterrizaje"], ["at that point", "en ese momento"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El futuro continuo describe una acción que <strong>estará en curso</strong> en un momento
    específico del futuro. Se forma con <strong>will be + verbo-ing</strong>.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>I will be sleeping at midnight.</td><td>Estaré durmiendo a medianoche.</td></tr>
      <tr><td>Negativa</td><td>She won't be working tomorrow.</td><td>Ella no estará trabajando mañana.</td></tr>
      <tr><td>Pregunta</td><td>Will you be studying tonight?</td><td>¿Estarás estudiando esta noche?</td></tr>
    </table>
    <p>Se usa frecuentemente con expresiones de tiempo futuro específicas: <strong>at this time tomorrow</strong>
    (a esta hora mañana), <strong>this time next week</strong> (esta hora la próxima semana).</p>
    <p>Ejemplo: <strong>This time next week, I will be traveling to Cusco.</strong>
    (La próxima semana a esta hora, estaré viajando a Cusco.)</p>
    <p>También se usa para preguntar educadamente sobre los planes de alguien, sin sonar demandante:
    <strong>Will you be using the car tonight?</strong> (¿Vas a estar usando el carro esta noche?)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I will be ___ (sleep) at midnight.", options: ["sleep", "slept", "sleeping"], correct: 2,
          explanation: "Se usa el verbo en -ing después de 'will be'." },
        { prompt: "She ___ be working tomorrow.", options: ["will", "is", "does"], correct: 0,
          explanation: "'Will be' + verbo-ing forma el futuro continuo." },
        { prompt: "___ you be studying tonight?", options: ["Will", "Do", "Are"], correct: 0,
          explanation: "Pregunta: Will + sujeto + be + verbo-ing." },
        { prompt: "We will be ___ (travel) this time next week.", options: ["travel", "traveled", "traveling"], correct: 2,
          explanation: "Se usa el verbo en -ing después de 'will be'." },
        { prompt: "He won't be ___ (work) at that time.", options: ["work", "worked", "working"], correct: 2,
          explanation: "Negación: won't be + verbo-ing." },
        { prompt: "They will be ___ (fly) over the ocean.", options: ["fly", "flew", "flying"], correct: 2,
          explanation: "Se usa el verbo en -ing después de 'will be'." },
        { prompt: "___ she be waiting for us?", options: ["Will", "Does", "Is"], correct: 0,
          explanation: "Pregunta: Will + sujeto + be + verbo-ing." },
        { prompt: "I ___ not be using the car tonight.", options: ["will", "am", "do"], correct: 0,
          explanation: "'Will not' (won't) es la negación." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma correcta del futuro continuo.",
      type: "fill",
      questions: [
        { prompt: "I ___ (sleep) at midnight tonight.", correct: ["will be sleeping"], explanation: "will be + verbo-ing." },
        { prompt: "She ___ (work) at this time tomorrow.", correct: ["will be working"], explanation: "will be + verbo-ing." },
        { prompt: "We ___ (not/use) the car tonight.", correct: ["won't be using"], explanation: "Negación: won't be + verbo-ing." },
        { prompt: "___ you ___ (study) at 8 PM?", correct: ["will you be studying"], explanation: "Pregunta: Will + sujeto + be + verbo-ing." },
        { prompt: "They ___ (travel) this time next week.", correct: ["will be traveling"], explanation: "will be + verbo-ing." },
        { prompt: "He ___ (not/sleep) when we arrive.", correct: ["won't be sleeping"], explanation: "Negación: won't be + verbo-ing." },
        { prompt: "I ___ (wait) for you at the airport.", correct: ["will be waiting"], explanation: "will be + verbo-ing." },
        { prompt: "___ she ___ (drive) or flying?", correct: ["will she be driving"], explanation: "Pregunta: Will + sujeto + be + verbo-ing." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "will", "be", "sleeping", "at", "midnight", "."], translation: "Estaré durmiendo a medianoche.",
          explanation: "Orden: sujeto + will be + verbo-ing + tiempo." },
        { words: ["She", "will", "be", "working", "tomorrow", "."], translation: "Ella estará trabajando mañana.",
          explanation: "Orden: sujeto + will be + verbo-ing + tiempo." },
        { words: ["Will", "you", "be", "studying", "tonight", "?"], translation: "¿Estarás estudiando esta noche?",
          explanation: "Pregunta: Will + sujeto + be + verbo-ing." },
        { words: ["We", "won't", "be", "using", "the", "car", "."], translation: "No estaremos usando el carro.",
          explanation: "Negación: won't be + verbo-ing." },
        { words: ["This", "time", "next", "week", ",", "I", "will", "be", "traveling", "."], translation: "La próxima semana a esta hora, estaré viajando.",
          explanation: "Expresión temporal + will be + verbo-ing." },
        { words: ["He", "will", "be", "flying", "over", "the", "ocean", "."], translation: "Él estará volando sobre el océano.",
          explanation: "Orden: sujeto + will be + verbo-ing + lugar." },
        { words: ["They", "will", "be", "waiting", "for", "us", "."], translation: "Ellos estarán esperándonos.",
          explanation: "Orden: sujeto + will be + verbo-ing + objeto." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["I will be sleeping", "Estaré durmiendo"], ["She will be working", "Ella estará trabajando"],
            ["Will you be studying?", "¿Estarás estudiando?"], ["We won't be using it", "No lo estaremos usando"],
            ["at this time tomorrow", "a esta hora mañana"], ["this time next week", "esta hora la próxima semana"], ["still", "todavía"],
          ],
          explanation: "El futuro continuo describe acciones en curso en un momento futuro específico." }
      ]
    }
  ]
};
