window.EXERCISE_DATA = {
  title: "Question Words (what, who, where, how many)",
  translation: "Palabras para hacer preguntas",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "question", es: "pregunta" },
    { en: "answer", es: "respuesta" },
    { en: "reason", es: "razón / motivo" },
    { en: "place", es: "lugar" },
    { en: "time", es: "hora / tiempo" },
    { en: "person", es: "persona" },
    { en: "way", es: "manera / forma" },
    { en: "amount", es: "cantidad" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["question", "pregunta"], ["answer", "respuesta"], ["reason", "razón / motivo"],
          ["place", "lugar"], ["person", "persona"], ["amount", "cantidad"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <table>
      <tr><th>Palabra</th><th>Significado</th><th>Uso</th></tr>
      <tr><td><strong>what</strong></td><td>qué</td><td>preguntar por una cosa</td></tr>
      <tr><td><strong>who</strong></td><td>quién</td><td>preguntar por una persona</td></tr>
      <tr><td><strong>where</strong></td><td>dónde</td><td>preguntar por un lugar</td></tr>
      <tr><td><strong>when</strong></td><td>cuándo</td><td>preguntar por un momento/tiempo</td></tr>
      <tr><td><strong>why</strong></td><td>por qué</td><td>preguntar por una razón</td></tr>
      <tr><td><strong>how</strong></td><td>cómo</td><td>preguntar por una manera</td></tr>
      <tr><td><strong>how many</strong></td><td>cuántos</td><td>cantidades contables (plural)</td></tr>
      <tr><td><strong>how much</strong></td><td>cuánto</td><td>cantidades incontables o precios</td></tr>
    </table>
    <p>Estas palabras siempre van al inicio de la pregunta: <strong>Where is my phone?</strong>
    (¿Dónde está mi teléfono?) — <strong>How many books do you have?</strong> (¿Cuántos libros tienes?)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la palabra interrogativa correcta.",
      type: "mc",
      questions: [
        { prompt: "___ is your teacher? (persona)", options: ["What", "Who", "Where"], correct: 1,
          explanation: "'Who' se usa para preguntar por personas." },
        { prompt: "___ do you live? (lugar)", options: ["When", "Where", "Why"], correct: 1,
          explanation: "'Where' se usa para preguntar por lugares." },
        { prompt: "___ is your name? (qué)", options: ["What", "Who", "How"], correct: 0,
          explanation: "'What' se usa para pedir información general, como el nombre." },
        { prompt: "___ books do you have? (cuántos)", options: ["How much", "How many", "What"], correct: 1,
          explanation: "'How many' se usa con sustantivos contables en plural." },
        { prompt: "___ are you sad? (por qué)", options: ["Why", "When", "Who"], correct: 0,
          explanation: "'Why' se usa para preguntar por una razón." },
        { prompt: "___ is your birthday? (cuándo)", options: ["Where", "When", "How"], correct: 1,
          explanation: "'When' se usa para preguntar por el tiempo/momento." },
        { prompt: "___ do you go to school? (cómo, medio de transporte)", options: ["How", "Why", "What"], correct: 0,
          explanation: "'How' se usa para preguntar por la manera." },
        { prompt: "___ money do you have? (cuánto, incontable)", options: ["How many", "How much", "What"], correct: 1,
          explanation: "'How much' se usa con sustantivos incontables como 'money'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada pregunta con la palabra correcta.",
      type: "fill",
      questions: [
        { prompt: "___ is that person? (quién)", correct: ["who"], explanation: "'Who' pregunta por una persona." },
        { prompt: "___ do you live? (dónde)", correct: ["where"], explanation: "'Where' pregunta por un lugar." },
        { prompt: "___ is your favorite color? (qué)", correct: ["what"], explanation: "'What' pregunta por información general." },
        { prompt: "___ does the movie start? (cuándo)", correct: ["when"], explanation: "'When' pregunta por el tiempo." },
        { prompt: "___ are you late? (por qué)", correct: ["why"], explanation: "'Why' pregunta por una razón." },
        { prompt: "___ do you spell your name? (cómo)", correct: ["how"], explanation: "'How' pregunta por la manera." },
        { prompt: "___ students are in the class? (cuántos)", correct: ["how many"], explanation: "'How many' con sustantivos contables." },
        { prompt: "___ is this shirt? (cuánto, precio)", correct: ["how much"], explanation: "'How much' pregunta por precios/cantidades incontables." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la pregunta.",
      type: "order",
      questions: [
        { words: ["What", "is", "your", "name", "?"], translation: "¿Cuál es tu nombre?",
          explanation: "'What' + verbo 'is' + sujeto." },
        { words: ["Who", "is", "your", "best", "friend", "?"], translation: "¿Quién es tu mejor amigo?",
          explanation: "'Who' se usa para preguntar por una persona." },
        { words: ["Where", "do", "you", "work", "?"], translation: "¿Dónde trabajas?",
          explanation: "'Where' + verbo auxiliar 'do' + sujeto + verbo." },
        { words: ["When", "is", "your", "birthday", "?"], translation: "¿Cuándo es tu cumpleaños?",
          explanation: "'When' + verbo 'is' + sujeto." },
        { words: ["Why", "are", "you", "tired", "?"], translation: "¿Por qué estás cansado?",
          explanation: "'Why' + verbo 'are' + sujeto + adjetivo." },
        { words: ["How", "many", "brothers", "do", "you", "have", "?"], translation: "¿Cuántos hermanos tienes?",
          explanation: "'How many' + sustantivo + auxiliar 'do' + sujeto + verbo." },
        { words: ["How", "much", "is", "this", "?"], translation: "¿Cuánto cuesta esto?",
          explanation: "'How much' + verbo 'is' + sujeto." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada palabra interrogativa con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["what", "qué"], ["who", "quién"], ["where", "dónde"], ["why", "por qué"],
            ["when", "cuándo"], ["how", "cómo"], ["how many", "cuántos"],
          ],
          explanation: "Palabras interrogativas básicas del inglés." }
      ]
    }
  ]
};
