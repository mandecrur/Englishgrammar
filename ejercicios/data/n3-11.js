window.EXERCISE_DATA = {
  title: "Could (Requests and Past Ability)",
  translation: "Could — peticiones educadas y habilidad pasada",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "request", es: "petición / pedir" },
    { en: "polite", es: "educado / cortés" },
    { en: "childhood", es: "infancia" },
    { en: "ability", es: "habilidad" },
    { en: "borrow", es: "pedir prestado" },
    { en: "pass", es: "pasar (algo)" },
    { en: "possibility", es: "posibilidad" },
    { en: "as a child", es: "de niño/a" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["request", "petición / pedir"], ["polite", "educado / cortés"], ["ability", "habilidad"],
          ["borrow", "pedir prestado"], ["possibility", "posibilidad"], ["as a child", "de niño/a"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>Could</strong> tiene dos usos principales:</p>
    <table>
      <tr><th>Uso</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Petición educada</td><td>Could you help me, please?</td><td>¿Podrías ayudarme, por favor?</td></tr>
      <tr><td>Habilidad en el pasado</td><td>I could swim when I was five.</td><td>Sabía nadar cuando tenía cinco años.</td></tr>
    </table>
    <p>Para peticiones, "could" es más educado/formal que "can": <strong>Could you pass the salt?</strong>
    (¿Podrías pasarme la sal?) suena más cortés que "Can you pass the salt?"</p>
    <p>Para hablar de habilidad general en el pasado se usa <strong>could/couldn't</strong> + verbo base:
    <strong>I could read when I was four.</strong> (Sabía leer cuando tenía cuatro años.) —
    <strong>He couldn't swim as a child.</strong> (Él no sabía nadar de niño.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "___ you help me, please? (petición educada)", options: ["Could", "Do", "Am"], correct: 0,
          explanation: "'Could' se usa para peticiones educadas." },
        { prompt: "I ___ swim when I was five. (habilidad pasada)", options: ["could", "can", "will"], correct: 0,
          explanation: "'Could' expresa habilidad general en el pasado." },
        { prompt: "___ you pass the salt, please?", options: ["Could", "Must", "Should"], correct: 0,
          explanation: "'Could' es la forma educada para pedir favores." },
        { prompt: "She ___ not speak English as a child.", options: ["could", "can", "will"], correct: 0,
          explanation: "'Couldn't' (could not) expresa incapacidad en el pasado." },
        { prompt: "___ I ask you a question?", options: ["Could", "Must", "Should"], correct: 0,
          explanation: "'Could' se usa para pedir permiso educadamente." },
        { prompt: "He ___ run very fast when he was young.", options: ["could", "can", "will"], correct: 0,
          explanation: "'Could' expresa habilidad pasada." },
        { prompt: "___ you open the door, please?", options: ["Could", "Must", "Should"], correct: 0,
          explanation: "'Could' es una petición educada." },
        { prompt: "They ___ not afford the trip last year.", options: ["could", "can", "will"], correct: 0,
          explanation: "'Couldn't' expresa incapacidad en el pasado." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con could o couldn't.",
      type: "fill",
      questions: [
        { prompt: "___ you help me with this? (petición)", correct: ["could"], explanation: "Petición educada con 'could'." },
        { prompt: "I ___ (swim) when I was five.", correct: ["could swim"], explanation: "Habilidad pasada: could + verbo base." },
        { prompt: "She ___ (not/speak) English as a child.", correct: ["couldn't speak"], explanation: "Incapacidad pasada: couldn't." },
        { prompt: "___ you pass me the water, please?", correct: ["could"], explanation: "Petición educada con 'could'." },
        { prompt: "He ___ (read) at age four.", correct: ["could read"], explanation: "Habilidad pasada: could + verbo base." },
        { prompt: "We ___ (not/afford) a car back then.", correct: ["couldn't afford"], explanation: "Incapacidad pasada: couldn't." },
        { prompt: "___ I borrow your pen, please?", correct: ["could"], explanation: "Petición educada con 'could'." },
        { prompt: "They ___ (not/find) the house.", correct: ["couldn't find"], explanation: "Incapacidad pasada: couldn't." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["Could", "you", "help", "me", ",", "please", "?"], translation: "¿Podrías ayudarme, por favor?",
          explanation: "Petición educada con 'could'." },
        { words: ["I", "could", "swim", "when", "I", "was", "five", "."], translation: "Sabía nadar cuando tenía cinco años.",
          explanation: "Habilidad en el pasado con 'could'." },
        { words: ["Could", "you", "pass", "the", "salt", "?"], translation: "¿Podrías pasarme la sal?",
          explanation: "Petición educada." },
        { words: ["She", "couldn't", "speak", "English", "then", "."], translation: "Ella no sabía hablar inglés entonces.",
          explanation: "Incapacidad en el pasado con 'couldn't'." },
        { words: ["Could", "I", "ask", "you", "something", "?"], translation: "¿Podría preguntarte algo?",
          explanation: "Petición educada para pedir permiso." },
        { words: ["He", "could", "run", "very", "fast", "."], translation: "Él podía correr muy rápido.",
          explanation: "Habilidad general en el pasado." },
        { words: ["We", "couldn't", "afford", "the", "trip", "."], translation: "No podíamos costear el viaje.",
          explanation: "Incapacidad en el pasado con 'couldn't'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["Could you help me?", "¿Podrías ayudarme?"], ["I could swim", "Sabía nadar"],
            ["She couldn't speak", "Ella no sabía hablar"], ["Could I ask?", "¿Podría preguntar?"],
            ["as a child", "de niño/a"], ["a polite request", "una petición educada"], ["past ability", "habilidad pasada"],
          ],
          explanation: "'Could' se usa tanto para peticiones educadas como para habilidad pasada." }
      ]
    }
  ]
};
