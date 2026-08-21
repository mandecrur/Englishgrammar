window.EXERCISE_DATA = {
  title: "Subject Pronouns",
  translation: "Pronombres de sujeto",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "I", es: "yo" },
    { en: "you", es: "tú / usted" },
    { en: "he", es: "él" },
    { en: "she", es: "ella" },
    { en: "it", es: "eso / ello" },
    { en: "we", es: "nosotros" },
    { en: "they", es: "ellos / ellas" },
    { en: "pronoun", es: "pronombre" },
  ],

  vocabExercise: {
    title: "Relaciona cada pronombre con su significado",
    instructions: "Une cada pronombre en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["I", "yo"], ["you", "tú / usted"], ["he", "él"],
          ["she", "ella"], ["we", "nosotros"], ["they", "ellos / ellas"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los pronombres de sujeto reemplazan al nombre de la persona o cosa que realiza la acción.</p>
    <table>
      <tr><th>Pronombre</th><th>Traducción</th><th>Ejemplo</th></tr>
      <tr><td>I</td><td>yo</td><td>I am a student.</td></tr>
      <tr><td>You</td><td>tú / usted</td><td>You are my friend.</td></tr>
      <tr><td>He</td><td>él</td><td>He is tall.</td></tr>
      <tr><td>She</td><td>ella</td><td>She is happy.</td></tr>
      <tr><td>It</td><td>eso / ello (animales, objetos)</td><td>It is a dog.</td></tr>
      <tr><td>We</td><td>nosotros</td><td>We are friends.</td></tr>
      <tr><td>They</td><td>ellos / ellas</td><td>They are students.</td></tr>
    </table>
    <p>A diferencia del español, en inglés <strong>siempre</strong> se debe usar el pronombre
    antes del verbo — no se puede omitir el sujeto. Por ejemplo, no se dice "Am happy",
    se debe decir <strong>I am happy.</strong></p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el pronombre correcto para reemplazar la palabra subrayada.",
      type: "mc",
      questions: [
        { prompt: "Maria is my sister. ___ is 20 years old.", options: ["She", "He", "It"], correct: 0,
          explanation: "'Maria' es femenino, se reemplaza con 'She'." },
        { prompt: "Carlos is a doctor. ___ works a lot.", options: ["She", "He", "They"], correct: 1,
          explanation: "'Carlos' es masculino, se reemplaza con 'He'." },
        { prompt: "My dog is friendly. ___ likes people.", options: ["He", "She", "It"], correct: 2,
          explanation: "Para animales normalmente se usa 'It'." },
        { prompt: "My parents are kind. ___ help everyone.", options: ["He", "They", "We"], correct: 1,
          explanation: "'My parents' es plural, se reemplaza con 'They'." },
        { prompt: "You and I are friends. ___ study together.", options: ["They", "We", "You"], correct: 1,
          explanation: "'You and I' se reemplaza con 'We'." },
        { prompt: "___ am a student. (yo)", options: ["I", "You", "He"], correct: 0,
          explanation: "'I' significa 'yo'." },
        { prompt: "___ are my best friend. (tú)", options: ["I", "You", "She"], correct: 1,
          explanation: "'You' significa 'tú'." },
        { prompt: "This book is interesting. ___ has 300 pages.", options: ["It", "He", "She"], correct: 0,
          explanation: "Para objetos se usa 'It'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con el pronombre correcto.",
      type: "fill",
      questions: [
        { prompt: "Ana is my friend. ___ is very kind.", correct: ["she"], explanation: "'Ana' es femenino → she." },
        { prompt: "Pedro and Luis are brothers. ___ live together.", correct: ["they"], explanation: "Plural masculino → they." },
        { prompt: "___ am from Peru. (yo)", correct: ["i"], explanation: "'I' significa 'yo'." },
        { prompt: "The car is fast. ___ is red.", correct: ["it"], explanation: "Objeto → it." },
        { prompt: "My mom and I cook together. ___ love it.", correct: ["we"], explanation: "'My mom and I' → we." },
        { prompt: "Juan is tall. ___ plays basketball.", correct: ["he"], explanation: "'Juan' es masculino → he." },
        { prompt: "___ are a good teacher. (tú)", correct: ["you"], explanation: "'You' significa 'tú'." },
        { prompt: "The students are smart. ___ study hard.", correct: ["they"], explanation: "Plural → they." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "am", "a", "student", "."], translation: "Soy estudiante.",
          explanation: "Orden: pronombre + verbo + complemento." },
        { words: ["She", "is", "my", "sister", "."], translation: "Ella es mi hermana.",
          explanation: "Orden: pronombre + verbo + complemento." },
        { words: ["They", "are", "very", "friendly", "."], translation: "Ellos son muy amigables.",
          explanation: "Orden: pronombre + verbo + adjetivo." },
        { words: ["We", "study", "English", "together", "."], translation: "Estudiamos inglés juntos.",
          explanation: "Orden: pronombre + verbo + objeto + adverbio." },
        { words: ["He", "works", "in", "a", "hospital", "."], translation: "Él trabaja en un hospital.",
          explanation: "Orden: pronombre + verbo + lugar." },
        { words: ["It", "is", "a", "beautiful", "day", "."], translation: "Es un día hermoso.",
          explanation: "'It' se usa para hablar del clima o el día." },
        { words: ["You", "are", "a", "great", "friend", "."], translation: "Eres un gran amigo.",
          explanation: "Orden: pronombre + verbo + complemento." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada pronombre con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["I", "yo"], ["you", "tú / usted"], ["he", "él"], ["she", "ella"],
            ["it", "eso / ello"], ["we", "nosotros"], ["they", "ellos / ellas"],
          ],
          explanation: "Los siete pronombres de sujeto del inglés." }
      ]
    }
  ]
};
