window.EXERCISE_DATA = {
  title: "Adverb Clauses (because, since, so that)",
  translation: "Cláusulas adverbiales de causa y propósito",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "because", es: "porque" },
    { en: "since", es: "ya que / puesto que" },
    { en: "so that", es: "para que" },
    { en: "so", es: "así que / por eso" },
    { en: "reason", es: "razón" },
    { en: "cause", es: "causa" },
    { en: "result", es: "resultado" },
    { en: "purpose", es: "propósito" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["because", "porque"], ["since", "ya que / puesto que"], ["so that", "para que"],
          ["so", "así que / por eso"], ["reason", "razón"], ["result", "resultado"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Estas cláusulas conectan una <strong>causa</strong> con su <strong>efecto</strong>, o expresan
    el <strong>propósito</strong> de una acción.</p>
    <table>
      <tr><th>Conector</th><th>Uso</th><th>Ejemplo</th></tr>
      <tr><td><strong>because</strong></td><td>causa directa</td><td>I stayed home because it was raining.</td></tr>
      <tr><td><strong>since</strong></td><td>causa (más formal/obvia)</td><td>Since you're here, let's start.</td></tr>
      <tr><td><strong>so</strong></td><td>resultado/efecto</td><td>It was raining, so I stayed home.</td></tr>
      <tr><td><strong>so that</strong></td><td>propósito (con intención)</td><td>I studied hard so that I could pass.</td></tr>
    </table>
    <p>Diferencia clave: <strong>because</strong> introduce la causa (responde "¿por qué?"),
    mientras que <strong>so</strong> introduce el resultado (lo que pasó como consecuencia).</p>
    <p>Ejemplo comparativo: <strong>Because it was raining, I stayed home.</strong> (causa primero)
    vs. <strong>It was raining, so I stayed home.</strong> (resultado, con "so" en medio, sin coma antes de "because" cuando va después).</p>
    <p><strong>So that</strong> expresa el propósito de una acción (parecido a "in order to", pero
    con sujeto propio): <strong>She whispered so that no one could hear.</strong>
    (Ella susurró para que nadie pudiera oír.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el conector correcto.",
      type: "mc",
      questions: [
        { prompt: "I stayed home ___ it was raining. (causa)", options: ["because", "so"], correct: 0,
          explanation: "'Because' introduce la causa." },
        { prompt: "It was raining, ___ I stayed home. (resultado)", options: ["because", "so"], correct: 1,
          explanation: "'So' introduce el resultado." },
        { prompt: "___ you're here, let's start the meeting.", options: ["Since", "So"], correct: 0,
          explanation: "'Since' introduce una causa obvia, al inicio de la oración." },
        { prompt: "I studied hard ___ I could pass the exam. (propósito)", options: ["because", "so that"], correct: 1,
          explanation: "'So that' expresa el propósito de la acción." },
        { prompt: "She whispered ___ no one could hear. (propósito)", options: ["because", "so that"], correct: 1,
          explanation: "'So that' expresa el propósito de la acción." },
        { prompt: "He was tired ___ he had worked all day. (causa)", options: ["because", "so"], correct: 0,
          explanation: "'Because' introduce la causa." },
        { prompt: "I was hungry, ___ I made a sandwich. (resultado)", options: ["because", "so"], correct: 1,
          explanation: "'So' introduce el resultado." },
        { prompt: "We left early ___ we wouldn't be late. (propósito)", options: ["because", "so that"], correct: 1,
          explanation: "'So that' expresa el propósito de la acción." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con because, since, so o so that.",
      type: "fill",
      questions: [
        { prompt: "I was late ___ there was a lot of traffic. (causa)", correct: ["because"], explanation: "'Because' introduce la causa." },
        { prompt: "There was traffic, ___ I was late. (resultado)", correct: ["so"], explanation: "'So' introduce el resultado." },
        { prompt: "I saved money ___ I could travel. (propósito)", correct: ["so that"], explanation: "'So that' expresa propósito." },
        { prompt: "___ it's your birthday, let's celebrate.", correct: ["since"], explanation: "'Since' introduce una causa obvia." },
        { prompt: "She was sick ___ she stayed in bed. (causa)", correct: ["because"], explanation: "'Because' introduce la causa." },
        { prompt: "He was sick, ___ he stayed in bed. (resultado)", correct: ["so"], explanation: "'So' introduce el resultado." },
        { prompt: "I turned down the music ___ the baby could sleep. (propósito)", correct: ["so that"], explanation: "'So that' expresa propósito." },
        { prompt: "I was tired ___ I hadn't slept well. (causa)", correct: ["because"], explanation: "'Because' introduce la causa." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "stayed", "home", "because", "it", "was", "raining", "."], translation: "Me quedé en casa porque estaba lloviendo.",
          explanation: "'Because' introduce la causa." },
        { words: ["It", "was", "raining", ",", "so", "I", "stayed", "home", "."], translation: "Estaba lloviendo, así que me quedé en casa.",
          explanation: "'So' introduce el resultado." },
        { words: ["I", "studied", "hard", "so", "that", "I", "could", "pass", "."], translation: "Estudié duro para poder aprobar.",
          explanation: "'So that' expresa el propósito." },
        { words: ["Since", "you're", "here", ",", "let's", "start", "."], translation: "Ya que estás aquí, empecemos.",
          explanation: "'Since' introduce una causa obvia." },
        { words: ["She", "whispered", "so", "that", "no", "one", "could", "hear", "."], translation: "Ella susurró para que nadie pudiera oír.",
          explanation: "'So that' expresa el propósito." },
        { words: ["He", "was", "tired", "because", "he", "worked", "all", "day", "."], translation: "Estaba cansado porque trabajó todo el día.",
          explanation: "'Because' introduce la causa." },
        { words: ["I", "was", "hungry", ",", "so", "I", "made", "a", "sandwich", "."], translation: "Tenía hambre, así que me hice un sándwich.",
          explanation: "'So' introduce el resultado." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada conector con su función.",
      type: "match",
      questions: [
        { pairs: [
            ["because", "introduce la causa"], ["since", "causa obvia/formal"],
            ["so", "introduce el resultado"], ["so that", "expresa propósito"],
            ["reason", "razón"], ["result", "resultado"], ["purpose", "propósito"],
          ],
          explanation: "Estos conectores conectan causa, efecto y propósito." }
      ]
    }
  ]
};
