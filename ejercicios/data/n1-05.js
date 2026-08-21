window.EXERCISE_DATA = {
  title: "Days of the Week, Months, Seasons",
  translation: "Días, meses y estaciones del año",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "week", es: "semana" },
    { en: "month", es: "mes" },
    { en: "year", es: "año" },
    { en: "today", es: "hoy" },
    { en: "tomorrow", es: "mañana (el día siguiente)" },
    { en: "yesterday", es: "ayer" },
    { en: "season", es: "estación (del año)" },
    { en: "weekend", es: "fin de semana" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["week", "semana"], ["month", "mes"], ["year", "año"],
          ["today", "hoy"], ["tomorrow", "mañana (día siguiente)"], ["weekend", "fin de semana"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>Días de la semana:</strong> Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.</p>
    <p><strong>Meses:</strong> January, February, March, April, May, June, July, August, September,
    October, November, December.</p>
    <p><strong>Estaciones:</strong> spring (primavera), summer (verano), autumn/fall (otoño), winter (invierno).</p>
    <p>Los días y meses siempre se escriben con <strong>mayúscula inicial</strong> en inglés, a diferencia del español.</p>
    <table>
      <tr><th>Inglés</th><th>Traducción</th></tr>
      <tr><td>Monday</td><td>Lunes</td></tr>
      <tr><td>Saturday</td><td>Sábado</td></tr>
      <tr><td>January</td><td>Enero</td></tr>
      <tr><td>December</td><td>Diciembre</td></tr>
    </table>
    <p>Para preguntar el día se usa: <strong>What day is it today?</strong> (¿Qué día es hoy?)
    Para preguntar la fecha: <strong>What's the date today?</strong> (¿Cuál es la fecha de hoy?)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "The day after Monday is ___.", options: ["Sunday", "Tuesday", "Wednesday"], correct: 1,
          explanation: "Después de Monday viene Tuesday." },
        { prompt: "The first month of the year is ___.", options: ["December", "January", "March"], correct: 1,
          explanation: "January es el primer mes del año." },
        { prompt: "The season after winter is ___.", options: ["summer", "spring", "autumn"], correct: 1,
          explanation: "El orden es: winter → spring → summer → autumn." },
        { prompt: "The last month of the year is ___.", options: ["November", "December", "October"], correct: 1,
          explanation: "December es el último mes del año." },
        { prompt: "We rest on the ___. (fin de semana)", options: ["weekend", "week", "weekday"], correct: 0,
          explanation: "'Weekend' significa fin de semana." },
        { prompt: "___ is the hottest season.", options: ["Winter", "Summer", "Autumn"], correct: 1,
          explanation: "'Summer' (verano) es la estación más calurosa." },
        { prompt: "There are seven days in a ___.", options: ["month", "week", "year"], correct: 1,
          explanation: "Una semana ('week') tiene siete días." },
        { prompt: "There are twelve ___ in a year.", options: ["weeks", "days", "months"], correct: 2,
          explanation: "Un año tiene doce meses ('months')." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con la palabra correcta.",
      type: "fill",
      questions: [
        { prompt: "___ comes after Sunday. (lunes)", correct: ["monday"],
          explanation: "'Monday' es el día que sigue a 'Sunday'." },
        { prompt: "My birthday is in ___. (mayo)", correct: ["may"],
          explanation: "'May' significa 'mayo'." },
        { prompt: "It is very cold in ___. (invierno)", correct: ["winter"],
          explanation: "'Winter' es la estación fría." },
        { prompt: "___ is the day before today. (ayer)", correct: ["yesterday"],
          explanation: "'Yesterday' significa 'ayer'." },
        { prompt: "We go to school five days a ___.", correct: ["week"],
          explanation: "'Week' significa 'semana'." },
        { prompt: "Flowers bloom in ___. (primavera)", correct: ["spring"],
          explanation: "'Spring' es la estación de primavera." },
        { prompt: "___ is the day after today. (mañana)", correct: ["tomorrow"],
          explanation: "'Tomorrow' significa 'mañana' (el día siguiente)." },
        { prompt: "December, January and February are ___ months. (invierno)", correct: ["winter"],
          explanation: "Estos meses corresponden al invierno en el hemisferio norte." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["Today", "is", "Monday", "."], translation: "Hoy es lunes.",
          explanation: "Orden simple: sujeto + verbo + día." },
        { words: ["My", "birthday", "is", "in", "July", "."], translation: "Mi cumpleaños es en julio.",
          explanation: "Estructura para expresar el mes de un evento." },
        { words: ["What", "day", "is", "it", "today", "?"], translation: "¿Qué día es hoy?",
          explanation: "Pregunta común para saber el día de la semana." },
        { words: ["We", "have", "class", "on", "Fridays", "."], translation: "Tenemos clase los viernes.",
          explanation: "Con días de la semana en plural se usa 'on'." },
        { words: ["Summer", "is", "very", "hot", "."], translation: "El verano es muy caluroso.",
          explanation: "Oración descriptiva simple sobre una estación." },
        { words: ["I", "go", "to", "the", "gym", "on", "weekends", "."], translation: "Voy al gimnasio los fines de semana.",
          explanation: "Orden: sujeto + verbo + lugar + tiempo." },
        { words: ["The", "year", "has", "twelve", "months", "."], translation: "El año tiene doce meses.",
          explanation: "Oración afirmativa simple con 'has'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada palabra en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["Tuesday", "Martes"], ["Thursday", "Jueves"], ["September", "Septiembre"],
            ["June", "Junio"], ["autumn / fall", "Otoño"], ["spring", "Primavera"], ["Sunday", "Domingo"],
          ],
          explanation: "Este vocabulario conviene memorizarlo, no sigue reglas fonéticas fijas." }
      ]
    }
  ]
};
