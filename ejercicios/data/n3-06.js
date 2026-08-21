window.EXERCISE_DATA = {
  title: "Future: Will vs Be Going To",
  translation: "Diferencia entre will y be going to",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "decision", es: "decisión" },
    { en: "spontaneous", es: "espontáneo" },
    { en: "plan", es: "plan" },
    { en: "evidence", es: "evidencia" },
    { en: "prediction", es: "predicción" },
    { en: "on the spot", es: "en el momento (decisión súbita)" },
    { en: "arrange", es: "organizar / arreglar" },
    { en: "clouds", es: "nubes" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["decision", "decisión"], ["spontaneous", "espontáneo"], ["plan", "plan"],
          ["evidence", "evidencia"], ["prediction", "predicción"], ["clouds", "nubes"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Ambas formas hablan del futuro, pero con matices distintos.</p>
    <table>
      <tr><th>Will</th><th>Be going to</th></tr>
      <tr><td>Decisiones espontáneas (en el momento)</td><td>Planes ya decididos de antemano</td></tr>
      <tr><td>Predicciones basadas en opinión</td><td>Predicciones basadas en evidencia visible</td></tr>
      <tr><td>Promesas y ofrecimientos</td><td>Intenciones</td></tr>
    </table>
    <p>Ejemplo de decisión espontánea: <strong>The phone is ringing. I'll answer it.</strong>
    (El teléfono está sonando. Yo contesto — decisión en el momento.)</p>
    <p>Ejemplo de plan ya decidido: <strong>I'm going to answer that email tonight.</strong>
    (Voy a responder ese correo esta noche — ya lo decidí antes.)</p>
    <p>Ejemplo de predicción con evidencia: <strong>Look at those clouds! It's going to rain.</strong>
    vs. predicción de opinión: <strong>I think it will rain tomorrow.</strong></p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige will o be going to según el contexto.",
      type: "mc",
      questions: [
        { prompt: "The phone is ringing! I ___ answer it. (decisión espontánea)", options: ["will", "am going to"], correct: 0,
          explanation: "Decisión tomada en el momento: 'will'." },
        { prompt: "I ___ visit my grandma this weekend. (plan ya decidido)", options: ["will", "am going to"], correct: 1,
          explanation: "Plan decidido de antemano: 'be going to'." },
        { prompt: "Look at those clouds! It ___ rain. (evidencia visible)", options: ["will", "is going to"], correct: 1,
          explanation: "Predicción con evidencia visible: 'be going to'." },
        { prompt: "I think it ___ be a good year. (opinión)", options: ["will", "is going to"], correct: 0,
          explanation: "Predicción basada en opinión: 'will'." },
        { prompt: "I promise I ___ help you. (promesa)", options: ["will", "am going to"], correct: 0,
          explanation: "Promesa: 'will'." },
        { prompt: "She ___ study medicine. She already applied. (plan)", options: ["will", "is going to"], correct: 1,
          explanation: "Plan ya en marcha: 'be going to'." },
        { prompt: "I'm tired. I ___ go to bed. (decisión espontánea)", options: ["will", "am going to"], correct: 0,
          explanation: "Decisión espontánea del momento: 'will'." },
        { prompt: "We ___ travel next month. We already bought the tickets.", options: ["will", "are going to"], correct: 1,
          explanation: "Plan ya organizado (boletos comprados): 'be going to'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con will o be going to según corresponda.",
      type: "fill",
      questions: [
        { prompt: "I ___ (help) you. I promise. (promesa)", correct: ["will help"], explanation: "Promesa: will." },
        { prompt: "She ___ (travel) next week. She already booked the flight. (plan)", correct: ["is going to travel"], explanation: "Plan decidido: be going to." },
        { prompt: "It's cold. I ___ (close) the window. (decisión espontánea)", correct: ["will close"], explanation: "Decisión espontánea: will." },
        { prompt: "Look at the sky! It ___ (rain). (evidencia)", correct: ["is going to rain"], explanation: "Evidencia visible: be going to." },
        { prompt: "I think she ___ (like) the gift. (opinión)", correct: ["will like"], explanation: "Predicción de opinión: will." },
        { prompt: "We ___ (get) married in June. We already planned everything. (plan)", correct: ["are going to get"], explanation: "Plan decidido: be going to." },
        { prompt: "Don't worry, I ___ (call) you later. (promesa)", correct: ["will call"], explanation: "Promesa: will." },
        { prompt: "He ___ (study) abroad. He already has the visa. (plan)", correct: ["is going to study"], explanation: "Plan decidido: be going to." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "will", "answer", "the", "phone", "."], translation: "Yo contesto el teléfono.",
          explanation: "Decisión espontánea con 'will'." },
        { words: ["I", "am", "going", "to", "visit", "her", "tomorrow", "."], translation: "Voy a visitarla mañana.",
          explanation: "Plan ya decidido con 'be going to'." },
        { words: ["It", "is", "going", "to", "rain", "soon", "."], translation: "Va a llover pronto.",
          explanation: "Predicción con evidencia visible." },
        { words: ["I", "promise", "I", "will", "call", "you", "."], translation: "Prometo que te llamaré.",
          explanation: "Promesa con 'will'." },
        { words: ["She", "is", "going", "to", "study", "abroad", "."], translation: "Ella va a estudiar en el extranjero.",
          explanation: "Plan ya organizado con 'be going to'." },
        { words: ["I", "think", "it", "will", "be", "fun", "."], translation: "Creo que será divertido.",
          explanation: "Predicción de opinión con 'will'." },
        { words: ["We", "are", "going", "to", "get", "married", "."], translation: "Vamos a casarnos.",
          explanation: "Plan decidido con 'be going to'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada situación con la forma verbal correcta.",
      type: "match",
      questions: [
        { pairs: [
            ["spontaneous decision", "will"], ["already-made plan", "be going to"],
            ["promise", "will"], ["evidence-based prediction", "be going to"],
            ["opinion-based prediction", "will"], ["bought tickets already", "be going to"], ["offer to help", "will"],
          ],
          explanation: "Cada situación indica cuál forma verbal usar." }
      ]
    }
  ]
};
