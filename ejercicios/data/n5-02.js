window.EXERCISE_DATA = {
  title: "Future Perfect Progressive",
  translation: "Futuro perfecto continuo",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "by next month", es: "para el próximo mes" },
    { en: "for a decade", es: "durante una década" },
    { en: "anniversary", es: "aniversario" },
    { en: "milestone", es: "hito / logro importante" },
    { en: "continuously", es: "continuamente" },
    { en: "nonstop", es: "sin parar" },
    { en: "by the time", es: "para cuando" },
    { en: "throughout", es: "a lo largo de" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["by next month", "para el próximo mes"], ["for a decade", "durante una década"], ["anniversary", "aniversario"],
          ["milestone", "hito / logro"], ["continuously", "continuamente"], ["nonstop", "sin parar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El futuro perfecto continuo describe la <strong>duración</strong> de una acción que estará
    en curso hasta un momento específico del futuro. Se forma con
    <strong>will have been + verbo-ing</strong>.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>By next year, I will have been working here for a decade.</td><td>Para el próximo año, habré estado trabajando aquí una década.</td></tr>
      <tr><td>Negativa</td><td>She won't have been studying long.</td><td>Ella no habrá estado estudiando mucho tiempo.</td></tr>
      <tr><td>Pregunta</td><td>Will you have been living here five years?</td><td>¿Habrás estado viviendo aquí cinco años?</td></tr>
    </table>
    <p>Es un tiempo verbal poco común, pero útil para enfatizar duración acumulada hasta un
    punto futuro específico, generalmente con <strong>for</strong> (duración) o <strong>by</strong>
    (para/antes de).</p>
    <p>Ejemplo: <strong>By December, she will have been teaching for 15 years.</strong>
    (Para diciembre, ella habrá estado enseñando durante 15 años.)</p>
    <p>Se usa mucho menos que otras formas de futuro; en el habla cotidiana muchas veces se
    simplifica a futuro perfecto simple si la duración exacta no es tan relevante.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "By next year, I will have ___ working here for a decade.", options: ["be", "been", "being"], correct: 1,
          explanation: "'Will have been' + verbo-ing." },
        { prompt: "She will have been ___ (study) for five hours by then.", options: ["study", "studied", "studying"], correct: 2,
          explanation: "Se usa el verbo en -ing después de 'been'." },
        { prompt: "___ you have been living here five years by June?", options: ["Will", "Do", "Are"], correct: 0,
          explanation: "Pregunta: Will + sujeto + have been + verbo-ing." },
        { prompt: "By December, he will have been ___ (teach) for 15 years.", options: ["teach", "taught", "teaching"], correct: 2,
          explanation: "Se usa el verbo en -ing después de 'been'." },
        { prompt: "We won't have been ___ (wait) long by the time you arrive.", options: ["wait", "waited", "waiting"], correct: 2,
          explanation: "Se usa el verbo en -ing después de 'been'." },
        { prompt: "By next month, they will ___ been working on this project for a year.", options: ["have", "has", "be"], correct: 0,
          explanation: "'Will have been' + verbo-ing es la estructura fija." },
        { prompt: "She will have been ___ (run) the company for a decade.", options: ["run", "ran", "running"], correct: 2,
          explanation: "Se usa el verbo en -ing después de 'been'." },
        { prompt: "By 2030, I ___ have been living here for 20 years.", options: ["will", "am", "do"], correct: 0,
          explanation: "'Will have been' es la estructura correcta." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma correcta del futuro perfecto continuo.",
      type: "fill",
      questions: [
        { prompt: "By next year, I ___ (work) here for a decade.", correct: ["will have been working"], explanation: "will have been + verbo-ing." },
        { prompt: "She ___ (study) for five hours by 8 PM.", correct: ["will have been studying"], explanation: "will have been + verbo-ing." },
        { prompt: "We ___ (not/wait) long by the time you get here.", correct: ["won't have been waiting"], explanation: "Negación: won't have been + verbo-ing." },
        { prompt: "___ you ___ (live) here five years by June?", correct: ["will you have been living"], explanation: "Pregunta: Will + sujeto + have been + verbo-ing." },
        { prompt: "By December, he ___ (teach) for 15 years.", correct: ["will have been teaching"], explanation: "will have been + verbo-ing." },
        { prompt: "They ___ (run) this business for a decade by 2030.", correct: ["will have been running"], explanation: "will have been + verbo-ing." },
        { prompt: "I ___ (not/sleep) much by the time the flight lands.", correct: ["won't have been sleeping"], explanation: "Negación: won't have been + verbo-ing." },
        { prompt: "By the time she retires, she ___ (work) for 40 years.", correct: ["will have been working"], explanation: "will have been + verbo-ing." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "will", "have", "been", "working", "here", "for", "a", "decade", "."], translation: "Habré estado trabajando aquí una década.",
          explanation: "Orden: sujeto + will have been + verbo-ing + duración." },
        { words: ["She", "will", "have", "been", "studying", "for", "hours", "."], translation: "Ella habrá estado estudiando durante horas.",
          explanation: "Orden: sujeto + will have been + verbo-ing + duración." },
        { words: ["Will", "you", "have", "been", "living", "here", "long", "?"], translation: "¿Habrás estado viviendo aquí mucho tiempo?",
          explanation: "Pregunta: Will + sujeto + have been + verbo-ing." },
        { words: ["We", "won't", "have", "been", "waiting", "long", "."], translation: "No habremos estado esperando mucho tiempo.",
          explanation: "Negación: won't have been + verbo-ing." },
        { words: ["By", "December", ",", "he", "will", "have", "been", "teaching", "for", "years", "."], translation: "Para diciembre, él habrá estado enseñando durante años.",
          explanation: "'By December' + will have been + verbo-ing." },
        { words: ["They", "will", "have", "been", "running", "the", "business", "for", "a", "decade", "."], translation: "Ellos habrán estado dirigiendo el negocio durante una década.",
          explanation: "Orden: sujeto + will have been + verbo-ing + objeto + duración." },
        { words: ["I", "won't", "have", "been", "sleeping", "much", "."], translation: "No habré estado durmiendo mucho.",
          explanation: "Negación: won't have been + verbo-ing." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada estructura con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["will have been working", "habré estado trabajando"], ["will have been studying", "habrá estado estudiando"],
            ["won't have been waiting", "no habremos estado esperando"], ["Will you have been living?", "¿Habrás estado viviendo?"],
            ["for a decade", "durante una década"], ["by next month", "para el próximo mes"], ["continuously", "continuamente"],
          ],
          explanation: "El futuro perfecto continuo enfatiza duración acumulada hasta un momento futuro." }
      ]
    }
  ]
};
