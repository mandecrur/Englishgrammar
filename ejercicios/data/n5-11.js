window.EXERCISE_DATA = {
  title: "Noun Clauses with Question Words",
  translation: "Cláusulas sustantivas con palabras interrogativas",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "explain", es: "explicar" },
    { en: "tell me", es: "dime" },
    { en: "understand", es: "entender" },
    { en: "figure out", es: "descifrar / entender" },
    { en: "unclear", es: "poco claro" },
    { en: "explanation", es: "explicación" },
    { en: "location", es: "ubicación" },
    { en: "reason", es: "razón" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["explain", "explicar"], ["understand", "entender"], ["figure out", "descifrar"],
          ["unclear", "poco claro"], ["explanation", "explicación"], ["reason", "razón"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Cuando una pregunta con palabra interrogativa (what, where, when, why, who, how) se convierte
    en cláusula sustantiva, el orden cambia a <strong>sujeto + verbo</strong> (como en una afirmación).</p>
    <table>
      <tr><th>Pregunta directa</th><th>Cláusula sustantiva</th></tr>
      <tr><td>Where does she live?</td><td>I don't know where she lives.</td></tr>
      <tr><td>What is he doing?</td><td>I wonder what he is doing.</td></tr>
      <tr><td>Why did she leave?</td><td>Can you tell me why she left?</td></tr>
    </table>
    <p>Error muy común: mantener el orden de pregunta dentro de la cláusula. Es incorrecto decir
    <em>"I don't know where does she live"</em> ❌ — lo correcto es
    <strong>"I don't know where she lives"</strong> ✓ (sin el auxiliar "does", con "s" en el verbo).</p>
    <p>Estas cláusulas funcionan como el objeto de verbos como <strong>know, wonder, understand,
    explain, tell, ask, remember, figure out</strong>.</p>
    <p>Ejemplo: <strong>Can you tell me what time it is?</strong>
    (¿Puedes decirme qué hora es? — no "what time is it", aunque suene similar a la pregunta directa.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I don't know where ___ (does she live/she lives).", options: ["does she live", "she lives"], correct: 1,
          explanation: "Dentro de la cláusula, el orden es sujeto+verbo, sin auxiliar." },
        { prompt: "I wonder what ___ (is he doing/he is doing).", options: ["is he doing", "he is doing"], correct: 1,
          explanation: "Orden sujeto+verbo dentro de la cláusula." },
        { prompt: "Can you tell me why ___ (did she leave/she left)?", options: ["did she leave", "she left"], correct: 1,
          explanation: "Orden sujeto+verbo, sin el auxiliar 'did'." },
        { prompt: "I don't understand how ___ (does it work/it works).", options: ["does it work", "it works"], correct: 1,
          explanation: "Orden sujeto+verbo dentro de la cláusula." },
        { prompt: "Do you know what time ___ (is it/it is)?", options: ["is it", "it is"], correct: 1,
          explanation: "Orden sujeto+verbo dentro de la cláusula." },
        { prompt: "I can't remember where ___ (did I put/I put) my keys.", options: ["did I put", "I put"], correct: 1,
          explanation: "Orden sujeto+verbo, sin el auxiliar 'did'." },
        { prompt: "She asked me who ___ (was calling/calling was).", options: ["was calling", "calling was"], correct: 0,
          explanation: "Cuando 'who' es el sujeto, el orden no cambia mucho." },
        { prompt: "I don't know why ___ (is he upset/he is upset).", options: ["is he upset", "he is upset"], correct: 1,
          explanation: "Orden sujeto+verbo dentro de la cláusula." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada cláusula sustantiva con el orden correcto.",
      type: "fill",
      questions: [
        { prompt: "I don't know where ___ (she/live).", correct: ["she lives"], explanation: "Orden sujeto+verbo, sin auxiliar." },
        { prompt: "I wonder what ___ (he/want).", correct: ["he wants"], explanation: "Orden sujeto+verbo." },
        { prompt: "Can you tell me why ___ (they/leave)?", correct: ["they left"], explanation: "Orden sujeto+verbo." },
        { prompt: "I don't understand how ___ (this/work).", correct: ["this works"], explanation: "Orden sujeto+verbo." },
        { prompt: "Do you know what time ___ (it/be)?", correct: ["it is"], explanation: "Orden sujeto+verbo." },
        { prompt: "I can't remember where ___ (I/put) my phone.", correct: ["I put"], explanation: "Orden sujeto+verbo." },
        { prompt: "She asked me where ___ (I/be) from.", correct: ["I was"], explanation: "Orden sujeto+verbo." },
        { prompt: "I don't know why ___ (he/be) upset.", correct: ["he is"], explanation: "Orden sujeto+verbo." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "don't", "know", "where", "she", "lives", "."], translation: "No sé dónde vive ella.",
          explanation: "Cláusula con orden sujeto+verbo, sin auxiliar 'does'." },
        { words: ["I", "wonder", "what", "he", "is", "doing", "."], translation: "Me pregunto qué está haciendo él.",
          explanation: "Cláusula con orden sujeto+verbo." },
        { words: ["Can", "you", "tell", "me", "why", "she", "left", "?"], translation: "¿Puedes decirme por qué se fue ella?",
          explanation: "Cláusula con orden sujeto+verbo." },
        { words: ["I", "don't", "understand", "how", "it", "works", "."], translation: "No entiendo cómo funciona.",
          explanation: "Cláusula con orden sujeto+verbo." },
        { words: ["Do", "you", "know", "what", "time", "it", "is", "?"], translation: "¿Sabes qué hora es?",
          explanation: "Cláusula con orden sujeto+verbo." },
        { words: ["I", "can't", "remember", "where", "I", "put", "my", "keys", "."], translation: "No puedo recordar dónde puse mis llaves.",
          explanation: "Cláusula con orden sujeto+verbo, sin auxiliar 'did'." },
        { words: ["I", "don't", "know", "why", "he", "is", "upset", "."], translation: "No sé por qué está molesto.",
          explanation: "Cláusula con orden sujeto+verbo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada pregunta directa con su cláusula sustantiva.",
      type: "match",
      questions: [
        { pairs: [
            ["Where does she live?", "I don't know where she lives"], ["What is he doing?", "I wonder what he is doing"],
            ["Why did she leave?", "Tell me why she left"], ["How does it work?", "I don't understand how it works"],
            ["What time is it?", "Do you know what time it is?"], ["explain", "explicar"], ["figure out", "descifrar"],
          ],
          explanation: "El orden de pregunta cambia a orden afirmativo dentro de la cláusula." }
      ]
    }
  ]
};
