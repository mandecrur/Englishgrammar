window.EXERCISE_DATA = {
  title: "Possessive + Gerund",
  translation: "Posesivo antes de gerundio (formal)",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "his leaving", es: "su partida (de él)" },
    { en: "her arriving", es: "su llegada (de ella)" },
    { en: "appreciate", es: "apreciar" },
    { en: "mind", es: "importar (molestia)" },
    { en: "object to", es: "oponerse a" },
    { en: "understand", es: "entender" },
    { en: "surprise", es: "sorprender" },
    { en: "unexpected", es: "inesperado" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["his leaving", "su partida"], ["her arriving", "su llegada"], ["appreciate", "apreciar"],
          ["object to", "oponerse a"], ["understand", "entender"], ["unexpected", "inesperado"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>En un registro <strong>formal</strong>, se usa el adjetivo posesivo (my, his, her...) antes
    de un gerundio, en vez del pronombre de objeto.</p>
    <table>
      <tr><th>Informal</th><th>Formal</th></tr>
      <tr><td>I appreciate you helping me.</td><td>I appreciate your helping me.</td></tr>
      <tr><td>I don't mind him coming.</td><td>I don't mind his coming.</td></tr>
      <tr><td>She was surprised at me leaving early.</td><td>She was surprised at my leaving early.</td></tr>
    </table>
    <p>Ambas formas son gramaticalmente correctas, pero el posesivo (<strong>your, his, her, my,
    our, their</strong>) + gerundio es más <strong>formal y elegante</strong>, común en escritura
    académica o profesional.</p>
    <p>Ejemplo: <strong>I understand your being upset about this.</strong>
    (Entiendo que estés molesto por esto — más formal que "you being upset".)</p>
    <p>En el habla cotidiana, es mucho más común usar el pronombre de objeto normal
    (me, you, him, her) antes del gerundio, sin cambiar el significado.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma más formal.",
      type: "mc",
      questions: [
        { prompt: "I appreciate ___ helping me. (formal)", options: ["you", "your"], correct: 1,
          explanation: "'Your' + gerundio es la forma formal." },
        { prompt: "I don't mind ___ coming late. (formal, sobre él)", options: ["him", "his"], correct: 1,
          explanation: "'His' + gerundio es la forma formal." },
        { prompt: "She was surprised at ___ leaving early. (formal, sobre mí)", options: ["me", "my"], correct: 1,
          explanation: "'My' + gerundio es la forma formal." },
        { prompt: "I understand ___ being upset. (formal, sobre ti)", options: ["you", "your"], correct: 1,
          explanation: "'Your' + gerundio es la forma formal." },
        { prompt: "We object to ___ smoking here. (formal, sobre ellos)", options: ["them", "their"], correct: 1,
          explanation: "'Their' + gerundio es la forma formal." },
        { prompt: "I appreciate ___ taking the time. (formal, sobre ella)", options: ["her", "hers"], correct: 0,
          explanation: "'Her' funciona igual como posesivo y objeto." },
        { prompt: "He was annoyed at ___ interrupting. (formal, sobre nosotros)", options: ["us", "our"], correct: 1,
          explanation: "'Our' + gerundio es la forma formal." },
        { prompt: "I'm grateful for ___ helping me. (formal, sobre ti)", options: ["you", "your"], correct: 1,
          explanation: "'Your' + gerundio es la forma formal." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma posesiva formal.",
      type: "fill",
      questions: [
        { prompt: "I appreciate ___ (you) helping me. (formal)", correct: ["your"], explanation: "your + gerundio." },
        { prompt: "I don't mind ___ (he) coming late.", correct: ["his"], explanation: "his + gerundio." },
        { prompt: "She was surprised at ___ (I) leaving.", correct: ["my"], explanation: "my + gerundio." },
        { prompt: "We understand ___ (you) being busy.", correct: ["your"], explanation: "your + gerundio." },
        { prompt: "They object to ___ (we) parking here.", correct: ["our"], explanation: "our + gerundio." },
        { prompt: "I'm thankful for ___ (they) supporting us.", correct: ["their"], explanation: "their + gerundio." },
        { prompt: "He was annoyed at ___ (she) being late.", correct: ["her"], explanation: "her + gerundio." },
        { prompt: "I appreciate ___ (you) coming today.", correct: ["your"], explanation: "your + gerundio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "appreciate", "your", "helping", "me", "."], translation: "Aprecio que me ayudes.",
          explanation: "'Your' + gerundio, forma formal." },
        { words: ["I", "don't", "mind", "his", "coming", "late", "."], translation: "No me importa que él llegue tarde.",
          explanation: "'His' + gerundio, forma formal." },
        { words: ["She", "was", "surprised", "at", "my", "leaving", "."], translation: "Ella se sorprendió de que yo me fuera.",
          explanation: "'My' + gerundio, forma formal." },
        { words: ["I", "understand", "your", "being", "upset", "."], translation: "Entiendo que estés molesto.",
          explanation: "'Your' + gerundio, forma formal." },
        { words: ["We", "object", "to", "their", "smoking", "here", "."], translation: "Nos oponemos a que fumen aquí.",
          explanation: "'Their' + gerundio, forma formal." },
        { words: ["He", "was", "annoyed", "at", "our", "interrupting", "."], translation: "Él estaba molesto por que interrumpiéramos.",
          explanation: "'Our' + gerundio, forma formal." },
        { words: ["I'm", "grateful", "for", "your", "support", "."], translation: "Estoy agradecido por tu apoyo.",
          explanation: "'Your' antes de sustantivo (paralelo al patrón)." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada forma informal con su equivalente formal.",
      type: "match",
      questions: [
        { pairs: [
            ["you helping", "your helping"], ["him coming", "his coming"], ["me leaving", "my leaving"],
            ["them smoking", "their smoking"], ["us interrupting", "our interrupting"], ["appreciate", "apreciar"], ["object to", "oponerse a"],
          ],
          explanation: "El posesivo antes de gerundio es más formal que el pronombre de objeto." }
      ]
    }
  ]
};
