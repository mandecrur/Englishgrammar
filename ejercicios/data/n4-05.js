window.EXERCISE_DATA = {
  title: "Future Perfect",
  translation: "Futuro perfecto — completado antes de un momento futuro",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "by next year", es: "para el próximo año" },
    { en: "by then", es: "para entonces" },
    { en: "by the time", es: "para cuando" },
    { en: "graduate", es: "graduarse" },
    { en: "complete", es: "completar" },
    { en: "deadline", es: "fecha límite" },
    { en: "achieve", es: "lograr" },
    { en: "anniversary", es: "aniversario" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["by next year", "para el próximo año"], ["by then", "para entonces"], ["graduate", "graduarse"],
          ["complete", "completar"], ["deadline", "fecha límite"], ["achieve", "lograr"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El futuro perfecto se usa para hablar de una acción que <strong>estará completada</strong>
    antes de un momento específico en el futuro. Se forma con <strong>will have + participio pasado</strong>.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>I will have finished by 6 PM.</td><td>Habré terminado para las 6 PM.</td></tr>
      <tr><td>Negativa</td><td>She won't have arrived by then.</td><td>Ella no habrá llegado para entonces.</td></tr>
      <tr><td>Pregunta</td><td>Will you have finished by tomorrow?</td><td>¿Habrás terminado para mañana?</td></tr>
    </table>
    <p>Se usa frecuentemente con <strong>by</strong> (para/antes de) + un momento futuro:
    <strong>by next year</strong> (para el próximo año), <strong>by the time</strong> (para cuando),
    <strong>by then</strong> (para entonces).</p>
    <p>Ejemplo: <strong>By the time you arrive, I will have finished cooking.</strong>
    (Para cuando llegues, ya habré terminado de cocinar.)</p>
    <p>Es igual para todos los pronombres, no cambia. Solo el sujeto varía; el verbo auxiliar
    <strong>will have</strong> se mantiene siempre igual.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I will ___ finished by 6 PM.", options: ["have", "has", "be"], correct: 0,
          explanation: "'Will have' + participio pasado." },
        { prompt: "She will have ___ (arrive) by then.", options: ["arrive", "arrived", "arriving"], correct: 1,
          explanation: "'Will have' + participio pasado 'arrived'." },
        { prompt: "___ you have finished by tomorrow?", options: ["Will", "Do", "Have"], correct: 0,
          explanation: "Pregunta: Will + sujeto + have + participio." },
        { prompt: "By next year, we ___ have graduated.", options: ["will", "are", "do"], correct: 0,
          explanation: "'Will have' para acción completada antes de un momento futuro." },
        { prompt: "He won't ___ finished the project by Friday.", options: ["have", "has", "be"], correct: 0,
          explanation: "'Won't have' es la negación." },
        { prompt: "By the time she calls, I will ___ (leave).", options: ["leave", "left", "leaving"], correct: 1,
          explanation: "'Will have' + participio pasado 'left'." },
        { prompt: "They ___ have completed the course by June.", options: ["will", "are", "do"], correct: 0,
          explanation: "'Will have' + participio para lo completado antes de junio." },
        { prompt: "I ___ not have finished by then.", options: ["will", "am", "do"], correct: 0,
          explanation: "'Will not' (won't) es la forma negativa." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con will have + el participio correcto.",
      type: "fill",
      questions: [
        { prompt: "I ___ (finish) by 6 PM.", correct: ["will have finished"], explanation: "will have + participio." },
        { prompt: "She ___ (arrive) by then.", correct: ["will have arrived"], explanation: "will have + participio." },
        { prompt: "We ___ (not/complete) it by Friday.", correct: ["won't have completed"], explanation: "Negación: won't have + participio." },
        { prompt: "___ you ___ (graduate) by next year?", correct: ["will you have graduated"], explanation: "Pregunta: Will + sujeto + have + participio." },
        { prompt: "By the time you call, I ___ (leave).", correct: ["will have left"], explanation: "will have + participio." },
        { prompt: "He ___ (not/finish) the report by Monday.", correct: ["won't have finished"], explanation: "Negación: won't have + participio." },
        { prompt: "They ___ (achieve) their goal by December.", correct: ["will have achieved"], explanation: "will have + participio." },
        { prompt: "___ she ___ (write) the essay by tomorrow?", correct: ["will she have written"], explanation: "Pregunta: Will + sujeto + have + participio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "will", "have", "finished", "by", "6", "PM", "."], translation: "Habré terminado para las 6 PM.",
          explanation: "Orden: sujeto + will have + participio + tiempo." },
        { words: ["She", "will", "have", "arrived", "by", "then", "."], translation: "Ella habrá llegado para entonces.",
          explanation: "Orden: sujeto + will have + participio + tiempo." },
        { words: ["Will", "you", "have", "finished", "by", "tomorrow", "?"], translation: "¿Habrás terminado para mañana?",
          explanation: "Pregunta: Will + sujeto + have + participio." },
        { words: ["We", "won't", "have", "completed", "it", "."], translation: "No lo habremos completado.",
          explanation: "Negación: won't have + participio." },
        { words: ["By", "next", "year", ",", "I", "will", "have", "graduated", "."], translation: "Para el próximo año, me habré graduado.",
          explanation: "'By next year' + will have + participio." },
        { words: ["He", "will", "have", "left", "by", "the", "time", "you", "arrive", "."], translation: "Él se habrá ido para cuando llegues.",
          explanation: "Orden: sujeto + will have + participio + by the time + cláusula." },
        { words: ["They", "will", "have", "achieved", "their", "goal", "."], translation: "Ellos habrán logrado su meta.",
          explanation: "Orden: sujeto + will have + participio + objeto." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["I will have finished", "Habré terminado"], ["She will have arrived", "Ella habrá llegado"],
            ["Will you have finished?", "¿Habrás terminado?"], ["We won't have completed", "No habremos completado"],
            ["by next year", "para el próximo año"], ["by the time", "para cuando"], ["by then", "para entonces"],
          ],
          explanation: "El futuro perfecto marca lo que estará completado antes de un momento futuro." }
      ]
    }
  ]
};
