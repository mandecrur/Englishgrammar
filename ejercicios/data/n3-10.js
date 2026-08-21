window.EXERCISE_DATA = {
  title: "Should / Ought To",
  translation: "Consejos y recomendaciones",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "advice", es: "consejo" },
    { en: "recommend", es: "recomendar" },
    { en: "healthy", es: "saludable" },
    { en: "rest", es: "descansar" },
    { en: "opinion", es: "opinión" },
    { en: "suggestion", es: "sugerencia" },
    { en: "doctor", es: "doctor/a" },
    { en: "exercise", es: "ejercitarse / ejercicio" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["advice", "consejo"], ["recommend", "recomendar"], ["healthy", "saludable"],
          ["rest", "descansar"], ["opinion", "opinión"], ["exercise", "ejercitarse"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>Should</strong> y <strong>ought to</strong> se usan para dar <strong>consejos y
    recomendaciones</strong>. Ambos significan "deberías", pero "should" es mucho más común.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>You should rest more.</td><td>Deberías descansar más.</td></tr>
      <tr><td>Negativa</td><td>You shouldn't eat so much sugar.</td><td>No deberías comer tanta azúcar.</td></tr>
      <tr><td>Pregunta</td><td>Should I call her?</td><td>¿Debería llamarla?</td></tr>
    </table>
    <p><strong>Should</strong> no cambia según el pronombre y va seguido de verbo base.
    <strong>Ought to</strong> funciona igual, pero es un poco más formal:
    <strong>You ought to see a doctor.</strong> (Deberías ver a un doctor.)</p>
    <p>A diferencia de "must", "should" es más suave — es un <strong>consejo</strong>, no una obligación estricta.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "You ___ rest more.", options: ["should", "shoulds", "shoulding"], correct: 0,
          explanation: "'Should' no cambia según el pronombre." },
        { prompt: "She ___ see a doctor.", options: ["should", "shoulds", "is should"], correct: 0,
          explanation: "'Should' se mantiene igual con 'she'." },
        { prompt: "You ___ eat so much junk food. (consejo negativo)", options: ["shouldn't", "don't should", "not should"], correct: 0,
          explanation: "'Shouldn't' es la forma negativa correcta." },
        { prompt: "___ I call her now?", options: ["Should", "Do", "Am"], correct: 0,
          explanation: "Pregunta: 'Should' antes del sujeto." },
        { prompt: "We ___ study more for the exam.", options: ["should", "shoulds", "are should"], correct: 0,
          explanation: "'Should' + verbo base." },
        { prompt: "He ___ apologize to her.", options: ["should", "shoulds", "is should"], correct: 0,
          explanation: "'Should' no cambia con 'he'." },
        { prompt: "You ___ drink more water.", options: ["should", "shoulds", "musting"], correct: 0,
          explanation: "'Should' + verbo base 'drink'." },
        { prompt: "They ___ arrive earlier next time.", options: ["should", "shoulds", "are should"], correct: 0,
          explanation: "'Should' + verbo base." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada consejo con should/shouldn't.",
      type: "fill",
      questions: [
        { prompt: "You ___ (rest) more. You look tired.", correct: ["should rest"], explanation: "'Should' + verbo base." },
        { prompt: "She ___ (not/eat) so much sugar.", correct: ["shouldn't eat"], explanation: "'Shouldn't' es la negación." },
        { prompt: "___ I ___ (talk) to him about it?", correct: ["should I talk"], explanation: "Pregunta: Should + sujeto + verbo base." },
        { prompt: "We ___ (study) harder for the test.", correct: ["should study"], explanation: "'Should' + verbo base." },
        { prompt: "You ___ (not/smoke), it's bad for you.", correct: ["shouldn't smoke"], explanation: "'Shouldn't' es la negación." },
        { prompt: "He ___ (see) a doctor about that pain.", correct: ["should see"], explanation: "'Should' + verbo base." },
        { prompt: "You ___ (drink) more water every day.", correct: ["should drink"], explanation: "'Should' + verbo base." },
        { prompt: "They ___ (not/be) late for the meeting.", correct: ["shouldn't be"], explanation: "'Shouldn't' es la negación." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["You", "should", "rest", "more", "."], translation: "Deberías descansar más.",
          explanation: "Orden: sujeto + should + verbo base + complemento." },
        { words: ["She", "shouldn't", "eat", "so", "much", "sugar", "."], translation: "Ella no debería comer tanta azúcar.",
          explanation: "Orden: sujeto + shouldn't + verbo base + objeto." },
        { words: ["Should", "I", "call", "her", "?"], translation: "¿Debería llamarla?",
          explanation: "Pregunta: Should + sujeto + verbo base." },
        { words: ["We", "should", "study", "more", "."], translation: "Deberíamos estudiar más.",
          explanation: "Orden: sujeto + should + verbo base + adverbio." },
        { words: ["He", "should", "see", "a", "doctor", "."], translation: "Él debería ver a un doctor.",
          explanation: "Orden: sujeto + should + verbo base + objeto." },
        { words: ["You", "shouldn't", "drive", "so", "fast", "."], translation: "No deberías manejar tan rápido.",
          explanation: "Orden: sujeto + shouldn't + verbo base + adverbio." },
        { words: ["They", "should", "arrive", "on", "time", "."], translation: "Ellos deberían llegar a tiempo.",
          explanation: "Orden: sujeto + should + verbo base + complemento." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada consejo en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["You should rest", "Deberías descansar"], ["She shouldn't smoke", "Ella no debería fumar"],
            ["Should I call?", "¿Debería llamar?"], ["We should study", "Deberíamos estudiar"],
            ["He ought to apologize", "Él debería disculparse"], ["good advice", "buen consejo"], ["a recommendation", "una recomendación"],
          ],
          explanation: "'Should' y 'ought to' expresan consejos, no obligaciones estrictas." }
      ]
    }
  ]
};
