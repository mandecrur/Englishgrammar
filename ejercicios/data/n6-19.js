window.EXERCISE_DATA = {
  title: "Emphatic Structures",
  translation: "Estructuras enfáticas con 'do'",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "emphasis", es: "énfasis" },
    { en: "stress", es: "enfatizar / acentuar" },
    { en: "genuinely", es: "genuinamente" },
    { en: "really", es: "realmente" },
    { en: "insist", es: "insistir" },
    { en: "contrary to belief", es: "contrario a lo que se cree" },
    { en: "convince", es: "convencer" },
    { en: "assure", es: "asegurar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["emphasis", "énfasis"], ["stress", "enfatizar"], ["genuinely", "genuinamente"],
          ["insist", "insistir"], ["convince", "convencer"], ["assure", "asegurar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Se usa <strong>do/does/did</strong> antes del verbo base en oraciones <strong>afirmativas</strong>
    para dar énfasis especial — para insistir en que algo es verdad, especialmente cuando se
    contradice una duda o negación previa.</p>
    <table>
      <tr><th>Sin énfasis</th><th>Con énfasis</th></tr>
      <tr><td>I like this movie.</td><td>I do like this movie.</td></tr>
      <tr><td>She works hard.</td><td>She does work hard.</td></tr>
      <tr><td>He finished the project.</td><td>He did finish the project.</td></tr>
    </table>
    <p>Se usa frecuentemente para <strong>corregir un malentendido</strong> o insistir después de
    que alguien duda: <strong>"You don't like it." "I do like it!"</strong>
    (¡Sí me gusta!)</p>
    <p>El verbo <strong>do/does/did</strong> lleva todo el énfasis en la pronunciación (se acentúa
    fuertemente al hablar), y el verbo principal vuelve a su forma base.</p>
    <p>Ejemplo: <strong>She did call you, I promise.</strong>
    (Ella sí te llamó, lo prometo — insistiendo contra la duda de que no llamó.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma enfática correcta.",
      type: "mc",
      questions: [
        { prompt: "I ___ like this movie! (énfasis)", options: ["do", "am"], correct: 0,
          explanation: "'Do' + verbo base da énfasis." },
        { prompt: "She ___ work hard, believe me.", options: ["does", "is"], correct: 0,
          explanation: "'Does' + verbo base da énfasis con 'she'." },
        { prompt: "He ___ finish the project, I saw it.", options: ["did", "was"], correct: 0,
          explanation: "'Did' + verbo base da énfasis en pasado." },
        { prompt: "I ___ (like) your idea, really.", options: ["like", "do like"], correct: 1,
          explanation: "'Do like' es la forma enfática." },
        { prompt: "She ___ call you, I promise.", options: ["did", "was"], correct: 0,
          explanation: "'Did' + verbo base da énfasis en pasado." },
        { prompt: "We ___ appreciate your help.", options: ["do", "are"], correct: 0,
          explanation: "'Do' + verbo base da énfasis." },
        { prompt: "He ___ try his best, even though he failed.", options: ["did", "was"], correct: 0,
          explanation: "'Did' + verbo base da énfasis en pasado." },
        { prompt: "They ___ (want) to help, they're just busy.", options: ["want", "do want"], correct: 1,
          explanation: "'Do want' es la forma enfática." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma enfática correcta (do/does/did).",
      type: "fill",
      questions: [
        { prompt: "I ___ (like) this song. (énfasis)", correct: ["do like"], explanation: "do + verbo base." },
        { prompt: "She ___ (work) hard, I've seen it.", correct: ["does work"], explanation: "does + verbo base." },
        { prompt: "He ___ (finish) his homework, I checked.", correct: ["did finish"], explanation: "did + verbo base." },
        { prompt: "I ___ (want) to help you, believe me.", correct: ["do want"], explanation: "do + verbo base." },
        { prompt: "She ___ (call) me, I have proof.", correct: ["did call"], explanation: "did + verbo base." },
        { prompt: "We ___ (appreciate) your effort.", correct: ["do appreciate"], explanation: "do + verbo base." },
        { prompt: "He ___ (try) his best, even though he lost.", correct: ["did try"], explanation: "did + verbo base." },
        { prompt: "They ___ (support) us, despite what you think.", correct: ["do support"], explanation: "do + verbo base." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "do", "like", "this", "movie", "!"], translation: "¡Sí me gusta esta película!",
          explanation: "'Do' + verbo base da énfasis." },
        { words: ["She", "does", "work", "very", "hard", "."], translation: "Ella sí trabaja muy duro.",
          explanation: "'Does' + verbo base da énfasis." },
        { words: ["He", "did", "finish", "the", "project", "."], translation: "Él sí terminó el proyecto.",
          explanation: "'Did' + verbo base da énfasis en pasado." },
        { words: ["I", "do", "appreciate", "your", "help", "."], translation: "Sí aprecio tu ayuda.",
          explanation: "'Do' + verbo base da énfasis." },
        { words: ["She", "did", "call", "you", ",", "I", "promise", "."], translation: "Ella sí te llamó, lo prometo.",
          explanation: "'Did' + verbo base da énfasis en pasado." },
        { words: ["We", "do", "want", "to", "help", "."], translation: "Sí queremos ayudar.",
          explanation: "'Do' + verbo base da énfasis." },
        { words: ["He", "did", "try", "his", "best", "."], translation: "Él sí intentó lo mejor que pudo.",
          explanation: "'Did' + verbo base da énfasis en pasado." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración enfática con su función.",
      type: "match",
      questions: [
        { pairs: [
            ["I do like it", "corrige una duda"], ["She does work hard", "insiste en un hecho"],
            ["He did finish it", "confirma algo pasado"], ["emphasis", "énfasis"],
            ["genuinely", "genuinamente"], ["insist", "insistir"], ["assure", "asegurar"],
          ],
          explanation: "'Do/does/did' + verbo base da énfasis especial a lo afirmado." }
      ]
    }
  ]
};
