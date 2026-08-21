window.EXERCISE_DATA = {
  title: "Omitting If (Inverted Conditionals)",
  translation: "Condicionales sin 'if' — inversión formal",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "formal", es: "formal" },
    { en: "should you", es: "en caso de que usted" },
    { en: "were I", es: "si yo fuera" },
    { en: "had I known", es: "si hubiera sabido" },
    { en: "literary", es: "literario" },
    { en: "elegant", es: "elegante" },
    { en: "written English", es: "inglés escrito" },
    { en: "conditional", es: "condicional" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["formal", "formal"], ["literary", "literario"], ["elegant", "elegante"],
          ["written English", "inglés escrito"], ["conditional", "condicional"], ["should you", "en caso de que usted"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>En un registro <strong>formal o literario</strong>, se puede omitir "if" en oraciones
    condicionales, invirtiendo el orden del auxiliar y el sujeto.</p>
    <table>
      <tr><th>Condicional</th><th>Con "if"</th><th>Sin "if" (inversión)</th></tr>
      <tr><td>Tipo 1</td><td>If you should need help...</td><td>Should you need help...</td></tr>
      <tr><td>Tipo 2</td><td>If I were you...</td><td>Were I you...</td></tr>
      <tr><td>Tipo 3</td><td>If I had known...</td><td>Had I known...</td></tr>
    </table>
    <p>Ejemplo: <strong>Had I known about the meeting, I would have attended.</strong>
    (Si hubiera sabido sobre la reunión, habría asistido — igual que "If I had known...")</p>
    <p><strong>Should you have any questions, please contact us.</strong>
    (En caso de que tenga alguna pregunta, contáctenos — muy común en cartas y correos formales.)</p>
    <p>Solo se puede omitir "if" con <strong>should, were, had</strong> — no con otros auxiliares.
    Esta estructura es <strong>mucho más formal</strong> que su equivalente con "if", y se usa en
    escritura de negocios, académica y literaria.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma sin 'if' correcta.",
      type: "mc",
      questions: [
        { prompt: "___ you need help, please call us. (should you)", options: ["Should", "If should"], correct: 0,
          explanation: "'Should' inicia la oración, sin 'if'." },
        { prompt: "___ I you, I would accept the offer. (were)", options: ["Were", "If were"], correct: 0,
          explanation: "'Were' inicia la oración, sin 'if'." },
        { prompt: "___ I known, I would have told you. (had)", options: ["Had", "If had"], correct: 0,
          explanation: "'Had' inicia la oración, sin 'if'." },
        { prompt: "Should you ___ any questions, contact us.", options: ["have", "having"], correct: 0,
          explanation: "'Should' + sujeto + verbo base." },
        { prompt: "Were she ___ (be) more careful, this wouldn't have happened.", options: ["be", "-"], correct: 1,
          explanation: "Después de 'were + sujeto' no se repite otro verbo, va el complemento directo." },
        { prompt: "Had they ___ (arrive) earlier, they would have seen it.", options: ["arrive", "arrived"], correct: 1,
          explanation: "'Had' + sujeto + participio pasado." },
        { prompt: "___ it rain, we would cancel the event. (should)", options: ["Should", "If should"], correct: 0,
          explanation: "'Should' inicia la oración condicional formal." },
        { prompt: "Had I ___ (know) the truth, I would have acted differently.", options: ["know", "known"], correct: 1,
          explanation: "'Had' + sujeto + participio pasado." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa la oración condicional sin 'if'.",
      type: "fill",
      questions: [
        { prompt: "___ (should) you need anything, let me know.", correct: ["should"], explanation: "'Should' inicia sin 'if'." },
        { prompt: "___ (were) I in your position, I would resign.", correct: ["were"], explanation: "'Were' inicia sin 'if'." },
        { prompt: "___ (had) I known, I would have come earlier.", correct: ["had"], explanation: "'Had' inicia sin 'if'." },
        { prompt: "Should you ___ (have) questions, feel free to ask.", correct: ["have"], explanation: "should + sujeto + verbo base." },
        { prompt: "Were she braver, she ___ (would/try) it.", correct: ["would try"], explanation: "Resultado con 'would' + verbo base." },
        { prompt: "Had they ___ (listen) to advice, this wouldn't have happened.", correct: ["listened"], explanation: "had + sujeto + participio." },
        { prompt: "Should it rain, the event ___ (would/be) cancelled.", correct: ["would be"], explanation: "Resultado con 'would' + verbo base." },
        { prompt: "Had I ___ (know) about this, I would have acted sooner.", correct: ["known"], explanation: "had + sujeto + participio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["Should", "you", "need", "help", ",", "call", "us", "."], translation: "En caso de que necesite ayuda, llámenos.",
          explanation: "'Should' + sujeto + verbo base, sin 'if'." },
        { words: ["Were", "I", "you", ",", "I", "would", "accept", "."], translation: "Si yo fuera tú, aceptaría.",
          explanation: "'Were' + sujeto + complemento, sin 'if'." },
        { words: ["Had", "I", "known", ",", "I", "would", "have", "told", "you", "."], translation: "Si hubiera sabido, te habría dicho.",
          explanation: "'Had' + sujeto + participio, sin 'if'." },
        { words: ["Should", "it", "rain", ",", "we", "would", "cancel", "."], translation: "En caso de que llueva, cancelaríamos.",
          explanation: "'Should' + sujeto + verbo base, sin 'if'." },
        { words: ["Were", "she", "more", "careful", ",", "this", "wouldn't", "happen", "."], translation: "Si ella fuera más cuidadosa, esto no pasaría.",
          explanation: "'Were' + sujeto + adjetivo, sin 'if'." },
        { words: ["Had", "they", "arrived", "earlier", ",", "they", "would", "have", "seen", "it", "."], translation: "Si hubieran llegado antes, lo habrían visto.",
          explanation: "'Had' + sujeto + participio, sin 'if'." },
        { words: ["Should", "you", "have", "questions", ",", "contact", "us", "."], translation: "En caso de que tenga preguntas, contáctenos.",
          explanation: "'Should' + sujeto + verbo base, sin 'if'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada versión con 'if' con su versión sin 'if'.",
      type: "match",
      questions: [
        { pairs: [
            ["If you should need help", "Should you need help"], ["If I were you", "Were I you"],
            ["If I had known", "Had I known"], ["formal", "formal"],
            ["literary", "literario"], ["written English", "inglés escrito"], ["elegant", "elegante"],
          ],
          explanation: "Solo should, were y had permiten omitir 'if' con inversión." }
      ]
    }
  ]
};
