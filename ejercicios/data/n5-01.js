window.EXERCISE_DATA = {
  title: "Past Perfect Progressive",
  translation: "Pluscuamperfecto continuo",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "for hours", es: "durante horas" },
    { en: "before that", es: "antes de eso" },
    { en: "exhausted", es: "agotado/a" },
    { en: "for a while", es: "por un rato" },
    { en: "prior to", es: "antes de / previo a" },
    { en: "constantly", es: "constantemente" },
    { en: "eventually", es: "finalmente / eventualmente" },
    { en: "gradually", es: "gradualmente" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["for hours", "durante horas"], ["exhausted", "agotado/a"], ["for a while", "por un rato"],
          ["constantly", "constantemente"], ["eventually", "finalmente"], ["gradually", "gradualmente"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El pasado perfecto continuo enfatiza la <strong>duración</strong> de una acción que estaba
    en curso antes de otro momento en el pasado. Se forma con <strong>had been + verbo-ing</strong>.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>I had been studying for hours when she called.</td><td>Había estado estudiando durante horas cuando ella llamó.</td></tr>
      <tr><td>Negativa</td><td>She hadn't been feeling well.</td><td>Ella no había estado sintiéndose bien.</td></tr>
      <tr><td>Pregunta</td><td>Had you been waiting long?</td><td>¿Habías estado esperando mucho tiempo?</td></tr>
    </table>
    <p>Diferencia con el pasado perfecto simple: el continuo enfatiza el <strong>proceso</strong>
    (a menudo explicando la causa de algo), mientras que el simple enfatiza el
    <strong>resultado</strong> completado.</p>
    <p>Ejemplo: <strong>I was tired because I had been working all day.</strong>
    (Estaba cansado porque había estado trabajando todo el día — el proceso explica el resultado.)</p>
    <p>Es igual para todos los pronombres: solo cambia entre <strong>had</strong> (siempre igual)
    + <strong>been</strong> + verbo-ing.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I ___ been studying for hours when she called.", options: ["had", "have", "was"], correct: 0,
          explanation: "'Had been' + verbo-ing para el pasado perfecto continuo." },
        { prompt: "She had been ___ (feel) sick before the trip.", options: ["feel", "felt", "feeling"], correct: 2,
          explanation: "Se usa el verbo en -ing después de 'been'." },
        { prompt: "___ you been waiting long when I arrived?", options: ["Had", "Have", "Were"], correct: 0,
          explanation: "'Had' + sujeto para la pregunta." },
        { prompt: "He was tired because he ___ been working all day.", options: ["had", "have", "was"], correct: 0,
          explanation: "'Had been' explica la causa del cansancio." },
        { prompt: "We had been ___ (live) there for years before we moved.", options: ["live", "lived", "living"], correct: 2,
          explanation: "Se usa el verbo en -ing después de 'been'." },
        { prompt: "They hadn't been ___ (sleep) well before the exam.", options: ["sleep", "slept", "sleeping"], correct: 2,
          explanation: "Se usa el verbo en -ing después de 'been'." },
        { prompt: "I ___ not been feeling well that week.", options: ["had", "have", "was"], correct: 0,
          explanation: "'Had not' (hadn't) es la negación." },
        { prompt: "How long ___ she been studying before the test?", options: ["had", "have", "was"], correct: 0,
          explanation: "'Had' se usa igual con todos los pronombres." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma correcta del pasado perfecto continuo.",
      type: "fill",
      questions: [
        { prompt: "I ___ (study) for hours when she called.", correct: ["had been studying"], explanation: "had been + verbo-ing." },
        { prompt: "She ___ (work) there for years before she quit.", correct: ["had been working"], explanation: "had been + verbo-ing." },
        { prompt: "We ___ (not/sleep) well before the trip.", correct: ["hadn't been sleeping"], explanation: "Negación: hadn't been + verbo-ing." },
        { prompt: "___ you ___ (wait) long before I arrived?", correct: ["had you been waiting"], explanation: "Pregunta: Had + sujeto + been + verbo-ing." },
        { prompt: "He was tired because he ___ (run).", correct: ["had been running"], explanation: "had been + verbo-ing." },
        { prompt: "I ___ (not/feel) well that whole week.", correct: ["hadn't been feeling"], explanation: "Negación: hadn't been + verbo-ing." },
        { prompt: "___ she ___ (learn) English before she moved?", correct: ["had she been learning"], explanation: "Pregunta: Had + sujeto + been + verbo-ing." },
        { prompt: "They ___ (travel) all summer before school started.", correct: ["had been traveling"], explanation: "had been + verbo-ing." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "had", "been", "studying", "for", "hours", "."], translation: "Había estado estudiando durante horas.",
          explanation: "Orden: sujeto + had been + verbo-ing + duración." },
        { words: ["She", "had", "been", "working", "there", "for", "years", "."], translation: "Ella había estado trabajando ahí durante años.",
          explanation: "Orden: sujeto + had been + verbo-ing + lugar + duración." },
        { words: ["Had", "you", "been", "waiting", "long", "?"], translation: "¿Habías estado esperando mucho tiempo?",
          explanation: "Pregunta: Had + sujeto + been + verbo-ing." },
        { words: ["We", "hadn't", "been", "sleeping", "well", "."], translation: "No habíamos estado durmiendo bien.",
          explanation: "Negación: hadn't been + verbo-ing." },
        { words: ["He", "was", "tired", "because", "he", "had", "been", "running", "."], translation: "Estaba cansado porque había estado corriendo.",
          explanation: "Causa explicada con pasado perfecto continuo." },
        { words: ["They", "had", "been", "living", "there", "before", "they", "moved", "."], translation: "Ellos habían estado viviendo ahí antes de mudarse.",
          explanation: "Orden: sujeto + had been + verbo-ing + lugar + cláusula." },
        { words: ["I", "hadn't", "been", "feeling", "well", "that", "day", "."], translation: "No me había estado sintiendo bien ese día.",
          explanation: "Negación: hadn't been + verbo-ing." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada estructura con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["had been studying", "había estado estudiando"], ["had been working", "había estado trabajando"],
            ["hadn't been sleeping", "no había estado durmiendo"], ["Had you been waiting?", "¿Habías estado esperando?"],
            ["for hours", "durante horas"], ["before that", "antes de eso"], ["exhausted", "agotado/a"],
          ],
          explanation: "El pasado perfecto continuo enfatiza la duración antes de otro momento pasado." }
      ]
    }
  ]
};
