window.EXERCISE_DATA = {
  title: "Past Perfect",
  translation: "Pluscuamperfecto — antes de otro momento pasado",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "already", es: "ya" },
    { en: "before", es: "antes" },
    { en: "by the time", es: "para cuando" },
    { en: "just", es: "justo / recién" },
    { en: "leave", es: "irse / salir" },
    { en: "arrive", es: "llegar" },
    { en: "previously", es: "previamente" },
    { en: "realize", es: "darse cuenta" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["already", "ya"], ["before", "antes"], ["by the time", "para cuando"],
          ["just", "justo / recién"], ["leave", "irse / salir"], ["realize", "darse cuenta"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El pasado perfecto se usa para hablar de una acción que ocurrió <strong>antes que otra
    acción en el pasado</strong>. Se forma con <strong>had + participio pasado</strong> (igual para
    todos los pronombres).</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>I had already eaten when she arrived.</td><td>Ya había comido cuando ella llegó.</td></tr>
      <tr><td>Negativa</td><td>She hadn't finished her homework.</td><td>Ella no había terminado su tarea.</td></tr>
      <tr><td>Pregunta</td><td>Had you left before I called?</td><td>¿Te habías ido antes de que llamara?</td></tr>
    </table>
    <p>Es como una "línea de tiempo" con dos momentos en el pasado: el pasado perfecto (had + participio)
    para lo que pasó <strong>primero</strong>, y el pasado simple para lo que pasó <strong>después</strong>.</p>
    <p>Ejemplo: <strong>When I arrived, the movie had already started.</strong>
    (Cuando llegué, la película ya había comenzado — la película empezó primero, yo llegué después.)</p>
    <p>Se usa frecuentemente con <strong>already</strong> (ya), <strong>just</strong> (justo/recién),
    y <strong>before</strong> (antes).</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I ___ already eaten when she arrived.", options: ["had", "have", "was"], correct: 0,
          explanation: "'Had' + participio para la acción anterior." },
        { prompt: "She ___ not finished her homework.", options: ["had", "have", "did"], correct: 0,
          explanation: "'Had not' (hadn't) es la negación." },
        { prompt: "___ you left before I called?", options: ["Had", "Have", "Did"], correct: 0,
          explanation: "'Had' + sujeto para la pregunta." },
        { prompt: "When I arrived, the movie had already ___ (start).", options: ["start", "started", "starting"], correct: 1,
          explanation: "'Had' + participio pasado 'started'." },
        { prompt: "By the time we got there, they ___ left.", options: ["had", "have", "were"], correct: 0,
          explanation: "'By the time' se usa frecuentemente con pasado perfecto." },
        { prompt: "He ___ never seen snow before that trip.", options: ["had", "has", "did"], correct: 0,
          explanation: "'Had' + participio para experiencia anterior a otro momento pasado." },
        { prompt: "We ___ already had dinner when he called.", options: ["had", "have", "were"], correct: 0,
          explanation: "'Had' + participio para acción anterior." },
        { prompt: "I realized I ___ forgotten my keys.", options: ["had", "have", "was"], correct: 0,
          explanation: "'Had' + participio para acción previa al momento de darse cuenta." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con had + el participio correcto.",
      type: "fill",
      questions: [
        { prompt: "I ___ (already/eat) when she arrived.", correct: ["had already eaten"], explanation: "had + participio pasado." },
        { prompt: "She ___ (not/finish) her work.", correct: ["hadn't finished"], explanation: "Negación: hadn't + participio." },
        { prompt: "___ you ___ (leave) before I called?", correct: ["had you left"], explanation: "Pregunta: Had + sujeto + participio." },
        { prompt: "The movie ___ (already/start) when we got there.", correct: ["had already started"], explanation: "had already + participio." },
        { prompt: "He ___ (never/be) to Europe before that year.", correct: ["had never been"], explanation: "had never + participio." },
        { prompt: "We ___ (just/arrive) when it started to rain.", correct: ["had just arrived"], explanation: "had just + participio." },
        { prompt: "I ___ (not/see) that movie before.", correct: ["hadn't seen"], explanation: "Negación: hadn't + participio." },
        { prompt: "By the time she called, I ___ (finish) dinner.", correct: ["had finished"], explanation: "had + participio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "had", "already", "eaten", "when", "she", "arrived", "."], translation: "Ya había comido cuando ella llegó.",
          explanation: "Pasado perfecto para la acción anterior, pasado simple para la posterior." },
        { words: ["The", "movie", "had", "already", "started", "."], translation: "La película ya había empezado.",
          explanation: "Orden: sujeto + had + already + participio." },
        { words: ["Had", "you", "left", "before", "I", "called", "?"], translation: "¿Te habías ido antes de que llamara?",
          explanation: "Pregunta: Had + sujeto + participio." },
        { words: ["She", "hadn't", "finished", "her", "homework", "."], translation: "Ella no había terminado su tarea.",
          explanation: "Negación: hadn't + participio." },
        { words: ["We", "had", "just", "arrived", "when", "it", "rained", "."], translation: "Acabábamos de llegar cuando llovió.",
          explanation: "'Had just' + participio, seguido de pasado simple." },
        { words: ["He", "had", "never", "seen", "snow", "before", "."], translation: "Él nunca había visto nieve antes.",
          explanation: "'Had never' + participio." },
        { words: ["I", "realized", "I", "had", "forgotten", "my", "keys", "."], translation: "Me di cuenta de que había olvidado mis llaves.",
          explanation: "Pasado simple + pasado perfecto para la acción anterior." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["I had already eaten", "Ya había comido"], ["She hadn't finished", "Ella no había terminado"],
            ["Had you left?", "¿Te habías ido?"], ["He had never seen it", "Él nunca lo había visto"],
            ["We had just arrived", "Acabábamos de llegar"], ["by the time", "para cuando"], ["previously", "previamente"],
          ],
          explanation: "El pasado perfecto expresa una acción anterior a otra en el pasado." }
      ]
    }
  ]
};
