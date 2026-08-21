window.EXERCISE_DATA = {
  title: "Cause and Effect Connectors",
  translation: "Conectores de causa y efecto",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "because of", es: "debido a / a causa de" },
    { en: "due to", es: "debido a" },
    { en: "as a result", es: "como resultado" },
    { en: "therefore", es: "por lo tanto" },
    { en: "consequently", es: "en consecuencia" },
    { en: "since", es: "ya que / puesto que" },
    { en: "thus", es: "así / de este modo" },
    { en: "outcome", es: "resultado" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["because of", "debido a"], ["due to", "debido a"], ["as a result", "como resultado"],
          ["therefore", "por lo tanto"], ["consequently", "en consecuencia"], ["thus", "así"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Estos conectores expresan <strong>causa y efecto</strong>, con distintas estructuras
    gramaticales según el conector.</p>
    <table>
      <tr><th>Conector</th><th>Seguido de</th><th>Ejemplo</th></tr>
      <tr><td><strong>because</strong></td><td>sujeto + verbo (cláusula)</td><td>We stayed home because it was raining.</td></tr>
      <tr><td><strong>because of / due to</strong></td><td>sustantivo</td><td>We stayed home because of the rain.</td></tr>
      <tr><td><strong>therefore / consequently</strong></td><td>nueva oración, con coma</td><td>It was raining. Therefore, we stayed home.</td></tr>
      <tr><td><strong>so</strong></td><td>conecta dos partes de la oración</td><td>It was raining, so we stayed home.</td></tr>
    </table>
    <p>Error común: usar "because of" o "due to" seguido de una cláusula completa. Es incorrecto
    <em>"Because of it was raining"</em> ❌ — lo correcto es <strong>"Because of the rain"</strong> ✓</p>
    <p><strong>Therefore</strong> y <strong>consequently</strong> son más formales y suelen usarse
    en textos académicos o de negocios: <strong>The company lost money. Consequently, they had
    to lay off employees.</strong></p>
    <p>Ejemplo comparativo: <strong>Because he was late, he missed the bus.</strong> (causa primero)
    vs. <strong>He was late. As a result, he missed the bus.</strong> (causa, luego resultado en
    oración separada.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el conector correcto según la estructura.",
      type: "mc",
      questions: [
        { prompt: "We stayed home ___ it was raining. (+ cláusula)", options: ["because", "because of"], correct: 0,
          explanation: "'Because' va seguido de una cláusula completa." },
        { prompt: "We stayed home ___ the rain. (+ sustantivo)", options: ["because", "because of"], correct: 1,
          explanation: "'Because of' va seguido de un sustantivo." },
        { prompt: "It was raining. ___, we stayed home.", options: ["Therefore", "Because"], correct: 0,
          explanation: "'Therefore' inicia una nueva oración." },
        { prompt: "It was raining, ___ we stayed home.", options: ["therefore", "so"], correct: 1,
          explanation: "'So' conecta dos partes de la misma oración." },
        { prompt: "___ the traffic, we arrived late.", options: ["Because", "Due to"], correct: 1,
          explanation: "'Due to' va seguido de un sustantivo." },
        { prompt: "He didn't study. ___, he failed the exam.", options: ["Consequently", "Because"], correct: 0,
          explanation: "'Consequently' inicia una nueva oración." },
        { prompt: "___ he was tired, he went to bed early.", options: ["Because", "Because of"], correct: 0,
          explanation: "'Because' va seguido de una cláusula completa." },
        { prompt: "The company lost money. ___, they had to cut costs.", options: ["As a result", "Because"], correct: 0,
          explanation: "'As a result' inicia una nueva oración." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con el conector correcto.",
      type: "fill",
      questions: [
        { prompt: "___ he studied hard, he passed. (+ cláusula)", correct: ["because"], explanation: "'Because' + cláusula." },
        { prompt: "He passed ___ his hard work. (+ sustantivo)", correct: ["because of", "due to"], explanation: "'Because of/due to' + sustantivo." },
        { prompt: "It was late. ___, we left.", correct: ["therefore", "so", "consequently"], explanation: "Conector de resultado." },
        { prompt: "She was sick, ___ she stayed home.", correct: ["so"], explanation: "'So' conecta dos partes." },
        { prompt: "___ the weather, the flight was delayed.", correct: ["due to", "because of"], explanation: "'Due to/because of' + sustantivo." },
        { prompt: "He didn't sleep well. ___, he was tired all day.", correct: ["consequently", "as a result", "therefore"], explanation: "Conector de resultado." },
        { prompt: "___ she was late, she missed the meeting.", correct: ["because"], explanation: "'Because' + cláusula." },
        { prompt: "The team practiced hard. ___, they won the game.", correct: ["as a result", "consequently", "therefore"], explanation: "Conector de resultado." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["We", "stayed", "home", "because", "it", "was", "raining", "."], translation: "Nos quedamos en casa porque estaba lloviendo.",
          explanation: "'Because' + cláusula completa." },
        { words: ["We", "stayed", "home", "because", "of", "the", "rain", "."], translation: "Nos quedamos en casa debido a la lluvia.",
          explanation: "'Because of' + sustantivo." },
        { words: ["It", "was", "raining", ".", "Therefore", ",", "we", "stayed", "home", "."], translation: "Estaba lloviendo. Por lo tanto, nos quedamos en casa.",
          explanation: "'Therefore' inicia nueva oración." },
        { words: ["It", "was", "raining", ",", "so", "we", "stayed", "home", "."], translation: "Estaba lloviendo, así que nos quedamos en casa.",
          explanation: "'So' conecta las dos partes." },
        { words: ["Due", "to", "the", "traffic", ",", "we", "were", "late", "."], translation: "Debido al tráfico, llegamos tarde.",
          explanation: "'Due to' + sustantivo." },
        { words: ["He", "didn't", "study", ".", "Consequently", ",", "he", "failed", "."], translation: "No estudió. En consecuencia, reprobó.",
          explanation: "'Consequently' inicia nueva oración." },
        { words: ["The", "company", "lost", "money", ".", "As", "a", "result", ",", "they", "cut", "costs", "."], translation: "La empresa perdió dinero. Como resultado, recortaron costos.",
          explanation: "'As a result' inicia nueva oración." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada conector con su estructura correcta.",
      type: "match",
      questions: [
        { pairs: [
            ["because", "+ cláusula (sujeto+verbo)"], ["because of / due to", "+ sustantivo"],
            ["therefore", "nueva oración, con coma"], ["so", "conecta dos partes"],
            ["consequently", "nueva oración"], ["as a result", "nueva oración"], ["outcome", "resultado"],
          ],
          explanation: "Cada conector de causa/efecto requiere una estructura gramatical específica." }
      ]
    }
  ]
};
