window.EXERCISE_DATA = {
  title: "Advanced Deduction Modals",
  translation: "Modales avanzados de deducción combinados",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "presumably", es: "presumiblemente" },
    { en: "conceivably", es: "posiblemente / concebiblemente" },
    { en: "in all likelihood", es: "con toda probabilidad" },
    { en: "undoubtedly", es: "sin duda" },
    { en: "arguably", es: "podría decirse que" },
    { en: "supposedly", es: "supuestamente" },
    { en: "apparently", es: "aparentemente" },
    { en: "allegedly", es: "presuntamente" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["presumably", "presumiblemente"], ["undoubtedly", "sin duda"], ["arguably", "podría decirse que"],
          ["supposedly", "supuestamente"], ["apparently", "aparentemente"], ["allegedly", "presuntamente"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>En un nivel avanzado, los modales de deducción se combinan con formas continuas y perfectas
    para expresar matices más precisos sobre certeza, tiempo y evidencia.</p>
    <table>
      <tr><th>Estructura</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>must have been + verbo-ing</td><td>She must have been sleeping when I called.</td><td>Debe haber estado durmiendo cuando llamé.</td></tr>
      <tr><td>can't have been + verbo-ing</td><td>He can't have been working all night.</td><td>No puede haber estado trabajando toda la noche.</td></tr>
      <tr><td>should have been + participio</td><td>The package should have been delivered by now.</td><td>El paquete ya debería haber sido entregado.</td></tr>
    </table>
    <p>Estos combinan tres capas: el modal (grado de certeza/expectativa), "have been" (tiempo
    pasado), y el verbo-ing o participio (continuidad o pasividad).</p>
    <p>Ejemplo: <strong>They must have been waiting for hours.</strong>
    (Deben haber estado esperando durante horas — deducción fuerte sobre un proceso pasado
    prolongado.)</p>
    <p>Estas estructuras son comunes en textos analíticos, informes y conversaciones formales
    donde se necesita expresar niveles matizados de certeza.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "She must have been ___ (sleep) when I called.", options: ["sleep", "sleeping", "slept"], correct: 1,
          explanation: "'Have been' + verbo-ing para deducción continua pasada." },
        { prompt: "He can't have been ___ (work) all night, he looks fresh.", options: ["work", "working", "worked"], correct: 1,
          explanation: "'Have been' + verbo-ing para deducción continua pasada." },
        { prompt: "The package should have been ___ (deliver) by now.", options: ["deliver", "delivering", "delivered"], correct: 2,
          explanation: "'Should have been' + participio para voz pasiva esperada." },
        { prompt: "They must have been ___ (wait) for hours.", options: ["wait", "waiting", "waited"], correct: 1,
          explanation: "'Have been' + verbo-ing para deducción continua." },
        { prompt: "She might have been ___ (feel) nervous.", options: ["feel", "feeling", "felt"], correct: 1,
          explanation: "'Have been' + verbo-ing para posibilidad continua." },
        { prompt: "The house should have been ___ (paint) already.", options: ["paint", "painting", "painted"], correct: 2,
          explanation: "'Should have been' + participio para voz pasiva esperada." },
        { prompt: "He must have been ___ (drive) fast to get here so quickly.", options: ["drive", "driving", "driven"], correct: 1,
          explanation: "'Have been' + verbo-ing para deducción continua." },
        { prompt: "The report should have been ___ (finish) yesterday.", options: ["finish", "finishing", "finished"], correct: 2,
          explanation: "'Should have been' + participio para voz pasiva esperada." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma correcta del modal avanzado.",
      type: "fill",
      questions: [
        { prompt: "She ___ (must/sleep) when I called.", correct: ["must have been sleeping"], explanation: "must have been + verbo-ing." },
        { prompt: "He ___ (can't/work) all night.", correct: ["can't have been working"], explanation: "can't have been + verbo-ing." },
        { prompt: "The package ___ (should/deliver) already.", correct: ["should have been delivered"], explanation: "should have been + participio." },
        { prompt: "They ___ (must/wait) a long time.", correct: ["must have been waiting"], explanation: "must have been + verbo-ing." },
        { prompt: "She ___ (might/feel) sick.", correct: ["might have been feeling"], explanation: "might have been + verbo-ing." },
        { prompt: "The project ___ (should/finish) by now.", correct: ["should have been finished"], explanation: "should have been + participio." },
        { prompt: "He ___ (must/drive) too fast.", correct: ["must have been driving"], explanation: "must have been + verbo-ing." },
        { prompt: "The room ___ (should/clean) before we arrived.", correct: ["should have been cleaned"], explanation: "should have been + participio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["She", "must", "have", "been", "sleeping", "when", "I", "called", "."], translation: "Debe haber estado durmiendo cuando llamé.",
          explanation: "must have been + verbo-ing." },
        { words: ["He", "can't", "have", "been", "working", "all", "night", "."], translation: "No puede haber estado trabajando toda la noche.",
          explanation: "can't have been + verbo-ing." },
        { words: ["The", "package", "should", "have", "been", "delivered", "already", "."], translation: "El paquete ya debería haber sido entregado.",
          explanation: "should have been + participio." },
        { words: ["They", "must", "have", "been", "waiting", "for", "hours", "."], translation: "Deben haber estado esperando durante horas.",
          explanation: "must have been + verbo-ing." },
        { words: ["She", "might", "have", "been", "feeling", "nervous", "."], translation: "Puede que haya estado sintiéndose nerviosa.",
          explanation: "might have been + verbo-ing." },
        { words: ["The", "house", "should", "have", "been", "painted", "already", "."], translation: "La casa ya debería haber sido pintada.",
          explanation: "should have been + participio." },
        { words: ["He", "must", "have", "been", "driving", "very", "fast", "."], translation: "Debe haber estado manejando muy rápido.",
          explanation: "must have been + verbo-ing." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada estructura con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["must have been sleeping", "debe haber estado durmiendo"], ["can't have been working", "no puede haber estado trabajando"],
            ["should have been delivered", "debería haber sido entregado"], ["might have been feeling", "puede que haya estado sintiendo"],
            ["presumably", "presumiblemente"], ["undoubtedly", "sin duda"], ["apparently", "aparentemente"],
          ],
          explanation: "Estas estructuras combinan modal + have been + verbo-ing/participio." }
      ]
    }
  ]
};
