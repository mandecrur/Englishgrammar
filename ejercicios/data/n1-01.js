window.EXERCISE_DATA = {
  title: "Verb TO BE (am / is / are)",
  translation: "El verbo SER / ESTAR — presente",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "student", es: "estudiante" },
    { en: "teacher", es: "profesor / profesora" },
    { en: "doctor", es: "doctor / doctora" },
    { en: "happy", es: "feliz" },
    { en: "tired", es: "cansado/a" },
    { en: "hungry", es: "hambriento/a" },
    { en: "from", es: "de (procedencia)" },
    { en: "friend", es: "amigo/a" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      {
        pairs: [
          ["student", "estudiante"],
          ["teacher", "profesor / profesora"],
          ["happy", "feliz"],
          ["tired", "cansado/a"],
          ["hungry", "hambriento/a"],
          ["friend", "amigo/a"],
        ],
        explanation: "Este vocabulario se usará en los ejercicios de gramática de este tema."
      }
    ]
  },

  theory: `
    <p>El verbo <strong>to be</strong> (ser / estar) es el verbo más importante del inglés.
    A diferencia del español, en inglés no se puede omitir el sujeto ni el verbo.</p>
    <table>
      <tr><th>Pronombre</th><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>I (yo)</td><td>am</td><td>I am a student.</td><td>Yo soy estudiante.</td></tr>
      <tr><td>You (tú/usted)</td><td>are</td><td>You are my friend.</td><td>Tú eres mi amigo.</td></tr>
      <tr><td>He (él)</td><td>is</td><td>He is a doctor.</td><td>Él es doctor.</td></tr>
      <tr><td>She (ella)</td><td>is</td><td>She is happy.</td><td>Ella está feliz.</td></tr>
      <tr><td>It (eso/ello)</td><td>is</td><td>It is a book.</td><td>Eso es un libro.</td></tr>
      <tr><td>We (nosotros)</td><td>are</td><td>We are tired.</td><td>Nosotros estamos cansados.</td></tr>
      <tr><td>They (ellos)</td><td>are</td><td>They are hungry.</td><td>Ellos están hambrientos.</td></tr>
    </table>
    <p><strong>Forma negativa:</strong> se agrega <em>not</em> después del verbo.<br>
    <strong>I am not tired.</strong> (Yo no estoy cansado.) — <strong>She is not happy.</strong> (Ella no está feliz.)</p>
    <p><strong>Forma de pregunta:</strong> el verbo se coloca antes del sujeto.<br>
    <strong>Are you a student?</strong> (¿Eres estudiante?) — <strong>Is he a doctor?</strong> (¿Es él doctor?)</p>
    <p>Nota importante: en español "ser" y "estar" son dos verbos distintos, pero en inglés ambos
    se traducen con <strong>to be</strong>. <em>I am happy</em> puede significar tanto "soy feliz" como "estoy feliz",
    según el contexto.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta para completar cada oración.",
      type: "mc",
      questions: [
        { prompt: "She ___ a doctor.", options: ["am", "is", "are"], correct: 1,
          explanation: "Con 'she' (ella) siempre se usa 'is'." },
        { prompt: "We ___ from Peru.", options: ["is", "am", "are"], correct: 2,
          explanation: "Con 'we' (nosotros) se usa 'are'." },
        { prompt: "I ___ a teacher.", options: ["is", "am", "are"], correct: 1,
          explanation: "Con 'I' (yo) siempre se usa 'am'." },
        { prompt: "They ___ hungry.", options: ["is", "am", "are"], correct: 2,
          explanation: "Con 'they' (ellos) se usa 'are'." },
        { prompt: "___ you a student?", options: ["Am", "Is", "Are"], correct: 2,
          explanation: "Con 'you' en preguntas se usa 'Are'." },
        { prompt: "He ___ not tired.", options: ["is", "am", "are"], correct: 0,
          explanation: "Con 'he' (él) se usa 'is', incluso en negativo." },
        { prompt: "It ___ a good book.", options: ["am", "is", "are"], correct: 1,
          explanation: "Con 'it' (eso/ello) se usa 'is'." },
        { prompt: "My friends ___ happy today.", options: ["is", "am", "are"], correct: 2,
          explanation: "'My friends' equivale a 'they', así que se usa 'are'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma correcta del verbo to be (am, is, are).",
      type: "fill",
      questions: [
        { prompt: "I ___ hungry right now.", correct: ["am"],
          explanation: "Con 'I' siempre se usa 'am'." },
        { prompt: "She ___ my best friend.", correct: ["is"],
          explanation: "Con 'she' se usa 'is'." },
        { prompt: "You ___ very tired today.", correct: ["are"],
          explanation: "Con 'you' se usa 'are'." },
        { prompt: "We ___ students at this school.", correct: ["are"],
          explanation: "Con 'we' se usa 'are'." },
        { prompt: "He ___ not a doctor, he's a teacher.", correct: ["is"],
          explanation: "Con 'he' se usa 'is', también en forma negativa." },
        { prompt: "It ___ a difficult exercise.", correct: ["is"],
          explanation: "Con 'it' se usa 'is'." },
        { prompt: "___ they from Lima? (pregunta)", correct: ["are"],
          explanation: "Con 'they' en preguntas se usa 'are'." },
        { prompt: "My sister ___ a doctor.", correct: ["is"],
          explanation: "'My sister' equivale a 'she', así que se usa 'is'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["She", "is", "a", "teacher", "."],
          explanation: "Orden correcto: sujeto + verbo + artículo + sustantivo." },
        { words: ["We", "are", "very", "happy", "."],
          explanation: "Orden correcto: sujeto + verbo + adverbio + adjetivo." },
        { words: ["Is", "he", "your", "friend", "?"],
          explanation: "Es una pregunta, por eso lleva '?' al final. El verbo 'is' va antes del sujeto 'he'." },
        { words: ["They", "are", "not", "tired", "."],
          explanation: "La negación 'not' va justo después del verbo 'are'." },
        { words: ["I", "am", "a", "student", "."],
          explanation: "Orden correcto: sujeto + verbo + artículo + sustantivo." },
        { words: ["Are", "you", "hungry", "now", "?"],
          explanation: "Es una pregunta, por eso lleva '?' al final. 'Are' va al inicio, antes de 'you'." },
        { words: ["It", "is", "not", "difficult", "."],
          explanation: "La negación 'not' va justo después del verbo 'is'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada pronombre con la forma del verbo to be que le corresponde.",
      type: "match",
      questions: [
        {
          pairs: [
            ["I", "am"],
            ["You", "are"],
            ["He", "is"],
            ["She", "is"],
            ["It", "is"],
            ["We", "are"],
            ["They", "are"],
          ],
          explanation: "Regla clave: I→am · He/She/It→is · You/We/They→are."
        }
      ]
    }
  ]
};
