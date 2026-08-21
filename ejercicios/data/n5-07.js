window.EXERCISE_DATA = {
  title: "Stative Passive + Prepositions",
  translation: "Voz pasiva de estado con preposiciones fijas",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "be married to", es: "estar casado con" },
    { en: "be interested in", es: "estar interesado en" },
    { en: "be worried about", es: "estar preocupado por" },
    { en: "be tired of", es: "estar cansado de" },
    { en: "be satisfied with", es: "estar satisfecho con" },
    { en: "be known for", es: "ser conocido por" },
    { en: "be made of", es: "estar hecho de" },
    { en: "be composed of", es: "estar compuesto de" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["be married to", "estar casado con"], ["be interested in", "estar interesado en"], ["be worried about", "estar preocupado por"],
          ["be tired of", "estar cansado de"], ["be satisfied with", "estar satisfecho con"], ["be known for", "ser conocido por"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>La <strong>voz pasiva de estado</strong> describe una condición o estado permanente
    (no una acción), y va seguida de una <strong>preposición fija</strong> que hay que memorizar.</p>
    <table>
      <tr><th>Expresión</th><th>Traducción</th><th>Ejemplo</th></tr>
      <tr><td>be married to</td><td>estar casado con</td><td>She is married to a doctor.</td></tr>
      <tr><td>be interested in</td><td>estar interesado en</td><td>I'm interested in art.</td></tr>
      <tr><td>be worried about</td><td>estar preocupado por</td><td>He's worried about the exam.</td></tr>
      <tr><td>be tired of</td><td>estar cansado de</td><td>She's tired of waiting.</td></tr>
      <tr><td>be satisfied with</td><td>estar satisfecho con</td><td>We're satisfied with the results.</td></tr>
      <tr><td>be known for</td><td>ser conocido por</td><td>This city is known for its food.</td></tr>
      <tr><td>be made of</td><td>estar hecho de</td><td>This table is made of wood.</td></tr>
      <tr><td>be composed of</td><td>estar compuesto de</td><td>Water is composed of hydrogen and oxygen.</td></tr>
      <tr><td>be covered with/in</td><td>estar cubierto de</td><td>The ground was covered with snow.</td></tr>
      <tr><td>be filled with</td><td>estar lleno de</td><td>The box is filled with books.</td></tr>
    </table>
    <p>A diferencia de la voz pasiva de acción, aquí no importa quién hizo la acción — es solo una
    descripción de un estado. No se usa "by" en estas expresiones.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la preposición correcta.",
      type: "mc",
      questions: [
        { prompt: "She is married ___ a doctor.", options: ["to", "with", "for"], correct: 0,
          explanation: "'Married to' es la expresión fija correcta." },
        { prompt: "I'm interested ___ learning Spanish.", options: ["in", "for", "with"], correct: 0,
          explanation: "'Interested in' es la expresión fija correcta." },
        { prompt: "He's worried ___ his health.", options: ["about", "for", "of"], correct: 0,
          explanation: "'Worried about' es la expresión fija correcta." },
        { prompt: "She's tired ___ waiting for the bus.", options: ["of", "with", "for"], correct: 0,
          explanation: "'Tired of' es la expresión fija correcta." },
        { prompt: "We're satisfied ___ the service.", options: ["with", "of", "for"], correct: 0,
          explanation: "'Satisfied with' es la expresión fija correcta." },
        { prompt: "This city is known ___ its architecture.", options: ["for", "of", "with"], correct: 0,
          explanation: "'Known for' es la expresión fija correcta." },
        { prompt: "This table is made ___ wood.", options: ["of", "with", "from"], correct: 0,
          explanation: "'Made of' es la expresión fija correcta." },
        { prompt: "The box is filled ___ old photos.", options: ["with", "of", "for"], correct: 0,
          explanation: "'Filled with' es la expresión fija correcta." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la preposición correcta.",
      type: "fill",
      questions: [
        { prompt: "She is married ___ an engineer.", correct: ["to"], explanation: "married to." },
        { prompt: "I am interested ___ history.", correct: ["in"], explanation: "interested in." },
        { prompt: "He's worried ___ the exam.", correct: ["about"], explanation: "worried about." },
        { prompt: "I'm tired ___ this job.", correct: ["of"], explanation: "tired of." },
        { prompt: "We're satisfied ___ the results.", correct: ["with"], explanation: "satisfied with." },
        { prompt: "This place is known ___ its beaches.", correct: ["for"], explanation: "known for." },
        { prompt: "This ring is made ___ gold.", correct: ["of"], explanation: "made of." },
        { prompt: "The room was covered ___ dust.", correct: ["with", "in"], explanation: "covered with/in." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["She", "is", "married", "to", "a", "doctor", "."], translation: "Ella está casada con un doctor.",
          explanation: "'Married to' es la expresión fija." },
        { words: ["I", "am", "interested", "in", "art", "."], translation: "Estoy interesado en el arte.",
          explanation: "'Interested in' es la expresión fija." },
        { words: ["He", "is", "worried", "about", "the", "future", "."], translation: "Él está preocupado por el futuro.",
          explanation: "'Worried about' es la expresión fija." },
        { words: ["She", "is", "tired", "of", "waiting", "."], translation: "Ella está cansada de esperar.",
          explanation: "'Tired of' es la expresión fija." },
        { words: ["This", "city", "is", "known", "for", "its", "food", "."], translation: "Esta ciudad es conocida por su comida.",
          explanation: "'Known for' es la expresión fija." },
        { words: ["This", "table", "is", "made", "of", "wood", "."], translation: "Esta mesa está hecha de madera.",
          explanation: "'Made of' es la expresión fija." },
        { words: ["The", "box", "is", "filled", "with", "books", "."], translation: "La caja está llena de libros.",
          explanation: "'Filled with' es la expresión fija." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada expresión con su preposición correspondiente.",
      type: "match",
      questions: [
        { pairs: [
            ["married", "to"], ["interested", "in"], ["worried", "about"], ["tired", "of"],
            ["satisfied", "with"], ["known", "for"], ["made", "of"],
          ],
          explanation: "Cada adjetivo pasivo de estado tiene una preposición fija que memorizar." }
      ]
    }
  ]
};
