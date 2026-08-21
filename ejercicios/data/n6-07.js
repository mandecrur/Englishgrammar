window.EXERCISE_DATA = {
  title: "Implied Conditions",
  translation: "Condiciones implícitas — sin decir 'if'",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "otherwise", es: "de otro modo" },
    { en: "without", es: "sin" },
    { en: "but for", es: "de no ser por" },
    { en: "with", es: "con (condición implícita)" },
    { en: "implied", es: "implícito" },
    { en: "unless", es: "a menos que" },
    { en: "given", es: "dado que / considerando" },
    { en: "assuming", es: "asumiendo que" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["otherwise", "de otro modo"], ["without", "sin"], ["but for", "de no ser por"],
          ["implied", "implícito"], ["given", "dado que"], ["assuming", "asumiendo que"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>A veces la condición no se expresa con "if" sino de forma <strong>implícita</strong>, a
    través de otras palabras o incluso sin ninguna palabra condicional explícita.</p>
    <table>
      <tr><th>Expresión</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td><strong>otherwise</strong></td><td>Hurry up, otherwise we'll be late.</td><td>Apúrate, de lo contrario llegaremos tarde.</td></tr>
      <tr><td><strong>without</strong></td><td>Without your help, I couldn't have finished.</td><td>Sin tu ayuda, no habría podido terminar.</td></tr>
      <tr><td><strong>but for</strong></td><td>But for the rain, we would have won.</td><td>De no ser por la lluvia, habríamos ganado.</td></tr>
      <tr><td><strong>given</strong></td><td>Given more time, she would succeed.</td><td>Dado más tiempo, ella tendría éxito.</td></tr>
    </table>
    <p><strong>Otherwise</strong> sustituye a una condición negativa implícita: "Study hard,
    otherwise you'll fail" significa "if you don't study hard, you'll fail".</p>
    <p><strong>Without</strong> y <strong>but for</strong> introducen la condición negativa
    directamente con un sustantivo: <strong>Without your support, I would have given up.</strong>
    (Sin tu apoyo, me habría rendido — equivale a "If it hadn't been for your support...")</p>
    <p>Estas estructuras son elegantes alternativas a las oraciones condicionales tradicionales,
    comunes en escritura formal.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "Hurry up, ___ we'll be late.", options: ["otherwise", "without"], correct: 0,
          explanation: "'Otherwise' expresa una consecuencia condicional negativa." },
        { prompt: "___ your help, I couldn't have finished.", options: ["Otherwise", "Without"], correct: 1,
          explanation: "'Without' introduce la condición negativa con sustantivo." },
        { prompt: "___ the rain, we would have won.", options: ["But for", "Otherwise"], correct: 0,
          explanation: "'But for' significa 'de no ser por'." },
        { prompt: "___ more time, she would succeed.", options: ["Given", "Otherwise"], correct: 0,
          explanation: "'Given' introduce una condición hipotética positiva." },
        { prompt: "Study hard, ___ you'll fail.", options: ["otherwise", "given"], correct: 0,
          explanation: "'Otherwise' expresa la consecuencia si no se cumple la condición." },
        { prompt: "___ his support, I would have quit.", options: ["Without", "Given"], correct: 0,
          explanation: "'Without' introduce la condición negativa." },
        { prompt: "___ the traffic, we would have arrived on time.", options: ["But for", "Given"], correct: 0,
          explanation: "'But for' significa 'de no ser por'." },
        { prompt: "___ enough resources, the project would fail.", options: ["Without", "Otherwise"], correct: 0,
          explanation: "'Without' introduce la condición negativa." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con otherwise, without, but for o given.",
      type: "fill",
      questions: [
        { prompt: "Leave now, ___ you'll miss the train.", correct: ["otherwise"], explanation: "'Otherwise' expresa consecuencia condicional." },
        { prompt: "___ your advice, I would have made a mistake.", correct: ["without"], explanation: "'Without' introduce condición negativa." },
        { prompt: "___ the accident, we would have been on time.", correct: ["but for"], explanation: "'But for' significa 'de no ser por'." },
        { prompt: "___ more practice, she could improve a lot.", correct: ["given"], explanation: "'Given' introduce condición hipotética." },
        { prompt: "Study now, ___ you won't pass the exam.", correct: ["otherwise"], explanation: "'Otherwise' expresa consecuencia condicional." },
        { prompt: "___ your generosity, we couldn't afford this.", correct: ["without"], explanation: "'Without' introduce condición negativa." },
        { prompt: "___ the storm, the flight would have left on time.", correct: ["but for"], explanation: "'But for' significa 'de no ser por'." },
        { prompt: "___ the right conditions, this plant could grow well.", correct: ["given"], explanation: "'Given' introduce condición hipotética." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["Hurry", "up", ",", "otherwise", "we'll", "be", "late", "."], translation: "Apúrate, de lo contrario llegaremos tarde.",
          explanation: "'Otherwise' expresa consecuencia condicional." },
        { words: ["Without", "your", "help", ",", "I", "couldn't", "have", "finished", "."], translation: "Sin tu ayuda, no habría podido terminar.",
          explanation: "'Without' + sustantivo introduce condición negativa." },
        { words: ["But", "for", "the", "rain", ",", "we", "would", "have", "won", "."], translation: "De no ser por la lluvia, habríamos ganado.",
          explanation: "'But for' + sustantivo introduce condición negativa." },
        { words: ["Given", "more", "time", ",", "she", "would", "succeed", "."], translation: "Dado más tiempo, ella tendría éxito.",
          explanation: "'Given' + sustantivo introduce condición hipotética." },
        { words: ["Study", "hard", ",", "otherwise", "you'll", "fail", "."], translation: "Estudia duro, de lo contrario reprobarás.",
          explanation: "'Otherwise' expresa consecuencia condicional." },
        { words: ["Without", "his", "support", ",", "I", "would", "have", "quit", "."], translation: "Sin su apoyo, habría renunciado.",
          explanation: "'Without' + sustantivo introduce condición negativa." },
        { words: ["But", "for", "the", "traffic", ",", "we", "would", "be", "there", "."], translation: "De no ser por el tráfico, estaríamos ahí.",
          explanation: "'But for' + sustantivo introduce condición negativa." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada expresión con su función.",
      type: "match",
      questions: [
        { pairs: [
            ["otherwise", "de lo contrario"], ["without", "sin (condición negativa)"],
            ["but for", "de no ser por"], ["given", "dado que / considerando"],
            ["implied", "implícito"], ["assuming", "asumiendo que"], ["unless", "a menos que"],
          ],
          explanation: "Estas palabras expresan condición sin usar 'if' directamente." }
      ]
    }
  ]
};
