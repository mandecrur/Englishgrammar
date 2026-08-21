window.EXERCISE_DATA = {
  title: "Present Progressive (is/are + -ing)",
  translation: "Presente continuo — acciones en curso",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "right now", es: "ahora mismo" },
    { en: "at the moment", es: "en este momento" },
    { en: "swim", es: "nadar" },
    { en: "write", es: "escribir" },
    { en: "run", es: "correr" },
    { en: "sit", es: "sentarse" },
    { en: "sleep", es: "dormir" },
    { en: "listen", es: "escuchar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["right now", "ahora mismo"], ["swim", "nadar"], ["write", "escribir"],
          ["run", "correr"], ["sleep", "dormir"], ["listen", "escuchar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El presente continuo se usa para acciones que están pasando <strong>en este momento</strong>.
    Se forma con el verbo <strong>to be</strong> + verbo + <strong>-ing</strong>.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>I am studying.</td><td>Estoy estudiando.</td></tr>
      <tr><td>Negativa</td><td>She isn't sleeping.</td><td>Ella no está durmiendo.</td></tr>
      <tr><td>Pregunta</td><td>Are they working?</td><td>¿Están trabajando ellos?</td></tr>
    </table>
    <p><strong>Reglas para escribir el -ing:</strong></p>
    <table>
      <tr><td>Regla general: +ing</td><td>read → reading</td></tr>
      <tr><td>Termina en -e muda: se quita la e</td><td>write → writing</td></tr>
      <tr><td>Consonante+vocal+consonante: se duplica la última</td><td>run → running</td></tr>
    </table>
    <p>Se usa frecuentemente con expresiones como <strong>right now</strong> (ahora mismo) y
    <strong>at the moment</strong> (en este momento).</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I ___ studying right now.", options: ["am", "is", "are"], correct: 0,
          explanation: "Con 'I' se usa 'am'." },
        { prompt: "She ___ sleeping.", options: ["am", "is", "are"], correct: 1,
          explanation: "Con 'she' se usa 'is'." },
        { prompt: "They ___ playing soccer.", options: ["am", "is", "are"], correct: 2,
          explanation: "Con 'they' se usa 'are'." },
        { prompt: "He is ___ (write) a letter.", options: ["write", "writing", "writes"], correct: 1,
          explanation: "'Write' pierde la 'e' antes de añadir '-ing': writing." },
        { prompt: "We are ___ (run) in the park.", options: ["runing", "runing", "running"], correct: 2,
          explanation: "'Run' duplica la última consonante: running." },
        { prompt: "She isn't ___ (listen) to music.", options: ["listen", "listening", "listens"], correct: 1,
          explanation: "Se añade '-ing' al verbo base: listening." },
        { prompt: "___ you working at the moment?", options: ["Do", "Are", "Is"], correct: 1,
          explanation: "Con 'you' en preguntas se usa 'Are'." },
        { prompt: "It ___ raining right now.", options: ["am", "is", "are"], correct: 1,
          explanation: "Con 'it' se usa 'is'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma correcta del presente continuo.",
      type: "fill",
      questions: [
        { prompt: "I ___ (study) right now.", correct: ["am studying"], explanation: "am + verbo-ing." },
        { prompt: "She ___ (swim) at the moment.", correct: ["is swimming"], explanation: "'Swim' duplica la consonante: swimming." },
        { prompt: "We ___ (not/sleep) right now.", correct: ["aren't sleeping", "are not sleeping"], explanation: "Negación: aren't + verbo-ing." },
        { prompt: "___ they ___ (eat) dinner?", correct: ["are they eating"], explanation: "Pregunta: Are + sujeto + verbo-ing." },
        { prompt: "He ___ (sit) in the classroom.", correct: ["is sitting"], explanation: "'Sit' duplica la consonante: sitting." },
        { prompt: "I ___ (not/watch) TV right now.", correct: ["am not watching"], explanation: "Negación: am not + verbo-ing." },
        { prompt: "She ___ (write) an email.", correct: ["is writing"], explanation: "'Write' pierde la e: writing." },
        { prompt: "___ he ___ (listen) to music?", correct: ["is he listening"], explanation: "Pregunta: Is + sujeto + verbo-ing." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "am", "studying", "right", "now", "."], translation: "Estoy estudiando ahora mismo.",
          explanation: "Orden: sujeto + am/is/are + verbo-ing." },
        { words: ["She", "is", "sleeping", "."], translation: "Ella está durmiendo.",
          explanation: "Orden: sujeto + is + verbo-ing." },
        { words: ["Are", "they", "working", "today", "?"], translation: "¿Están trabajando hoy?",
          explanation: "Pregunta: Are + sujeto + verbo-ing." },
        { words: ["We", "aren't", "watching", "TV", "."], translation: "No estamos viendo televisión.",
          explanation: "Negación: aren't antes del verbo-ing." },
        { words: ["He", "is", "writing", "a", "letter", "."], translation: "Él está escribiendo una carta.",
          explanation: "Orden: sujeto + is + verbo-ing + objeto." },
        { words: ["What", "are", "you", "doing", "?"], translation: "¿Qué estás haciendo?",
          explanation: "Pregunta con 'what' + are + sujeto + verbo-ing." },
        { words: ["The", "children", "are", "playing", "outside", "."], translation: "Los niños están jugando afuera.",
          explanation: "Orden: sujeto + are + verbo-ing + lugar." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada verbo base con su forma correcta en -ing.",
      type: "match",
      questions: [
        { pairs: [
            ["run", "running"], ["write", "writing"], ["sit", "sitting"], ["swim", "swimming"],
            ["read", "reading"], ["listen", "listening"], ["study", "studying"],
          ],
          explanation: "Practica las reglas de escritura del -ing." }
      ]
    }
  ]
};
