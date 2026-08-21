window.EXERCISE_DATA = {
  title: "Possessive Nouns ('s, s')",
  translation: "Posesivo con 's — de quién es algo",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "belongs to", es: "pertenece a" },
    { en: "owner", es: "dueño/a" },
    { en: "neighbor", es: "vecino/a" },
    { en: "boss", es: "jefe/a" },
    { en: "cousin", es: "primo/a" },
    { en: "colleague", es: "colega" },
    { en: "apartment", es: "apartamento" },
    { en: "office", es: "oficina" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["belongs to", "pertenece a"], ["owner", "dueño/a"], ["neighbor", "vecino/a"],
          ["boss", "jefe/a"], ["cousin", "primo/a"], ["colleague", "colega"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El posesivo con <strong>'s</strong> (apóstrofo + s) se usa para mostrar a quién pertenece algo,
    generalmente con personas.</p>
    <table>
      <tr><th>Regla</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Singular: +'s</td><td>Maria's book</td><td>el libro de María</td></tr>
      <tr><td>Plural terminado en -s: solo '</td><td>the students' books</td><td>los libros de los estudiantes</td></tr>
      <tr><td>Plural irregular (sin -s): +'s</td><td>the children's toys</td><td>los juguetes de los niños</td></tr>
      <tr><td>Nombre terminado en -s: +'s o solo '</td><td>James's car / James' car</td><td>el carro de James</td></tr>
    </table>
    <p>Estructura: <strong>[dueño] + 's + [cosa]</strong>. Ejemplo: <strong>my sister's phone</strong>
    (el teléfono de mi hermana) — nota que en español el orden es inverso.</p>
    <p>Para preguntar de quién es algo se usa: <strong>Whose book is this? — It's Maria's.</strong>
    (¿De quién es este libro? — Es de María.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma posesiva correcta.",
      type: "mc",
      questions: [
        { prompt: "This is ___ book. (María)", options: ["Maria's", "Marias'", "Marias"], correct: 0,
          explanation: "Nombre singular: se añade 's." },
        { prompt: "The ___ toys are on the floor. (children, plural irregular)", options: ["childrens'", "children's", "childrens"], correct: 1,
          explanation: "'Children' no termina en -s, se añade 's." },
        { prompt: "The ___ cars are parked outside. (students, plural regular)", options: ["students's", "students'", "student's"], correct: 1,
          explanation: "Plural terminado en -s: solo se añade el apóstrofo." },
        { prompt: "This is my ___ phone. (sister)", options: ["sister's", "sisters'", "sisters"], correct: 0,
          explanation: "Sustantivo singular: se añade 's." },
        { prompt: "___ is this? (de quién)", options: ["Who's", "Whose", "Who"], correct: 1,
          explanation: "'Whose' pregunta de quién es algo." },
        { prompt: "That is my ___ house. (parents, plural regular)", options: ["parent's", "parents'", "parents"], correct: 1,
          explanation: "Plural terminado en -s: solo se añade el apóstrofo." },
        { prompt: "This is ___ car. (boss)", options: ["boss's", "bosss'", "bosses"], correct: 0,
          explanation: "Sustantivo singular: se añade 's." },
        { prompt: "The ___ office is upstairs. (manager)", options: ["manager's", "managers'", "managers"], correct: 0,
          explanation: "Sustantivo singular: se añade 's." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma posesiva correcta.",
      type: "fill",
      questions: [
        { prompt: "This is ___ (Carlos) car.", correct: ["carlos'"], explanation: "Nombre singular: se añade apóstrofo (Carlos' o Carlos's)." },
        { prompt: "The ___ (students) books are here.", correct: ["students'"], explanation: "Plural en -s: solo apóstrofo." },
        { prompt: "That is my ___ (brother) room.", correct: ["brother's"], explanation: "Sustantivo singular: se añade 's." },
        { prompt: "The ___ (children) toys are new.", correct: ["children's"], explanation: "Plural irregular: se añade 's." },
        { prompt: "This is ___ (my sister) phone.", correct: ["my sister's"], explanation: "Sustantivo singular: se añade 's." },
        { prompt: "___ (whose) bag is this?", correct: ["whose"], explanation: "'Whose' pregunta por el dueño." },
        { prompt: "The ___ (boss) office is big.", correct: ["boss's"], explanation: "Sustantivo singular: se añade 's." },
        { prompt: "My ___ (parents) house is nice.", correct: ["parents'"], explanation: "Plural en -s: solo apóstrofo." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["This", "is", "Maria's", "book", "."], translation: "Este es el libro de María.",
          explanation: "Orden: sujeto + is + posesivo + sustantivo." },
        { words: ["Whose", "car", "is", "this", "?"], translation: "¿De quién es este carro?",
          explanation: "Pregunta con 'whose' al inicio." },
        { words: ["The", "children's", "toys", "are", "new", "."], translation: "Los juguetes de los niños son nuevos.",
          explanation: "Posesivo irregular 'children's'." },
        { words: ["That", "is", "my", "sister's", "phone", "."], translation: "Ese es el teléfono de mi hermana.",
          explanation: "Posesivo singular 'sister's'." },
        { words: ["The", "students'", "books", "are", "here", "."], translation: "Los libros de los estudiantes están aquí.",
          explanation: "Posesivo plural regular, solo apóstrofo." },
        { words: ["This", "is", "my", "boss's", "office", "."], translation: "Esta es la oficina de mi jefe.",
          explanation: "Posesivo singular 'boss's'." },
        { words: ["My", "parents'", "house", "is", "big", "."], translation: "La casa de mis padres es grande.",
          explanation: "Posesivo plural regular, solo apóstrofo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada situación con la forma posesiva correcta.",
      type: "match",
      questions: [
        { pairs: [
            ["Maria (singular)", "Maria's"], ["students (plural regular)", "students'"],
            ["children (plural irregular)", "children's"], ["boss (singular)", "boss's"],
            ["parents (plural regular)", "parents'"], ["sister (singular)", "sister's"], ["men (plural irregular)", "men's"],
          ],
          explanation: "Plural regular (-s) solo lleva apóstrofo; el resto añade 's." }
      ]
    }
  ]
};
