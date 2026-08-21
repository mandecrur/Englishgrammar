window.EXERCISE_DATA = {
  title: "Advanced Passive Structures",
  translation: "Estructuras pasivas avanzadas con verbos de percepción",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "believed to be", es: "creído que es" },
    { en: "reported to be", es: "reportado que es" },
    { en: "said to be", es: "dicho que es" },
    { en: "known to be", es: "conocido por ser" },
    { en: "thought to be", es: "pensado que es" },
    { en: "considered", es: "considerado" },
    { en: "alleged", es: "presunto" },
    { en: "rumor", es: "rumor" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["believed to be", "creído que es"], ["reported to be", "reportado que es"], ["said to be", "dicho que es"],
          ["known to be", "conocido por ser"], ["considered", "considerado"], ["alleged", "presunto"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Con verbos de opinión/reporte (believe, say, think, know, report, consider), existe una
    estructura pasiva especial muy usada en noticias y textos formales.</p>
    <table>
      <tr><th>Estructura</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>It + be + participio + that</td><td>It is believed that he is guilty.</td><td>Se cree que él es culpable.</td></tr>
      <tr><td>Sujeto + be + participio + to + infinitivo</td><td>He is believed to be guilty.</td><td>Se cree que él es culpable. (más directo)</td></tr>
    </table>
    <p>Estas estructuras se usan cuando no se sabe (o no se quiere decir) quién exactamente
    tiene esa opinión — común en periodismo: <strong>The suspect is said to have fled the country.</strong>
    (Se dice que el sospechoso huyó del país.)</p>
    <p>Verbos comunes en esta estructura: <strong>believe, think, say, know, report, consider,
    understand, expect</strong>.</p>
    <p>Ejemplo con infinitivo perfecto (para acciones pasadas): <strong>He is reported to have
    left the city.</strong> (Se reporta que se fue de la ciudad.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "It is believed ___ he is guilty.", options: ["that", "to"], correct: 0,
          explanation: "'It is + participio + that' es la estructura con 'it'." },
        { prompt: "He is believed ___ be guilty.", options: ["that", "to"], correct: 1,
          explanation: "'Sujeto + is + participio + to' es la estructura más directa." },
        { prompt: "The suspect is said ___ have fled the country.", options: ["to", "that"], correct: 0,
          explanation: "'To have' se usa para acciones pasadas en esta estructura." },
        { prompt: "She is known ___ be very talented.", options: ["to", "that"], correct: 0,
          explanation: "'To be' + adjetivo en esta estructura." },
        { prompt: "It is reported ___ the company is closing.", options: ["that", "to"], correct: 0,
          explanation: "'It is + participio + that' es la estructura con 'it'." },
        { prompt: "He is thought ___ (be) in Europe now.", options: ["be", "to be"], correct: 1,
          explanation: "'To be' completa la estructura." },
        { prompt: "They are considered ___ be experts.", options: ["to", "that"], correct: 0,
          explanation: "'To be' se usa en esta estructura." },
        { prompt: "The building is understood ___ (have/be built) in 1920.", options: ["to have been built", "to be built"], correct: 0,
          explanation: "Infinitivo perfecto para acciones ya completadas en el pasado." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la estructura pasiva correcta.",
      type: "fill",
      questions: [
        { prompt: "It ___ (believe) that he is innocent.", correct: ["is believed"], explanation: "it + is + participio + that." },
        { prompt: "He ___ (believe) to be guilty.", correct: ["is believed"], explanation: "sujeto + is + participio + to." },
        { prompt: "She is ___ (know) to be very smart.", correct: ["known"], explanation: "is + participio + to be." },
        { prompt: "The company ___ (report) to be struggling.", correct: ["is reported"], explanation: "is + participio + to be." },
        { prompt: "It is ___ (say) that he left the city.", correct: ["said"], explanation: "it + is + participio + that." },
        { prompt: "They are ___ (consider) to be the best team.", correct: ["considered"], explanation: "are + participio + to be." },
        { prompt: "He is ___ (think) to be in Madrid now.", correct: ["thought"], explanation: "is + participio + to be." },
        { prompt: "The building is ___ (understand) to have been built in 1920.", correct: ["understood"], explanation: "is + participio + to have been." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["It", "is", "believed", "that", "he", "is", "guilty", "."], translation: "Se cree que él es culpable.",
          explanation: "'It is + participio + that' estructura pasiva." },
        { words: ["He", "is", "believed", "to", "be", "guilty", "."], translation: "Se cree que él es culpable. (versión directa)",
          explanation: "'Sujeto + is + participio + to' estructura." },
        { words: ["The", "suspect", "is", "said", "to", "have", "fled", "."], translation: "Se dice que el sospechoso huyó.",
          explanation: "'To have' para acciones pasadas." },
        { words: ["She", "is", "known", "to", "be", "very", "talented", "."], translation: "Se sabe que ella es muy talentosa.",
          explanation: "'Is known to be' estructura." },
        { words: ["It", "is", "reported", "that", "the", "company", "is", "closing", "."], translation: "Se reporta que la empresa está cerrando.",
          explanation: "'It is + participio + that' estructura." },
        { words: ["He", "is", "thought", "to", "be", "in", "Europe", "."], translation: "Se piensa que está en Europa.",
          explanation: "'Is thought to be' estructura." },
        { words: ["They", "are", "considered", "to", "be", "experts", "."], translation: "Se les considera expertos.",
          explanation: "'Are considered to be' estructura." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada estructura con su equivalente.",
      type: "match",
      questions: [
        { pairs: [
            ["It is believed that", "He is believed to be"], ["It is said that", "He is said to be"],
            ["It is thought that", "He is thought to be"], ["It is reported that", "He is reported to be"],
            ["believed to be", "creído que es"], ["alleged", "presunto"], ["rumor", "rumor"],
          ],
          explanation: "Ambas estructuras (con 'it' y con sujeto directo) significan lo mismo." }
      ]
    }
  ]
};
