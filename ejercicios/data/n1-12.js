window.EXERCISE_DATA = {
  title: "Simple Present: I / you / we / they",
  translation: "Presente simple (el verbo no cambia)",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "work", es: "trabajar" },
    { en: "live", es: "vivir" },
    { en: "study", es: "estudiar" },
    { en: "play", es: "jugar" },
    { en: "eat", es: "comer" },
    { en: "drink", es: "beber" },
    { en: "read", es: "leer" },
    { en: "every day", es: "todos los días" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada verbo en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["work", "trabajar"], ["live", "vivir"], ["study", "estudiar"],
          ["play", "jugar"], ["eat", "comer"], ["read", "leer"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El presente simple se usa para hábitos, rutinas y hechos generales.
    Con <strong>I, you, we, they</strong>, el verbo se usa en su <strong>forma base</strong> (sin cambios).</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>I work every day.</td><td>Yo trabajo todos los días.</td></tr>
      <tr><td>Negativa</td><td>I don't work on Sundays.</td><td>Yo no trabajo los domingos.</td></tr>
      <tr><td>Pregunta</td><td>Do you work here?</td><td>¿Trabajas aquí?</td></tr>
    </table>
    <p><strong>Negativo:</strong> se forma con <em>don't</em> (do not) + verbo base.<br>
    <strong>Pregunta:</strong> se forma con <em>Do</em> + sujeto + verbo base.</p>
    <p>Ejemplos: <strong>We live in Lima.</strong> (Vivimos en Lima.) —
    <strong>They don't study French.</strong> (Ellos no estudian francés.) —
    <strong>Do you play soccer?</strong> (¿Juegas fútbol?)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I ___ English every day.", options: ["study", "studies", "studying"], correct: 0,
          explanation: "Con 'I' se usa el verbo en su forma base: 'study'." },
        { prompt: "They ___ in Lima.", options: ["lives", "live", "living"], correct: 1,
          explanation: "Con 'they' se usa la forma base del verbo: 'live'." },
        { prompt: "We ___ soccer on weekends.", options: ["plays", "play", "playing"], correct: 1,
          explanation: "Con 'we' se usa la forma base: 'play'." },
        { prompt: "___ you speak English?", options: ["Do", "Does", "Is"], correct: 0,
          explanation: "Con 'you' en preguntas se usa 'Do'." },
        { prompt: "I ___ not like coffee.", options: ["do", "does", "am"], correct: 0,
          explanation: "Con 'I' en negativo se usa 'do not' (don't)." },
        { prompt: "They ___ a lot of books.", options: ["reads", "read", "reading"], correct: 1,
          explanation: "Con 'they' se usa la forma base: 'read'." },
        { prompt: "We ___ dinner at 7 PM.", options: ["eats", "eat", "eating"], correct: 1,
          explanation: "Con 'we' se usa la forma base: 'eat'." },
        { prompt: "___ they live in Peru?", options: ["Do", "Does", "Are"], correct: 0,
          explanation: "Con 'they' en preguntas se usa 'Do'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma correcta del verbo en presente simple.",
      type: "fill",
      questions: [
        { prompt: "I ___ (work) in an office.", correct: ["work"], explanation: "Con 'I' se usa el verbo en forma base." },
        { prompt: "We ___ (not/like) spicy food.", correct: ["don't like"], explanation: "Negación con 'don't' + verbo base." },
        { prompt: "They ___ (study) at night.", correct: ["study"], explanation: "Con 'they' se usa la forma base." },
        { prompt: "___ you ___ (play) tennis?", correct: ["do you play"], explanation: "Pregunta: Do + sujeto + verbo base." },
        { prompt: "You ___ (read) a lot of books.", correct: ["read"], explanation: "Con 'you' se usa la forma base." },
        { prompt: "We ___ (live) near the school.", correct: ["live"], explanation: "Con 'we' se usa la forma base." },
        { prompt: "I ___ (not/drink) coffee at night.", correct: ["don't drink"], explanation: "Negación con 'don't' + verbo base." },
        { prompt: "They ___ (eat) breakfast at 8.", correct: ["eat"], explanation: "Con 'they' se usa la forma base." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "work", "every", "day", "."], translation: "Yo trabajo todos los días.",
          explanation: "Orden: sujeto + verbo + expresión de frecuencia." },
        { words: ["We", "live", "in", "Lima", "."], translation: "Vivimos en Lima.",
          explanation: "Orden: sujeto + verbo + lugar." },
        { words: ["They", "don't", "study", "French", "."], translation: "Ellos no estudian francés.",
          explanation: "Negación con 'don't' antes del verbo base." },
        { words: ["Do", "you", "play", "soccer", "?"], translation: "¿Juegas fútbol?",
          explanation: "Pregunta: Do + sujeto + verbo base." },
        { words: ["We", "eat", "dinner", "at", "home", "."], translation: "Cenamos en casa.",
          explanation: "Orden: sujeto + verbo + objeto + lugar." },
        { words: ["I", "don't", "drink", "coffee", "."], translation: "Yo no bebo café.",
          explanation: "Negación con 'don't' antes del verbo base." },
        { words: ["They", "read", "books", "every", "week", "."], translation: "Ellos leen libros todas las semanas.",
          explanation: "Orden: sujeto + verbo + objeto + frecuencia." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["I work", "Yo trabajo"], ["You play", "Tú juegas"], ["We live", "Nosotros vivimos"],
            ["They study", "Ellos estudian"], ["I don't eat", "Yo no como"], ["Do you read?", "¿Lees?"],
            ["We don't drink", "Nosotros no bebemos"],
          ],
          explanation: "Con estos pronombres, el verbo se mantiene en su forma base." }
      ]
    }
  ]
};
