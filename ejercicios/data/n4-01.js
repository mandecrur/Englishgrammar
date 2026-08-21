window.EXERCISE_DATA = {
  title: "Present Perfect Progressive",
  translation: "Presente perfecto continuo",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "lately", es: "últimamente" },
    { en: "all day", es: "todo el día" },
    { en: "exhausted", es: "agotado/a" },
    { en: "recently", es: "recientemente" },
    { en: "since morning", es: "desde la mañana" },
    { en: "keep -ing", es: "seguir haciendo algo" },
    { en: "wonder", es: "preguntarse" },
    { en: "improve", es: "mejorar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["lately", "últimamente"], ["exhausted", "agotado/a"], ["recently", "recientemente"],
          ["since morning", "desde la mañana"], ["wonder", "preguntarse"], ["improve", "mejorar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El presente perfecto continuo enfatiza la <strong>duración</strong> de una acción que empezó
    en el pasado y continúa (o acaba de terminar) hasta ahora. Se forma con
    <strong>have/has been + verbo-ing</strong>.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>I have been studying for two hours.</td><td>He estado estudiando durante dos horas.</td></tr>
      <tr><td>Negativa</td><td>She hasn't been sleeping well.</td><td>Ella no ha estado durmiendo bien.</td></tr>
      <tr><td>Pregunta</td><td>Have you been waiting long?</td><td>¿Has estado esperando mucho tiempo?</td></tr>
    </table>
    <p>Diferencia con el presente perfecto simple: el continuo enfatiza el <strong>proceso</strong>
    (y a veces el resultado visible, como estar cansado), mientras que el simple enfatiza el
    <strong>resultado o la cantidad completada</strong>.</p>
    <p>Ejemplo comparativo: <strong>I have been reading this book</strong> (proceso, aún no termino)
    vs. <strong>I have read three books</strong> (resultado, cantidad completada).</p>
    <p>Se usa frecuentemente con <strong>for</strong> (duración) y <strong>since</strong> (punto de inicio),
    igual que el presente perfecto simple: <strong>She has been working here for five years.</strong></p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I ___ been studying for two hours.", options: ["have", "has", "am"], correct: 0,
          explanation: "Con 'I' se usa 'have'." },
        { prompt: "She has been ___ (work) all day.", options: ["work", "worked", "working"], correct: 2,
          explanation: "Después de 'been' se usa el verbo en -ing." },
        { prompt: "___ you been waiting long?", options: ["Have", "Has", "Are"], correct: 0,
          explanation: "Con 'you' se usa 'Have'." },
        { prompt: "He ___ been feeling sick lately.", options: ["have", "has", "is"], correct: 1,
          explanation: "Con 'he' se usa 'has'." },
        { prompt: "We have been ___ (learn) English for a year.", options: ["learn", "learned", "learning"], correct: 2,
          explanation: "Se usa el verbo en -ing después de 'been'." },
        { prompt: "They haven't been ___ (sleep) well.", options: ["sleep", "slept", "sleeping"], correct: 2,
          explanation: "Se usa el verbo en -ing después de 'been'." },
        { prompt: "I ___ not been feeling well.", options: ["have", "has", "am"], correct: 0,
          explanation: "Con 'I' se usa 'have' incluso en negativo." },
        { prompt: "How long ___ she been living here?", options: ["have", "has", "is"], correct: 1,
          explanation: "Con 'she' se usa 'has'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma correcta del presente perfecto continuo.",
      type: "fill",
      questions: [
        { prompt: "I ___ (study) for two hours.", correct: ["have been studying"], explanation: "have been + verbo-ing." },
        { prompt: "She ___ (work) here since 2020.", correct: ["has been working"], explanation: "has been + verbo-ing." },
        { prompt: "We ___ (not/sleep) well this week.", correct: ["haven't been sleeping"], explanation: "Negación: haven't been + verbo-ing." },
        { prompt: "___ you ___ (wait) long?", correct: ["have you been waiting"], explanation: "Pregunta: Have + sujeto + been + verbo-ing." },
        { prompt: "He ___ (feel) tired lately.", correct: ["has been feeling"], explanation: "has been + verbo-ing." },
        { prompt: "I ___ (not/exercise) much this month.", correct: ["haven't been exercising"], explanation: "Negación: haven't been + verbo-ing." },
        { prompt: "___ she ___ (learn) Spanish?", correct: ["has she been learning"], explanation: "Pregunta: Has + sujeto + been + verbo-ing." },
        { prompt: "They ___ (travel) all summer.", correct: ["have been traveling"], explanation: "have been + verbo-ing." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "have", "been", "studying", "for", "hours", "."], translation: "He estado estudiando durante horas.",
          explanation: "Orden: sujeto + have been + verbo-ing + duración." },
        { words: ["She", "has", "been", "working", "all", "day", "."], translation: "Ella ha estado trabajando todo el día.",
          explanation: "Orden: sujeto + has been + verbo-ing + tiempo." },
        { words: ["Have", "you", "been", "waiting", "long", "?"], translation: "¿Has estado esperando mucho?",
          explanation: "Pregunta: Have + sujeto + been + verbo-ing." },
        { words: ["We", "haven't", "been", "sleeping", "well", "."], translation: "No hemos estado durmiendo bien.",
          explanation: "Negación: haven't been + verbo-ing." },
        { words: ["He", "has", "been", "feeling", "sick", "."], translation: "Él ha estado sintiéndose mal.",
          explanation: "Orden: sujeto + has been + verbo-ing + adjetivo." },
        { words: ["They", "have", "been", "living", "here", "for", "years", "."], translation: "Ellos han estado viviendo aquí durante años.",
          explanation: "Orden: sujeto + have been + verbo-ing + lugar + duración." },
        { words: ["I", "haven't", "been", "exercising", "lately", "."], translation: "No he estado haciendo ejercicio últimamente.",
          explanation: "Negación: haven't been + verbo-ing." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada estructura con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["have been studying", "he estado estudiando"], ["has been working", "ha estado trabajando"],
            ["haven't been sleeping", "no he estado durmiendo"], ["Have you been waiting?", "¿Has estado esperando?"],
            ["for two hours", "durante dos horas"], ["since morning", "desde la mañana"], ["lately", "últimamente"],
          ],
          explanation: "El presente perfecto continuo enfatiza la duración de la acción." }
      ]
    }
  ]
};
