window.EXERCISE_DATA = {
  title: "Prepositions of Time (at, on, in)",
  translation: "Preposiciones de tiempo",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "clock", es: "reloj" },
    { en: "midnight", es: "medianoche" },
    { en: "noon", es: "mediodía" },
    { en: "birthday", es: "cumpleaños" },
    { en: "holiday", es: "día festivo / vacaciones" },
    { en: "schedule", es: "horario" },
    { en: "appointment", es: "cita" },
    { en: "meeting", es: "reunión" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["clock", "reloj"], ["midnight", "medianoche"], ["noon", "mediodía"],
          ["birthday", "cumpleaños"], ["holiday", "día festivo"], ["meeting", "reunión"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <table>
      <tr><th>Preposición</th><th>Uso</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td><strong>at</strong></td><td>horas exactas</td><td>at 5 o'clock, at midnight</td><td>a las 5 en punto, a medianoche</td></tr>
      <tr><td><strong>on</strong></td><td>días y fechas</td><td>on Monday, on July 4th</td><td>el lunes, el 4 de julio</td></tr>
      <tr><td><strong>in</strong></td><td>meses, años, estaciones</td><td>in July, in 2024, in summer</td><td>en julio, en 2024, en verano</td></tr>
    </table>
    <p>Regla práctica: piensa en <strong>at</strong> para un punto exacto en el tiempo,
    <strong>on</strong> para un día concreto, e <strong>in</strong> para periodos más largos (meses, años, estaciones).</p>
    <p>Excepciones comunes que debes memorizar: <strong>at night</strong> (por la noche),
    <strong>on the weekend</strong> (el fin de semana), <strong>in the morning/afternoon/evening</strong> (por la mañana/tarde/noche).</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la preposición correcta.",
      type: "mc",
      questions: [
        { prompt: "I wake up ___ 7 AM.", options: ["at", "on", "in"], correct: 0,
          explanation: "Con horas exactas se usa 'at'." },
        { prompt: "My birthday is ___ May.", options: ["at", "on", "in"], correct: 2,
          explanation: "Con meses se usa 'in'." },
        { prompt: "We have class ___ Mondays.", options: ["at", "on", "in"], correct: 1,
          explanation: "Con días de la semana se usa 'on'." },
        { prompt: "She was born ___ 1998.", options: ["at", "on", "in"], correct: 2,
          explanation: "Con años se usa 'in'." },
        { prompt: "The meeting is ___ noon.", options: ["at", "on", "in"], correct: 0,
          explanation: "'Noon' (mediodía) es un punto exacto, se usa 'at'." },
        { prompt: "I study ___ the morning.", options: ["at", "on", "in"], correct: 2,
          explanation: "Con partes del día (morning/afternoon/evening) se usa 'in', excepto 'at night'." },
        { prompt: "We sleep ___ night.", options: ["at", "on", "in"], correct: 0,
          explanation: "'At night' es una excepción común que se debe memorizar." },
        { prompt: "Her appointment is ___ March 5th.", options: ["at", "on", "in"], correct: 1,
          explanation: "Con fechas específicas se usa 'on'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con la preposición correcta.",
      type: "fill",
      questions: [
        { prompt: "I have a meeting ___ 3 PM.", correct: ["at"], explanation: "Con horas exactas se usa 'at'." },
        { prompt: "We celebrate Christmas ___ December.", correct: ["in"], explanation: "Con meses se usa 'in'." },
        { prompt: "My class is ___ Tuesdays.", correct: ["on"], explanation: "Con días se usa 'on'." },
        { prompt: "The store closes ___ midnight.", correct: ["at"], explanation: "'Midnight' es un punto exacto, se usa 'at'." },
        { prompt: "I was born ___ 2005.", correct: ["in"], explanation: "Con años se usa 'in'." },
        { prompt: "We relax ___ the weekend.", correct: ["on"], explanation: "'On the weekend' es la expresión correcta." },
        { prompt: "It often rains ___ spring.", correct: ["in"], explanation: "Con estaciones se usa 'in'." },
        { prompt: "I go to bed ___ night.", correct: ["at"], explanation: "'At night' es una excepción que se memoriza." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "wake", "up", "at", "seven", "."], translation: "Me despierto a las siete.",
          explanation: "Orden: sujeto + verbo + preposición + hora." },
        { words: ["My", "birthday", "is", "in", "June", "."], translation: "Mi cumpleaños es en junio.",
          explanation: "Orden: sujeto + verbo + preposición + mes." },
        { words: ["We", "have", "class", "on", "Fridays", "."], translation: "Tenemos clase los viernes.",
          explanation: "Con días de la semana se usa 'on'." },
        { words: ["The", "party", "starts", "at", "eight", "."], translation: "La fiesta empieza a las ocho.",
          explanation: "Orden: sujeto + verbo + preposición + hora." },
        { words: ["It", "snows", "a", "lot", "in", "winter", "."], translation: "Nieva mucho en invierno.",
          explanation: "Con estaciones se usa 'in'." },
        { words: ["I", "don't", "work", "on", "Sundays", "."], translation: "No trabajo los domingos.",
          explanation: "Negación con 'don't' antes del verbo." },
        { words: ["The", "movie", "starts", "at", "nine", "PM", "."], translation: "La película empieza a las nueve de la noche.",
          explanation: "Orden: sujeto + verbo + preposición + hora." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada expresión con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["at night", "por la noche"], ["on Friday", "el viernes"], ["in winter", "en invierno"],
            ["at noon", "al mediodía"], ["in 2020", "en 2020"], ["on my birthday", "en mi cumpleaños"],
            ["at midnight", "a medianoche"],
          ],
          explanation: "Practica combinando at/on/in con distintas expresiones de tiempo." }
      ]
    }
  ]
};
