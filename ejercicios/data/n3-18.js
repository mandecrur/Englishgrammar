window.EXERCISE_DATA = {
  title: "Reflexive Pronouns",
  translation: "Pronombres reflexivos (myself, yourself...)",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "myself", es: "yo mismo/a" },
    { en: "yourself", es: "tú mismo/a" },
    { en: "himself", es: "él mismo" },
    { en: "herself", es: "ella misma" },
    { en: "ourselves", es: "nosotros mismos" },
    { en: "themselves", es: "ellos mismos" },
    { en: "hurt", es: "lastimar(se)" },
    { en: "by myself", es: "yo solo/a (sin ayuda)" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["myself", "yo mismo/a"], ["yourself", "tú mismo/a"], ["himself", "él mismo"],
          ["herself", "ella misma"], ["ourselves", "nosotros mismos"], ["themselves", "ellos mismos"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los pronombres reflexivos se usan cuando el sujeto y el objeto de la acción son
    <strong>la misma persona</strong>.</p>
    <table>
      <tr><th>Pronombre</th><th>Reflexivo</th><th>Ejemplo</th></tr>
      <tr><td>I</td><td>myself</td><td>I hurt myself.</td></tr>
      <tr><td>You</td><td>yourself</td><td>Take care of yourself.</td></tr>
      <tr><td>He</td><td>himself</td><td>He cut himself.</td></tr>
      <tr><td>She</td><td>herself</td><td>She talks to herself.</td></tr>
      <tr><td>It</td><td>itself</td><td>The cat cleaned itself.</td></tr>
      <tr><td>We</td><td>ourselves</td><td>We enjoyed ourselves.</td></tr>
      <tr><td>They</td><td>themselves</td><td>They introduced themselves.</td></tr>
    </table>
    <p>También se usan para enfatizar que alguien hizo algo <strong>sin ayuda</strong>, con la
    expresión <strong>by + reflexivo</strong>: <strong>I did it by myself.</strong> (Lo hice yo solo.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el pronombre reflexivo correcto.",
      type: "mc",
      questions: [
        { prompt: "I hurt ___ yesterday.", options: ["myself", "himself", "yourself"], correct: 0,
          explanation: "'Myself' corresponde a 'I'." },
        { prompt: "She looked at ___ in the mirror.", options: ["himself", "herself", "yourself"], correct: 1,
          explanation: "'Herself' corresponde a 'she'." },
        { prompt: "We enjoyed ___ at the party.", options: ["ourselves", "themselves", "yourselves"], correct: 0,
          explanation: "'Ourselves' corresponde a 'we'." },
        { prompt: "They introduced ___ to the class.", options: ["ourselves", "themselves", "himself"], correct: 1,
          explanation: "'Themselves' corresponde a 'they'." },
        { prompt: "He cut ___ while cooking.", options: ["himself", "herself", "myself"], correct: 0,
          explanation: "'Himself' corresponde a 'he'." },
        { prompt: "Did you do it by ___?", options: ["yourself", "himself", "myself"], correct: 0,
          explanation: "'Yourself' corresponde a 'you'." },
        { prompt: "The cat cleaned ___.", options: ["itself", "himself", "themselves"], correct: 0,
          explanation: "'Itself' corresponde a 'it'." },
        { prompt: "I made this cake by ___.", options: ["myself", "himself", "yourself"], correct: 0,
          explanation: "'Myself' corresponde a 'I'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con el pronombre reflexivo correcto.",
      type: "fill",
      questions: [
        { prompt: "I taught ___ to play guitar.", correct: ["myself"], explanation: "'Myself' para 'I'." },
        { prompt: "She hurt ___ at the gym.", correct: ["herself"], explanation: "'Herself' para 'she'." },
        { prompt: "We built this house by ___.", correct: ["ourselves"], explanation: "'Ourselves' para 'we'." },
        { prompt: "They enjoyed ___ at the beach.", correct: ["themselves"], explanation: "'Themselves' para 'they'." },
        { prompt: "He talks to ___ sometimes.", correct: ["himself"], explanation: "'Himself' para 'he'." },
        { prompt: "Can you take care of ___?", correct: ["yourself"], explanation: "'Yourself' para 'you'." },
        { prompt: "I looked at ___ in the mirror.", correct: ["myself"], explanation: "'Myself' para 'I'." },
        { prompt: "The dog scratched ___.", correct: ["itself"], explanation: "'Itself' para 'it'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "hurt", "myself", "yesterday", "."], translation: "Me lastimé ayer.",
          explanation: "Orden: sujeto + verbo + reflexivo + tiempo." },
        { words: ["She", "talks", "to", "herself", "."], translation: "Ella habla sola (consigo misma).",
          explanation: "Orden: sujeto + verbo + preposición + reflexivo." },
        { words: ["We", "enjoyed", "ourselves", "a", "lot", "."], translation: "Nos divertimos mucho.",
          explanation: "Orden: sujeto + verbo + reflexivo + intensificador." },
        { words: ["They", "introduced", "themselves", "."], translation: "Ellos se presentaron.",
          explanation: "Orden: sujeto + verbo + reflexivo." },
        { words: ["He", "did", "it", "by", "himself", "."], translation: "Él lo hizo solo.",
          explanation: "'By himself' significa 'sin ayuda'." },
        { words: ["I", "made", "this", "cake", "myself", "."], translation: "Hice este pastel yo mismo.",
          explanation: "Orden: sujeto + verbo + objeto + reflexivo." },
        { words: ["Take", "care", "of", "yourself", "."], translation: "Cuídate.",
          explanation: "Imperativo + reflexivo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada pronombre con su forma reflexiva.",
      type: "match",
      questions: [
        { pairs: [
            ["I", "myself"], ["you", "yourself"], ["he", "himself"], ["she", "herself"],
            ["it", "itself"], ["we", "ourselves"], ["they", "themselves"],
          ],
          explanation: "Nota que 'you' en plural usa 'yourselves'." }
      ]
    }
  ]
};
