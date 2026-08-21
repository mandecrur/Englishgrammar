window.EXERCISE_DATA = {
  title: "Impersonal Passive",
  translation: "Voz pasiva impersonal — declaraciones generales",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "widely known", es: "ampliamente conocido" },
    { en: "generally believed", es: "generalmente creído" },
    { en: "commonly agreed", es: "comúnmente acordado" },
    { en: "estimated", es: "estimado" },
    { en: "assumed", es: "asumido" },
    { en: "general public", es: "público en general" },
    { en: "statement", es: "declaración" },
    { en: "objective", es: "objetivo" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["widely known", "ampliamente conocido"], ["generally believed", "generalmente creído"], ["commonly agreed", "comúnmente acordado"],
          ["estimated", "estimado"], ["assumed", "asumido"], ["statement", "declaración"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>La voz pasiva impersonal con <strong>"it"</strong> se usa para hacer declaraciones
    generales sin identificar quién específicamente tiene esa opinión — muy común en textos
    científicos, periodísticos y académicos.</p>
    <table>
      <tr><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>It is widely known that smoking is harmful.</td><td>Es ampliamente conocido que fumar es dañino.</td></tr>
      <tr><td>It is estimated that 10,000 people attended.</td><td>Se estima que asistieron 10,000 personas.</td></tr>
      <tr><td>It is generally agreed that the plan will work.</td><td>Generalmente se acuerda que el plan funcionará.</td></tr>
    </table>
    <p>Estructura: <strong>It + is/was + participio + that + cláusula</strong>. Se usa para dar
    <strong>objetividad y formalidad</strong> a una afirmación, sin atribuirla a una persona específica.</p>
    <p>Verbos comunes en esta estructura: <strong>believe, know, estimate, agree, understand,
    report, assume, expect, suggest</strong>.</p>
    <p>Ejemplo: <strong>It has been suggested that the policy should change.</strong>
    (Se ha sugerido que la política debería cambiar — sin decir quién lo sugirió.)</p>
    <p>Esta estructura le da al texto un tono <strong>objetivo e impersonal</strong>, evitando
    "I think" o "people say", que suenan más subjetivos o informales.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "It is ___ known that smoking is harmful.", options: ["widely", "wide"], correct: 0,
          explanation: "'Widely known' es la colocación correcta." },
        { prompt: "It ___ estimated that 10,000 people attended.", options: ["is", "was"], correct: 0,
          explanation: "'Is estimated' en presente para hechos actuales." },
        { prompt: "It is generally ___ that the plan will work.", options: ["agreed", "agree"], correct: 0,
          explanation: "'Is agreed' voz pasiva con participio." },
        { prompt: "It has been ___ that the policy should change.", options: ["suggest", "suggested"], correct: 1,
          explanation: "'Has been suggested' es la forma pasiva correcta." },
        { prompt: "It is ___ that the economy will improve.", options: ["expect", "expected"], correct: 1,
          explanation: "'Is expected' es la forma pasiva correcta." },
        { prompt: "It is commonly ___ that exercise improves health.", options: ["know", "known"], correct: 1,
          explanation: "'Is known' es la forma pasiva correcta." },
        { prompt: "It ___ reported that sales increased last year.", options: ["is", "has"], correct: 0,
          explanation: "'Is reported' es la estructura correcta." },
        { prompt: "It is ___ that the meeting will be postponed.", options: ["assume", "assumed"], correct: 1,
          explanation: "'Is assumed' es la forma pasiva correcta." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la voz pasiva impersonal correcta.",
      type: "fill",
      questions: [
        { prompt: "It is ___ (know) that water boils at 100°C.", correct: ["known"], explanation: "is + participio." },
        { prompt: "It is ___ (estimate) that the project will cost $1 million.", correct: ["estimated"], explanation: "is + participio." },
        { prompt: "It is generally ___ (agree) that this is the best approach.", correct: ["agreed"], explanation: "is + participio." },
        { prompt: "It has been ___ (suggest) that we change the plan.", correct: ["suggested"], explanation: "has been + participio." },
        { prompt: "It is ___ (expect) that prices will rise.", correct: ["expected"], explanation: "is + participio." },
        { prompt: "It is ___ (believe) that the theory is correct.", correct: ["believed"], explanation: "is + participio." },
        { prompt: "It ___ (report) that the company is profitable.", correct: ["is reported"], explanation: "is + participio." },
        { prompt: "It is ___ (assume) that everyone agrees.", correct: ["assumed"], explanation: "is + participio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["It", "is", "widely", "known", "that", "smoking", "is", "harmful", "."], translation: "Es ampliamente conocido que fumar es dañino.",
          explanation: "It + is + participio + that + cláusula." },
        { words: ["It", "is", "estimated", "that", "10,000", "people", "attended", "."], translation: "Se estima que asistieron 10,000 personas.",
          explanation: "It + is + participio + that + cláusula." },
        { words: ["It", "is", "generally", "agreed", "that", "the", "plan", "will", "work", "."], translation: "Generalmente se acuerda que el plan funcionará.",
          explanation: "It + is + participio + that + cláusula." },
        { words: ["It", "has", "been", "suggested", "that", "the", "policy", "should", "change", "."], translation: "Se ha sugerido que la política debería cambiar.",
          explanation: "It + has been + participio + that + cláusula." },
        { words: ["It", "is", "expected", "that", "the", "economy", "will", "improve", "."], translation: "Se espera que la economía mejore.",
          explanation: "It + is + participio + that + cláusula." },
        { words: ["It", "is", "commonly", "known", "that", "exercise", "helps", "."], translation: "Es comúnmente sabido que el ejercicio ayuda.",
          explanation: "It + is + participio + that + cláusula." },
        { words: ["It", "is", "reported", "that", "sales", "increased", "."], translation: "Se reporta que las ventas aumentaron.",
          explanation: "It + is + participio + that + cláusula." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["It is widely known that", "Es ampliamente conocido que"], ["It is estimated that", "Se estima que"],
            ["It is generally agreed that", "Generalmente se acuerda que"], ["It has been suggested that", "Se ha sugerido que"],
            ["objective", "objetivo"], ["statement", "declaración"], ["general public", "público en general"],
          ],
          explanation: "La voz pasiva impersonal da objetividad sin identificar a la fuente." }
      ]
    }
  ]
};
