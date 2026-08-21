window.EXERCISE_DATA = {
  title: "Verbs Followed by Gerund",
  translation: "Verbos seguidos de gerundio",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "enjoy", es: "disfrutar" },
    { en: "avoid", es: "evitar" },
    { en: "suggest", es: "sugerir" },
    { en: "consider", es: "considerar" },
    { en: "quit", es: "dejar (de hacer algo)" },
    { en: "keep on", es: "seguir haciendo" },
    { en: "mind", es: "importar (molestia)" },
    { en: "postpone", es: "posponer" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["enjoy", "disfrutar"], ["avoid", "evitar"], ["suggest", "sugerir"],
          ["consider", "considerar"], ["quit", "dejar de hacer algo"], ["postpone", "posponer"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Algunos verbos en inglés siempre van seguidos de <strong>gerundio</strong> (verbo + -ing),
    nunca de infinitivo. Estos verbos deben memorizarse.</p>
    <table>
      <tr><th>Verbo</th><th>Traducción</th><th>Ejemplo</th></tr>
      <tr><td>enjoy</td><td>disfrutar</td><td>I enjoy swimming.</td></tr>
      <tr><td>avoid</td><td>evitar</td><td>She avoids eating sugar.</td></tr>
      <tr><td>suggest</td><td>sugerir</td><td>He suggested going out.</td></tr>
      <tr><td>consider</td><td>considerar</td><td>We considered moving.</td></tr>
      <tr><td>finish</td><td>terminar</td><td>I finished studying.</td></tr>
      <tr><td>quit</td><td>dejar de hacer algo</td><td>She quit smoking.</td></tr>
      <tr><td>mind</td><td>importar (molestia)</td><td>Do you mind waiting?</td></tr>
      <tr><td>practice</td><td>practicar</td><td>He practices speaking English.</td></tr>
      <tr><td>postpone</td><td>posponer</td><td>They postponed leaving.</td></tr>
      <tr><td>imagine</td><td>imaginar</td><td>I can't imagine living there.</td></tr>
    </table>
    <p>Ejemplo: <strong>I enjoy reading books.</strong> (Disfruto leer libros — no "enjoy to read".)</p>
    <p>Un truco para recordar algunos de estos verbos: <strong>avoid, consider, enjoy, finish,
    mind, quit, suggest, practice, postpone, imagine</strong> son de los más comunes que
    <strong>siempre</strong> requieren gerundio.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma correcta del verbo.",
      type: "mc",
      questions: [
        { prompt: "I enjoy ___ (swim).", options: ["swim", "swimming", "to swim"], correct: 1,
          explanation: "'Enjoy' siempre va seguido de gerundio." },
        { prompt: "She avoids ___ (eat) sugar.", options: ["eat", "eating", "to eat"], correct: 1,
          explanation: "'Avoid' siempre va seguido de gerundio." },
        { prompt: "He suggested ___ (go) out.", options: ["go", "going", "to go"], correct: 1,
          explanation: "'Suggest' siempre va seguido de gerundio." },
        { prompt: "We considered ___ (move) to Lima.", options: ["move", "moving", "to move"], correct: 1,
          explanation: "'Consider' siempre va seguido de gerundio." },
        { prompt: "I finished ___ (study) at midnight.", options: ["study", "studying", "to study"], correct: 1,
          explanation: "'Finish' siempre va seguido de gerundio." },
        { prompt: "She quit ___ (smoke) last year.", options: ["smoke", "smoking", "to smoke"], correct: 1,
          explanation: "'Quit' siempre va seguido de gerundio." },
        { prompt: "Do you mind ___ (wait) a moment?", options: ["wait", "waiting", "to wait"], correct: 1,
          explanation: "'Mind' siempre va seguido de gerundio." },
        { prompt: "They postponed ___ (leave).", options: ["leave", "leaving", "to leave"], correct: 1,
          explanation: "'Postpone' siempre va seguido de gerundio." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con el gerundio del verbo entre paréntesis.",
      type: "fill",
      questions: [
        { prompt: "I enjoy ___ (read) novels.", correct: ["reading"], explanation: "enjoy + gerundio." },
        { prompt: "She avoids ___ (drive) at night.", correct: ["driving"], explanation: "avoid + gerundio." },
        { prompt: "He suggested ___ (try) the new restaurant.", correct: ["trying"], explanation: "suggest + gerundio." },
        { prompt: "We considered ___ (buy) a new car.", correct: ["buying"], explanation: "consider + gerundio." },
        { prompt: "I finished ___ (clean) the house.", correct: ["cleaning"], explanation: "finish + gerundio." },
        { prompt: "She quit ___ (eat) meat.", correct: ["eating"], explanation: "quit + gerundio." },
        { prompt: "Do you mind ___ (close) the window?", correct: ["closing"], explanation: "mind + gerundio." },
        { prompt: "They postponed ___ (start) the project.", correct: ["starting"], explanation: "postpone + gerundio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "enjoy", "swimming", "in", "the", "sea", "."], translation: "Disfruto nadar en el mar.",
          explanation: "'Enjoy' + gerundio como objeto." },
        { words: ["She", "avoids", "eating", "sugar", "."], translation: "Ella evita comer azúcar.",
          explanation: "'Avoid' + gerundio como objeto." },
        { words: ["He", "suggested", "going", "out", "tonight", "."], translation: "Él sugirió salir esta noche.",
          explanation: "'Suggest' + gerundio como objeto." },
        { words: ["We", "considered", "moving", "to", "Lima", "."], translation: "Consideramos mudarnos a Lima.",
          explanation: "'Consider' + gerundio como objeto." },
        { words: ["She", "quit", "smoking", "last", "year", "."], translation: "Ella dejó de fumar el año pasado.",
          explanation: "'Quit' + gerundio como objeto." },
        { words: ["Do", "you", "mind", "waiting", "a", "moment", "?"], translation: "¿Te importa esperar un momento?",
          explanation: "'Mind' + gerundio como objeto." },
        { words: ["They", "postponed", "leaving", "until", "Monday", "."], translation: "Ellos pospusieron irse hasta el lunes.",
          explanation: "'Postpone' + gerundio como objeto." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada verbo con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["enjoy", "disfrutar"], ["avoid", "evitar"], ["suggest", "sugerir"], ["consider", "considerar"],
            ["quit", "dejar de hacer"], ["postpone", "posponer"], ["mind", "importar"],
          ],
          explanation: "Todos estos verbos siempre van seguidos de gerundio, nunca de infinitivo." }
      ]
    }
  ]
};
