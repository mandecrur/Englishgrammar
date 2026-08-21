window.EXERCISE_DATA = {
  title: "Present Certainty (must / may / can't be)",
  translation: "Deducciones lógicas en presente",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "certain", es: "seguro / cierto" },
    { en: "deduction", es: "deducción" },
    { en: "impossible", es: "imposible" },
    { en: "logical", es: "lógico" },
    { en: "evidence", es: "evidencia" },
    { en: "conclude", es: "concluir" },
    { en: "obviously", es: "obviamente" },
    { en: "assume", es: "asumir / suponer" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["certain", "seguro / cierto"], ["deduction", "deducción"], ["impossible", "imposible"],
          ["logical", "lógico"], ["evidence", "evidencia"], ["assume", "asumir"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Estos modales expresan qué tan <strong>seguro</strong> estás de algo, basándote en evidencia
    o lógica, no en hechos confirmados.</p>
    <table>
      <tr><th>Modal</th><th>Grado de certeza</th><th>Ejemplo</th></tr>
      <tr><td><strong>must be</strong></td><td>casi seguro (deducción fuerte)</td><td>He must be tired. (trabajó todo el día)</td></tr>
      <tr><td><strong>may/might be</strong></td><td>posible, no seguro</td><td>She may be at home.</td></tr>
      <tr><td><strong>can't be</strong></td><td>casi seguro que NO (imposible)</td><td>That can't be true.</td></tr>
    </table>
    <p>Ejemplo de razonamiento: <strong>The light is on. Someone must be home.</strong>
    (La luz está encendida. Alguien debe estar en casa — deducción lógica basada en evidencia.)</p>
    <p><strong>Can't be</strong> expresa que algo es prácticamente imposible según lo que sabes:
    <strong>He can't be at work, I just saw him at the mall.</strong>
    (No puede estar en el trabajo, lo acabo de ver en el centro comercial.)</p>
    <p>Nota: no se usa "must not be" para expresar esta idea de imposibilidad — se usa
    <strong>can't be</strong>. "Must not" tiene un significado distinto (prohibición).</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el modal correcto según el grado de certeza.",
      type: "mc",
      questions: [
        { prompt: "He worked all day. He ___ be tired. (casi seguro)", options: ["must", "may", "can't"], correct: 0,
          explanation: "'Must' expresa una deducción fuerte, casi segura." },
        { prompt: "She ___ be at home, I'm not sure. (posible)", options: ["must", "may", "can't"], correct: 1,
          explanation: "'May' expresa posibilidad, sin certeza." },
        { prompt: "That ___ be true, I saw it happen myself. (imposible)", options: ["must", "may", "can't"], correct: 2,
          explanation: "'Can't be' expresa que algo es imposible." },
        { prompt: "The light is on. Someone ___ be home.", options: ["must", "may", "can't"], correct: 0,
          explanation: "Evidencia clara (luz encendida) sugiere una deducción fuerte." },
        { prompt: "He ___ be at work, I just saw him at the mall.", options: ["must", "may", "can't"], correct: 2,
          explanation: "Evidencia contradictoria hace la situación imposible." },
        { prompt: "It ___ be Maria, I'm not sure who it is.", options: ["must", "might", "can't"], correct: 1,
          explanation: "'Might' expresa posibilidad, incertidumbre." },
        { prompt: "This food is cold. It ___ be from yesterday.", options: ["must", "may", "can't"], correct: 0,
          explanation: "Evidencia clara sugiere una deducción fuerte." },
        { prompt: "She's only ten. That ___ be her car.", options: ["must", "may", "can't"], correct: 2,
          explanation: "Es imposible que una niña de diez años tenga carro." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con must, may/might, o can't según el grado de certeza.",
      type: "fill",
      questions: [
        { prompt: "He looks exhausted. He ___ (be) very tired.", correct: ["must be"], explanation: "Deducción fuerte con evidencia clara." },
        { prompt: "I'm not sure, but she ___ (be) at the office.", correct: ["may be", "might be"], explanation: "Posibilidad, sin certeza." },
        { prompt: "That ___ (be) right, I checked it myself.", correct: ["can't be"], explanation: "Imposibilidad basada en evidencia." },
        { prompt: "The dog is barking. Someone ___ (be) outside.", correct: ["must be"], explanation: "Deducción fuerte con evidencia clara." },
        { prompt: "He ___ (be) home, his car isn't here.", correct: ["can't be"], explanation: "Imposibilidad basada en evidencia (carro ausente)." },
        { prompt: "It ___ (be) John, but I'm not certain.", correct: ["may be", "might be"], explanation: "Posibilidad, sin certeza." },
        { prompt: "The lights are off. They ___ (not/be) home.", correct: ["must not be", "can't be"], explanation: "Deducción/imposibilidad según evidencia." },
        { prompt: "This ___ (be) the most expensive restaurant in town.", correct: ["must be"], explanation: "Deducción fuerte." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["He", "must", "be", "very", "tired", "."], translation: "Él debe estar muy cansado.",
          explanation: "Deducción fuerte con 'must be'." },
        { words: ["She", "may", "be", "at", "home", "."], translation: "Puede que ella esté en casa.",
          explanation: "Posibilidad con 'may be'." },
        { words: ["That", "can't", "be", "true", "."], translation: "Eso no puede ser cierto.",
          explanation: "Imposibilidad con 'can't be'." },
        { words: ["Someone", "must", "be", "home", "."], translation: "Alguien debe estar en casa.",
          explanation: "Deducción fuerte con evidencia." },
        { words: ["He", "can't", "be", "at", "work", "."], translation: "Él no puede estar en el trabajo.",
          explanation: "Imposibilidad con evidencia contradictoria." },
        { words: ["It", "might", "be", "Maria", "."], translation: "Podría ser María.",
          explanation: "Posibilidad con 'might be'." },
        { words: ["This", "must", "be", "the", "right", "house", "."], translation: "Esta debe ser la casa correcta.",
          explanation: "Deducción fuerte con 'must be'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada modal con su grado de certeza.",
      type: "match",
      questions: [
        { pairs: [
            ["must be", "casi seguro"], ["may/might be", "posible, no seguro"],
            ["can't be", "casi imposible"], ["evidence", "evidencia"],
            ["deduction", "deducción"], ["certain", "seguro"], ["obviously", "obviamente"],
          ],
          explanation: "Estos modales expresan diferentes niveles de certeza basados en evidencia." }
      ]
    }
  ]
};
