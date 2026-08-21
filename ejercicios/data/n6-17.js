window.EXERCISE_DATA = {
  title: "Advanced Reduction of Adverb Clauses",
  translation: "Reducción avanzada de cláusulas adverbiales",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "upon", es: "al (+ gerundio)" },
    { en: "while", es: "mientras" },
    { en: "before", es: "antes de" },
    { en: "after", es: "después de" },
    { en: "concise", es: "conciso" },
    { en: "simultaneous", es: "simultáneo" },
    { en: "sequential", es: "secuencial" },
    { en: "streamline", es: "simplificar / agilizar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["upon", "al (+ gerundio)"], ["while", "mientras"], ["before", "antes de"],
          ["after", "después de"], ["concise", "conciso"], ["simultaneous", "simultáneo"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Las cláusulas adverbiales con <strong>while, before, after, upon</strong> se pueden reducir
    a frases con gerundio cuando el sujeto de ambas cláusulas es el mismo.</p>
    <table>
      <tr><th>Cláusula completa</th><th>Forma reducida</th></tr>
      <tr><td>While I was walking, I saw an old friend.</td><td>While walking, I saw an old friend.</td></tr>
      <tr><td>Before she left, she locked the door.</td><td>Before leaving, she locked the door.</td></tr>
      <tr><td>After he finished eating, he left.</td><td>After finishing eating, he left.</td></tr>
      <tr><td>When she arrived, she called me.</td><td>Upon arriving, she called me.</td></tr>
    </table>
    <p><strong>Upon + gerundio</strong> es una forma muy formal de decir "cuando" para una acción
    inmediatamente seguida de otra: <strong>Upon hearing the news, she started crying.</strong>
    (Al oír la noticia, comenzó a llorar.)</p>
    <p>Regla: se elimina el sujeto y el auxiliar (was/were, had), dejando solo el conector +
    verbo-ing. Solo funciona cuando el sujeto de la cláusula reducida es el <strong>mismo</strong>
    que el de la oración principal.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma reducida correcta.",
      type: "mc",
      questions: [
        { prompt: "While I was walking... → While ___...", options: ["walking", "walked"], correct: 0,
          explanation: "Se reduce a 'while' + gerundio." },
        { prompt: "Before she left... → Before ___...", options: ["leaving", "left"], correct: 0,
          explanation: "Se reduce a 'before' + gerundio." },
        { prompt: "After he finished eating... → After ___ eating...", options: ["finishing", "finished"], correct: 0,
          explanation: "Se reduce a 'after' + gerundio." },
        { prompt: "When she arrived... → ___ arriving...", options: ["Upon", "While"], correct: 0,
          explanation: "'Upon' + gerundio expresa 'al momento de'." },
        { prompt: "Upon ___ (hear) the news, she cried.", options: ["hear", "hearing"], correct: 1,
          explanation: "'Upon' siempre va seguido de gerundio." },
        { prompt: "While ___ (study), I listen to music.", options: ["studying", "studied"], correct: 0,
          explanation: "'While' + gerundio en forma reducida." },
        { prompt: "Before ___ (leave), lock the door.", options: ["leaving", "left"], correct: 0,
          explanation: "'Before' + gerundio en forma reducida." },
        { prompt: "After ___ (finish) the report, she went home.", options: ["finishing", "finished"], correct: 0,
          explanation: "'After' + gerundio en forma reducida." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa la forma reducida con el conector y el gerundio.",
      type: "fill",
      questions: [
        { prompt: "While ___ (walk), I saw a friend.", correct: ["walking"], explanation: "while + gerundio." },
        { prompt: "Before ___ (leave), she locked the door.", correct: ["leaving"], explanation: "before + gerundio." },
        { prompt: "After ___ (finish) eating, he left.", correct: ["finishing"], explanation: "after + gerundio." },
        { prompt: "Upon ___ (arrive), she called me.", correct: ["arriving"], explanation: "upon + gerundio." },
        { prompt: "While ___ (drive), don't use your phone.", correct: ["driving"], explanation: "while + gerundio." },
        { prompt: "Before ___ (answer), think carefully.", correct: ["answering"], explanation: "before + gerundio." },
        { prompt: "After ___ (read) the book, she wrote a review.", correct: ["reading"], explanation: "after + gerundio." },
        { prompt: "Upon ___ (hear) the results, they celebrated.", correct: ["hearing"], explanation: "upon + gerundio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["While", "walking", ",", "I", "saw", "an", "old", "friend", "."], translation: "Mientras caminaba, vi a un viejo amigo.",
          explanation: "'While' + gerundio, forma reducida." },
        { words: ["Before", "leaving", ",", "she", "locked", "the", "door", "."], translation: "Antes de irse, cerró la puerta con llave.",
          explanation: "'Before' + gerundio, forma reducida." },
        { words: ["After", "finishing", "eating", ",", "he", "left", "."], translation: "Después de terminar de comer, se fue.",
          explanation: "'After' + gerundio, forma reducida." },
        { words: ["Upon", "arriving", ",", "she", "called", "me", "."], translation: "Al llegar, ella me llamó.",
          explanation: "'Upon' + gerundio, muy formal." },
        { words: ["While", "studying", ",", "I", "listen", "to", "music", "."], translation: "Mientras estudio, escucho música.",
          explanation: "'While' + gerundio, forma reducida." },
        { words: ["Upon", "hearing", "the", "news", ",", "she", "cried", "."], translation: "Al oír la noticia, ella lloró.",
          explanation: "'Upon' + gerundio para acción inmediata." },
        { words: ["Before", "answering", ",", "think", "carefully", "."], translation: "Antes de responder, piensa cuidadosamente.",
          explanation: "'Before' + gerundio, forma reducida." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada cláusula completa con su forma reducida.",
      type: "match",
      questions: [
        { pairs: [
            ["While I was walking", "While walking"], ["Before she left", "Before leaving"],
            ["After he finished", "After finishing"], ["When she arrived", "Upon arriving"],
            ["concise", "conciso"], ["simultaneous", "simultáneo"], ["streamline", "simplificar"],
          ],
          explanation: "Se elimina el sujeto y auxiliar cuando ambos sujetos son iguales." }
      ]
    }
  ]
};
