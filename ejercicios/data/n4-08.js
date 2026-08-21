window.EXERCISE_DATA = {
  title: "May / Might / Could (Possibility)",
  translation: "Posibilidad — quizás / puede que",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "possibility", es: "posibilidad" },
    { en: "maybe", es: "quizás / tal vez" },
    { en: "perhaps", es: "quizás / tal vez" },
    { en: "uncertain", es: "incierto" },
    { en: "likely", es: "probable" },
    { en: "unlikely", es: "improbable" },
    { en: "chance", es: "posibilidad / oportunidad" },
    { en: "guess", es: "suponer / adivinar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["possibility", "posibilidad"], ["maybe", "quizás / tal vez"], ["uncertain", "incierto"],
          ["likely", "probable"], ["unlikely", "improbable"], ["guess", "suponer"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>May</strong>, <strong>might</strong> y <strong>could</strong> se usan para expresar
    <strong>posibilidad</strong> en el presente o futuro — algo que quizás sea cierto o quizás ocurra.</p>
    <table>
      <tr><th>Modal</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>may</td><td>It may rain later.</td><td>Puede que llueva más tarde.</td></tr>
      <tr><td>might</td><td>She might be at home.</td><td>Puede que ella esté en casa.</td></tr>
      <tr><td>could</td><td>He could be right.</td><td>Podría tener razón.</td></tr>
    </table>
    <p>Los tres son muy similares en significado (todos expresan incertidumbre), aunque
    <strong>might</strong> suele sonar un poco menos seguro que <strong>may</strong>.</p>
    <p>Estructura: <strong>modal + verbo base</strong> (sin "to"), igual para todos los pronombres.
    Negativo: <strong>may not / might not</strong> (no se usa "mayn't" ni "mightn't" comúnmente).</p>
    <p>Ejemplos: <strong>I may go to the party.</strong> (Puede que vaya a la fiesta.) —
    <strong>They might not come.</strong> (Puede que no vengan.) —
    <strong>It could be true.</strong> (Podría ser verdad.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "It ___ rain later.", options: ["may", "mays", "maying"], correct: 0,
          explanation: "'May' no cambia según el pronombre." },
        { prompt: "She ___ be at home right now.", options: ["might", "mights", "is might"], correct: 0,
          explanation: "'Might' no cambia según el pronombre." },
        { prompt: "He ___ be right about this.", options: ["could", "coulds", "is could"], correct: 0,
          explanation: "'Could' + verbo base para posibilidad." },
        { prompt: "They ___ not come to the party.", options: ["may", "mays", "is may"], correct: 0,
          explanation: "'May not' es la forma negativa." },
        { prompt: "I ___ go to the beach this weekend.", options: ["may", "mays", "am may"], correct: 0,
          explanation: "'May' + verbo base para posibilidad." },
        { prompt: "We ___ be late, there's traffic.", options: ["might", "mights", "are might"], correct: 0,
          explanation: "'Might' + verbo base para posibilidad." },
        { prompt: "It ___ not be true.", options: ["might", "mights", "is might"], correct: 0,
          explanation: "'Might not' es la forma negativa." },
        { prompt: "She ___ know the answer.", options: ["could", "coulds", "is could"], correct: 0,
          explanation: "'Could' + verbo base para posibilidad." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con may, might o could según corresponda.",
      type: "fill",
      questions: [
        { prompt: "It ___ (rain) tomorrow. (posibilidad)", correct: ["may", "might", "could"], explanation: "Cualquiera de los tres expresa posibilidad." },
        { prompt: "She ___ (not/come) to the party.", correct: ["may not come", "might not come"], explanation: "Negación de posibilidad." },
        { prompt: "He ___ (be) at work right now.", correct: ["may be", "might be", "could be"], explanation: "Posibilidad en el presente." },
        { prompt: "I ___ (go) to the gym later.", correct: ["may go", "might go", "could go"], explanation: "Posibilidad futura." },
        { prompt: "They ___ (not/know) about the change.", correct: ["may not know", "might not know"], explanation: "Negación de posibilidad." },
        { prompt: "We ___ (be) wrong about this.", correct: ["may be", "might be", "could be"], explanation: "Posibilidad en el presente." },
        { prompt: "It ___ (be) a good idea.", correct: ["may be", "might be", "could be"], explanation: "Posibilidad en el presente." },
        { prompt: "She ___ (call) you later tonight.", correct: ["may call", "might call", "could call"], explanation: "Posibilidad futura." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["It", "may", "rain", "later", "."], translation: "Puede que llueva más tarde.",
          explanation: "Orden: sujeto + may + verbo base + tiempo." },
        { words: ["She", "might", "be", "at", "home", "."], translation: "Puede que ella esté en casa.",
          explanation: "Orden: sujeto + might + verbo base + lugar." },
        { words: ["He", "could", "be", "right", "."], translation: "Él podría tener razón.",
          explanation: "Orden: sujeto + could + verbo base + adjetivo." },
        { words: ["They", "might", "not", "come", "."], translation: "Puede que no vengan.",
          explanation: "Negación: might not + verbo base." },
        { words: ["I", "may", "go", "to", "the", "party", "."], translation: "Puede que vaya a la fiesta.",
          explanation: "Orden: sujeto + may + verbo base + complemento." },
        { words: ["We", "could", "be", "wrong", "."], translation: "Podríamos estar equivocados.",
          explanation: "Orden: sujeto + could + verbo base + adjetivo." },
        { words: ["It", "might", "not", "be", "true", "."], translation: "Puede que no sea cierto.",
          explanation: "Negación: might not + verbo base." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["It may rain", "Puede que llueva"], ["She might be home", "Puede que ella esté en casa"],
            ["He could be right", "Él podría tener razón"], ["They might not come", "Puede que no vengan"],
            ["a possibility", "una posibilidad"], ["uncertain", "incierto"], ["maybe", "quizás"],
          ],
          explanation: "May, might y could expresan grados similares de incertidumbre." }
      ]
    }
  ]
};
