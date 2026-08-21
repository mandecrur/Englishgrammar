window.EXERCISE_DATA = {
  title: "Passive Gerunds and Infinitives",
  translation: "Gerundios e infinitivos en voz pasiva",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "being chosen", es: "siendo elegido" },
    { en: "to be chosen", es: "ser elegido" },
    { en: "appreciate", es: "apreciar" },
    { en: "expect", es: "esperar (expectativa)" },
    { en: "deserve", es: "merecer" },
    { en: "avoid", es: "evitar" },
    { en: "recognition", es: "reconocimiento" },
    { en: "criticize", es: "criticar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["being chosen", "siendo elegido"], ["to be chosen", "ser elegido"], ["appreciate", "apreciar"],
          ["deserve", "merecer"], ["avoid", "evitar"], ["recognition", "reconocimiento"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los gerundios e infinitivos también tienen forma <strong>pasiva</strong>, usada cuando el
    sujeto de la oración recibe la acción en vez de realizarla.</p>
    <table>
      <tr><th>Forma</th><th>Estructura</th><th>Ejemplo</th></tr>
      <tr><td>Gerundio pasivo</td><td>being + participio</td><td>I enjoy being praised.</td></tr>
      <tr><td>Infinitivo pasivo</td><td>to be + participio</td><td>I want to be recognized.</td></tr>
    </table>
    <p>Ejemplo comparativo activo/pasivo: <strong>I enjoy praising others</strong> (activo — yo
    hago la acción) vs. <strong>I enjoy being praised</strong> (pasivo — yo recibo la acción).</p>
    <p>Ejemplo: <strong>She hates being interrupted.</strong> (Ella odia que la interrumpan.) —
    <strong>He deserves to be recognized for his work.</strong>
    (Él merece ser reconocido por su trabajo.)</p>
    <p>Se usa después de los mismos verbos que ya conoces con gerundio/infinitivo
    (enjoy, hate, want, deserve, expect, avoid...), solo que ahora en su forma pasiva.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma pasiva correcta.",
      type: "mc",
      questions: [
        { prompt: "I enjoy ___ praised. (gerundio pasivo)", options: ["being", "to be"], correct: 0,
          explanation: "'Enjoy' va seguido de gerundio, aquí en forma pasiva 'being'." },
        { prompt: "I want ___ recognized. (infinitivo pasivo)", options: ["being", "to be"], correct: 1,
          explanation: "'Want' va seguido de infinitivo, aquí en forma pasiva 'to be'." },
        { prompt: "She hates ___ interrupted.", options: ["being", "to be"], correct: 0,
          explanation: "'Hate' puede ir con gerundio pasivo 'being'." },
        { prompt: "He deserves ___ (recognize) for his work.", options: ["to be recognized", "being recognized"], correct: 0,
          explanation: "'Deserve' va seguido de infinitivo, aquí pasivo." },
        { prompt: "I avoid ___ (criticize) in public.", options: ["being criticized", "to be criticized"], correct: 0,
          explanation: "'Avoid' va seguido de gerundio, aquí pasivo." },
        { prompt: "They expect ___ (pay) on time.", options: ["being paid", "to be paid"], correct: 1,
          explanation: "'Expect' va seguido de infinitivo, aquí pasivo." },
        { prompt: "I don't like ___ (tell) what to do.", options: ["being told", "to be told"], correct: 0,
          explanation: "'Like' puede ir con gerundio pasivo." },
        { prompt: "She needs ___ (help) with this.", options: ["being helped", "to be helped"], correct: 1,
          explanation: "'Need' va seguido de infinitivo, aquí pasivo." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma pasiva correcta (gerundio o infinitivo).",
      type: "fill",
      questions: [
        { prompt: "I enjoy ___ (praise).", correct: ["being praised"], explanation: "enjoy + being + participio." },
        { prompt: "I want ___ (recognize) for my effort.", correct: ["to be recognized"], explanation: "want + to be + participio." },
        { prompt: "She hates ___ (interrupt).", correct: ["being interrupted"], explanation: "hate + being + participio." },
        { prompt: "He deserves ___ (promote).", correct: ["to be promoted"], explanation: "deserve + to be + participio." },
        { prompt: "I avoid ___ (criticize) publicly.", correct: ["being criticized"], explanation: "avoid + being + participio." },
        { prompt: "They expect ___ (treat) fairly.", correct: ["to be treated"], explanation: "expect + to be + participio." },
        { prompt: "I don't like ___ (watch) while I work.", correct: ["being watched"], explanation: "like + being + participio." },
        { prompt: "She needs ___ (help) with the project.", correct: ["to be helped"], explanation: "need + to be + participio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "enjoy", "being", "praised", "."], translation: "Disfruto que me elogien.",
          explanation: "'Enjoy' + being + participio." },
        { words: ["I", "want", "to", "be", "recognized", "."], translation: "Quiero ser reconocido.",
          explanation: "'Want' + to be + participio." },
        { words: ["She", "hates", "being", "interrupted", "."], translation: "Ella odia que la interrumpan.",
          explanation: "'Hate' + being + participio." },
        { words: ["He", "deserves", "to", "be", "promoted", "."], translation: "Él merece ser ascendido.",
          explanation: "'Deserve' + to be + participio." },
        { words: ["I", "avoid", "being", "criticized", "in", "public", "."], translation: "Evito que me critiquen en público.",
          explanation: "'Avoid' + being + participio." },
        { words: ["They", "expect", "to", "be", "paid", "on", "time", "."], translation: "Esperan que se les pague a tiempo.",
          explanation: "'Expect' + to be + participio." },
        { words: ["She", "needs", "to", "be", "helped", "with", "this", "."], translation: "Ella necesita que la ayuden con esto.",
          explanation: "'Need' + to be + participio." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada verbo con la forma pasiva que le corresponde.",
      type: "match",
      questions: [
        { pairs: [
            ["enjoy", "being + participio"], ["want", "to be + participio"], ["hate", "being + participio"],
            ["deserve", "to be + participio"], ["avoid", "being + participio"], ["expect", "to be + participio"], ["recognition", "reconocimiento"],
          ],
          explanation: "Se sigue la misma regla gerundio/infinitivo, ahora en forma pasiva." }
      ]
    }
  ]
};
